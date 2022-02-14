import React from 'react';
import PropTypes from 'prop-types';

class MusicCard extends React.Component {
  render() {
    const { trackName, previewUrl, trackId, addSong, removeSong, check } = this.props;
    return (
      <div>
        {' '}
        <p>{trackName} - {trackId}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        Favorita
        {' '}
        <input
          type="checkbox"
          data-testid={ `checkbox-music-${trackId}` }
          defaultChecked={ check }
          onChange={ (e) => {
            if (e.target.checked) addSong(trackId);
            else removeSong(trackId);
          } }
        />
      </div>);
  }
}
MusicCard.propTypes = {
  trackId: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  addSong: PropTypes.func.isRequired,
  removeSong: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
};
export default MusicCard;
