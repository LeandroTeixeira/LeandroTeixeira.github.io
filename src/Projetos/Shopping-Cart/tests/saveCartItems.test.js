const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;;', () => {
      const argument = "<ol><li>Item</li></ol>";
      saveCartItems(argument);
      expect(localStorage.setItem).toHaveBeenCalled();
    //    fail('Teste vazio');
    });

  it('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado;;', () => {
      const argument = "<ol><li>Item</li></ol>";
      saveCartItems(argument);
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', argument);
    //    fail('Teste vazio');
    });
});
