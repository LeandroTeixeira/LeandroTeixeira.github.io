require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
//    fail('Teste vazio');
  });
  it('Executa a função fetchProducts com o argumento "computador" e testa se fetch foi chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    //fail('Teste vazio');
  });
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
    //fail('Teste vazio');
  });
  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    const fetched = await fetchProducts('computador');
    expect(fetched).toBe(computadorSearch);
    //fail('Teste vazio');
  });
  it('Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url. Dica: Lembre-se de usar o new Error(\'mensagem esperada aqui\') para comparar com o objeto retornado da API.', async () => {
    expect(fetchProducts()).rejects.toThrow();
    //fail('Teste vazio');
  });
  
});
