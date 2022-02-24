import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: 'Geist of Saint Traft',
      cardDescription: `Hexproof 
      (This creature can't be the target of spells or abilities your opponents control.)
      Whenever Geist of Saint Traft attacks, 
      create a 4/4 white Angel creature token with flying that's tapped and attacking.
      Exile that token at end of combat.`,
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: 'http://pm1.narvii.com/6369/5bd9d736a54d52f632f20e065c3c07fb126dc522_00.jpg',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      onInputChange: (e) => {
        const key = e.target.id;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [key]: value }, this.saveButtonEnabler);
      },
      onSaveButtonClick: () => {
        const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
          cardRare, cardTrunfo, cardList } = this.state;
        const card = {
          cardName,
          cardDescription,
          cardAttr1,
          cardAttr2,
          cardAttr3,
          cardImage,
          cardRare,
          cardTrunfo,
        };
        cardList.push(card);
        this.setState({
          cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: 'normal',
          cardTrunfo: false,
          hasTrunfo: cardTrunfo,
          cardList,
        }, this.saveButtonEnabler);
      },
      cardList: [],
    };
  }

  saveButtonEnabler = () => {
    let disabled = false;
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const [a1, a2, a3] = [Number(cardAttr1), Number(cardAttr2), Number(cardAttr3)];
    const maxTotal = 210;
    const min = 0;
    const max = 90;
    if (!cardName) disabled = true;
    if (!cardDescription) disabled = true;
    if (!cardImage) disabled = true;
    if (!cardRare) disabled = true;
    if ((a1 + a2 + a3) > maxTotal) disabled = true;
    if (a1 < min) disabled = true;
    if (a2 < min) disabled = true;
    if (a3 < min) disabled = true;

    if (a1 > max) disabled = true;
    if (a2 > max) disabled = true;
    if (a3 > max) disabled = true;
    this.setState({ isSaveButtonDisabled: disabled });
  };

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      cardList,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ onInputChange }
          onSaveButtonClick={ onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <div>
          {
            cardList.map((obj) => (<Card
              key={ obj.cardName }
              cardName={ obj.cardName }
              cardDescription={ obj.cardDescription }
              cardAttr1={ obj.cardAttr1 }
              cardAttr2={ obj.cardAttr2 }
              cardAttr3={ obj.cardAttr3 }
              cardImage={ obj.cardImage }
              cardRare={ obj.cardRare }
              cardTrunfo={ obj.cardTrunfo }
            />))
          }
          ;
        </div>
      </div>

    );
  }
}

export default App;
