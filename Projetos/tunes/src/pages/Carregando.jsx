import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Carregando extends React.Component {
  render() {
    const { src, update } = this.props;
    if (src === 'Login' && update) return <Redirect to="/search" />;
    return (
      <div>
        Carregando...
      </div>);
  }
}

Carregando.propTypes = {
  src: PropTypes.string.isRequired,
  update: PropTypes.bool.isRequired,
};

export default Carregando;
