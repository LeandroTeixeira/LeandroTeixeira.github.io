import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  trunfoChecker = (hasTrunfo, cardTrunfo, onInputChange) => {
    if (!hasTrunfo) {
      return (
        <>
          <input
            id="cardTrunfo"
            type="checkbox"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
          Super Trunfo
        </>
      );
    }
    return 'Você já tem um Super Trunfo em seu baralho';
  }

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
      onSaveButtonClick } = this.props;
    return (
      <div>
        <form>
          <h3>
            Nome da Carta
            <input
              id="cardName"
              type="text"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />

          </h3>
          <h5>
            {' '}
            Descrição da Carta
            <textarea
              id="cardDescription"
              rows="4"
              cols="50"
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
            />

          </h5>
          <input
            id="cardAttr1"
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }

          />
          <input
            id="cardAttr2"
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }

          />
          <input
            id="cardAttr3"
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }

          />
          <input
            id="cardImage"
            type="text"
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }

          />
          <select
            id="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
          { this.trunfoChecker(hasTrunfo, cardTrunfo, onInputChange)}
          <button
            type="button"
            data-testid="save-button"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
          >
            Salvar

          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
