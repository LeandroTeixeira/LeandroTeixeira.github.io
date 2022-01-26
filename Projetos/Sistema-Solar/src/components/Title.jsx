import React from 'react';
import PropTypes from 'prop-types';
import './Title.style.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return <div className='Title'>{headline}</div>;
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
