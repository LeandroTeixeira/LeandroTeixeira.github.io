/* Referencias :
 https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
 https://www.w3schools.com/jsref/prop_win_localstorage.asp
*/
const listaTarefas = document.getElementById('lista-tarefas');
const tarefa = document.getElementById('texto-tarefa');
const criar = document.getElementById('criar-tarefa');
const apagaTudo = document.getElementById('apaga-tudo');
const remover = document.getElementById('remover-selecionado');
const removerFinalizados = document.getElementById('remover-finalizados');
const moverCima = document.getElementById('mover-cima');
const moverBaixo = document.getElementById('mover-baixo');
const log = document.getElementById('log');
const salvarButton = document.getElementById('salvar-tarefas');
let isSalvar = false;

let tarefas = [];
let selected = -1;

function salvar() {
  if (isSalvar) {
    const tarefasObj = [];
    for (let i = 0; i < tarefas.length; i += 1) {
      const item = tarefas[i];
      const obj = {
        texto: item.innerText,
        classes: item.classList,
      };
      tarefasObj.push(obj);
    }
    localStorage.setItem('lista', JSON.stringify(tarefasObj));
  } else localStorage.removeItem('lista');
}

function replaceChildren(parent, children) {
  while (parent.firstChild) parent.removeChild(parent.firstChild);
  for (let i = 0; i < children.length; i += 1) parent.appendChild(children[i]);
  salvar();
}
const subir = (qtd) => {
  let q = qtd;
  if (selected < 0) log.innerText = 'Não existe nenhuma tarefa selecionada para movimentar';
  if (selected === 0) {
    log.innerText = 'A tarefa já está na primeira posição';
    return;
  }
  while (q > 0 && selected > 0) {
    const aux = tarefas[selected - 1];
    tarefas[selected - 1] = tarefas[selected];
    tarefas[selected] = aux;
    q -= 1;
    selected -= 1;
  }
  log.innerText = `A tarefa ${tarefas[selected].innerText} subiu uma posição`;
  replaceChildren(listaTarefas, tarefas);
  return true;
};

const descer = (qtd) => {
  if (selected < 0) {
    log.innerText = 'Não existe nenhuma tarefa selecionada para movimentar';
    return false;
  }
  if (selected === tarefas.length - 1) {
    log.innerText = 'A tarefa já está na última posição';
    return;
  }
  let q = qtd;
  while (q > 0 && selected < tarefas.length - 1) {
    const aux = tarefas[selected + 1];
    tarefas[selected + 1] = tarefas[selected];
    tarefas[selected] = aux;
    q -= 1;
    selected += 1;
  }
  log.innerText = `A tarefa ${tarefas[selected].innerText} desceu uma posição`;
  replaceChildren(listaTarefas, tarefas);
};

function updateSelected(source) {
  if (selected > -1) tarefas[selected].classList.toggle('selected');
  const currSelected = tarefas.indexOf(source.target);
  if (selected === currSelected) {
    log.innerText = `O elemento ${tarefas[selected].innerText} foi desselecionado.`;
    selected = -1;
    return;
  }
  selected = tarefas.indexOf(source.target);
  log.innerText = `O elemento ${tarefas[selected].innerText} foi selecionado.`;
  source.target.classList.toggle('selected');
  replaceChildren(listaTarefas, tarefas);
  //  for (let element of tarefas) console.log (source.target === element);
}

function updateCompleted(source) {
  const classes = source.target.classList;
  const texto = `O elemento ${source.target.innerText} foi marcado`;
  if (classes.contains('selected')) classes.toggle('selected');
  classes.toggle('completed');
  if (classes.contains('completed')) log.innerText = texto.concat(' como completado.');
  else log.innerText = texto.concat(' como não completado.');
  selected = -1;
  salvar();
}

function criarTarefa(source) {
  const item = document.createElement('li');
  const texto = source;
  if (!texto) return;
  item.appendChild(document.createTextNode(texto));
  item.addEventListener('click', updateSelected);
  item.addEventListener('dblclick', updateCompleted);
  tarefas.push(item);
  log.innerText = `A tarefa ${source} foi criado e adicionado à última posição`;
  salvar();
  return true;
}

function adicionarElemento() {
  criarTarefa(tarefa.value);
  replaceChildren(listaTarefas, tarefas);
  tarefa.value = '';
}

function reset() {
  replaceChildren(listaTarefas, []);
  tarefas = [];
  log.innerText = 'Todos os elementos foram removidos da lista de forma bem sucedida';
  salvar();
}

function removerElementoSelecionado() {
  if (selected === -1) {
    log.innerText = 'Não existe nenhum elemento selecionado!';
    return false;
  }
  log.innerText = `O elemento ${tarefas[selected].innerText} foi removido de forma bem sucedida`;
  tarefas.splice(selected, 1);
  selected = -1;
  replaceChildren(listaTarefas, tarefas);
}

function disableSelected() {
  for (let i = 0; i < tarefas.length; i += 1) {
    if (tarefas[i].classList.contains('selected')) tarefas[i].classList.remove('selected');
  }
  selected = -1;
}

function removeItems() {
  const itens = [];
  let i = 0;
  while (i < tarefas.length) {
    if (tarefas[i].classList.contains('completed')) {
      itens.push(tarefas[i].innerText);
      tarefas.splice(i, 1);
    } else i += 1;
  }
  return itens;
}

function removerItensFinalizados() {
  disableSelected();
  const itens = removeItems();
  const texto = 'Nenhum item foi removido, marque algum antes de tentar novamente';
  if (itens.length === 0) log.innerText = texto;
  else log.innerText = `O(s) item(s) ${itens} foram removidos porque haviam sido completados`;
  replaceChildren(listaTarefas, tarefas);
}

function keyAddElemento(e) {
  if (e.key === 'Enter') adicionarElemento();
}

function moverItem(direcao, qtd) {
  if (direcao === 'cima') return subir.bind(null, qtd);
  if (direcao === 'baixo') return descer.bind(null, qtd);
  alert('ERRO! LISTENER INVÁLIDO');
}

function setSalvamento() {
  isSalvar = salvarButton.checked;
  salvar();
}

function inicializar() {
  const storage = localStorage.getItem('lista');
  const test = JSON.parse(storage);
  for (let i = 0; i < test.length; i += 1) {
    criarTarefa(test[i].texto);
    const values = Object.values(test[i].classes);
    for (let j = 0; j < values.length; j += 1) tarefas[i].classList.toggle(values[j]);
    if (tarefas[i].classList.contains('selected')) selected = i;
  }
  replaceChildren(listaTarefas, tarefas);
  salvarButton.checked = true;
  isSalvar = true;
  salvar();
  log.innerText = 'Os itens foram carregados com sucesso';
}

function setListeners() {
  criar.addEventListener('click', adicionarElemento);
  tarefa.addEventListener('keydown', keyAddElemento);
  apagaTudo.addEventListener('click', reset);
  remover.addEventListener('click', removerElementoSelecionado);
  removerFinalizados.addEventListener('click', removerItensFinalizados);
  moverCima.addEventListener('click', moverItem('cima', 1));
  moverBaixo.addEventListener('click', moverItem('baixo', 1));
  salvarButton.addEventListener('click', setSalvamento);
}
window.onload = (() => {
  setListeners();
  inicializar();
})();
