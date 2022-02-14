import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import Carregando from './Carregando';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      artist: '',
      albumName: '',
      musics: [],
      favorites: [],
      carregando: true,
    };
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const musicList = await getMusics(id);
    const fav = await getFavoriteSongs();
    console.log(fav);
    this.setState({ artist: musicList[0].artistName,
      albumName: musicList[0].collectionName,
      musics: musicList.slice(1),
      favorites: fav });
    this.setState({ carregando: false });
  }

  addToFavorites = async (id) => {
    this.setState({ carregando: true });
    await addSong(id);
    console.log(`Adding song ${id}`);
    this.setState({ carregando: false });
    this.setState({ carregando: true });
    const fav = await getFavoriteSongs();
    console.log(fav);
    this.setState({ carregando: false, favorites: fav });
  }

  removeFromFavorites = async (id) => {
    this.setState({ carregando: true });
    await removeSong(id);
    console.log(`REmoving song ${id}`);
    this.setState({ carregando: false });
  }

  render() {
    const { artist, albumName, musics, favorites } = this.state;
    const fail = -1;
    return (
      <div data-testid="page-album">
        <Header />
        <p data-testid="artist-name">{artist}</p>
        <p data-testid="album-name">
          {' '}
          {albumName}
        </p>
        {musics.map((e) => (
          <div key={ e.trackId }>
            <MusicCard
              trackId={ e.trackId }
              trackName={ e.trackName }
              previewUrl={ e.previewUrl }
              check={ favorites.indexOf(e.trackId) !== fail }
              addSong={ this.addToFavorites }
              removeSong={ this.removeFromFavorites }
            />
          </div>))}

      </div>);
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default Album;
