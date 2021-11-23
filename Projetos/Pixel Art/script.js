const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);
const backgroundColor = rootStyles.getPropertyValue('--background-color');
const input = document.getElementById('board-size');
function setBGColor(source, color) {
  const obj = source;
  obj.style.setProperty('background-color', color);
  return true;
}

function paint(source) {
  const obj = source;
  const selected = rootStyles.getPropertyValue('--selected-color').trim();
  if (obj.target.style.backgroundColor !== selected) setBGColor(obj.target, selected);
  else setBGColor(obj.target, backgroundColor);
  return true;
}

function setClickListeners(type, fun) {
  const list = document.getElementsByClassName(type);
  for (let i = 0; i < list.length; i += 1) {
    list[i].addEventListener('click', fun);
  }
  return true;
}

function setSelected(source) {
  const element = source.target;
  const selectedElement = document.getElementsByClassName('selected')[0];
  if (element === selectedElement) return;
  selectedElement.classList.toggle('selected');
  const bgColor = getComputedStyle(element).getPropertyValue('background-Color');
  root.style.setProperty('--selected-color', bgColor);
  element.classList.toggle('selected');
  return true;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function generateColors() {
  const prim = getRandomInt(172, 256);
  const sec = [getRandomInt(64, 172), getRandomInt(0, 128)];
  let flag = Math.round(Math.random());
  root.style.setProperty('--second-color', `rgb(${prim},${sec[flag]},${sec[1 - flag]})`);
  flag = Math.round(Math.random());
  root.style.setProperty('--third-color', `rgb(${sec[1 - flag]},${prim},${sec[flag]})`);
  flag = Math.round(Math.random());
  root.style.setProperty('--fourth-color', `rgb(${sec[1 - flag]},${sec[flag]},${prim})`);
  return true;
}

function clearBoard() {
  const pixelList = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixelList.length; i += 1) setBGColor(pixelList[i], backgroundColor);
}

function generateBoard() {
  const size = input.value;
  clearBoard();
  if (!size) {
    alert('Board inválido!');
    return false;
  }
  root.style.setProperty('--size', size);
  return true;
}

function setValue(src) {
  const source = src.target;
  if (source.value < 5) source.value = 5;
  if (source.value > 50) source.value = 50;
}

window.onload = (() => {
  setClickListeners('pixel', paint);
  setClickListeners('color', setSelected);
  setClickListeners('clear', clearBoard);
  const button = document.getElementById('generate-board');

  button.addEventListener('click', generateBoard);
  input.addEventListener('input', setValue);
  generateColors();
})();
