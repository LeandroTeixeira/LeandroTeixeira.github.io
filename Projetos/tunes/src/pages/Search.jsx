import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Carregando from './Carregando';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      search: '',
      searchAux: '',
      disabled: true,
      waiting: false,
      finished: false,
      albums: [],
    };
  }

listAlbums = (albums) => {
  const { finished, search } = this.state;
  if (!finished) return;
  if (albums.length === 0) return (<p>Nenhum álbum foi encontrado</p>);

  return (
    <div>
      <p>
        {`Resultado de álbuns de: ${search}`}
      </p>
      <div>
        {' '}
        { albums.map((e) => (
          <div key={ e.collectionId }>
            <Link
              to={ `/album/${e.collectionId}` }
              data-testid={ `link-to-album-${e.collectionId}` }
            >
              {' '}
              {e.collectionName}
              {' '}

            </Link>
          </div>
        )) }
      </div>

    </div>);
};

  mainContent = (disabled, search, albums, searchAux) => (
    <>
      <input
        type="text"
        data-testid="search-artist-input"
        value={ searchAux }
        onChange={ (e) => {
          const v = e.target.value;
          this.setState({ searchAux: v,
            disabled: v.length < 2 });
        } }
      />

      <button
        type="button"
        disabled={ disabled }
        data-testid="search-artist-button"
        onClick={ async () => {
          const s = searchAux;
          this.setState({ search: searchAux,
            searchAux: '',
            waiting: true,
            finished: false });
          const response = await searchAlbumsAPI(s);
          this.setState({ waiting: false, albums: response, finished: true });
          console.log(response);
        } }
      >
        Pesquisar
      </button>
      {this.listAlbums(albums)}
    </>)

  render() {
    const { disabled, search, waiting, albums, searchAux } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          { waiting ? <Carregando src="Search" update={ false } />
            : this.mainContent(disabled, search, albums, searchAux)}
        </form>
      </div>);
  }
}

export default Search;
