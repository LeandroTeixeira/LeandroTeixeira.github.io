import React from 'react';
import { Link } from 'react-router-dom';
import Carregando from '../pages/Carregando';
import { getUser } from '../services/userAPI';
import './Header.style.css';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  async componentDidMount() {
    const n = await getUser();
    this.setState({ name: n.name });
  }

  render() {
    const { name } = this.state;
    return (

      <header data-testid="header-component">
        <div className = "header">
        <Link className="nav-bar" to="/search" data-testid="link-to-search"> Search </Link>
        <Link className="nav-bar" to="/favorites" data-testid="link-to-favorites"> Favorites </Link>
        <Link className="nav-bar" to="/profile" data-testid="link-to-profile"> Profile </Link>
        </div>
        {name.length > 0
          ? <p data-testid="header-user-name">{name}</p>
          : <Carregando src="Header" update={ false } /> }
      </header>);
  }
}

export default Header;
