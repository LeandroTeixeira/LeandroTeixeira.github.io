
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Styles/Header.style.css';
import Projetos from '../Data/Project-List';

class Header extends React.Component{
  render(){
    return (<>
     <header className = "header">
        <h1> Leandro Luiz Duarte Teixeira</h1>
        <h3>Welcome to my portfolio</h3>
      </header>

      <nav className = "nav-bar">
        <NavLink to = "/home" className = "nav-item" activeClassName='nav-item active'>Home</NavLink>
        <NavLink to = "/about" className = "nav-item" activeClassName='nav-item active'>About Me</NavLink>
        <NavLink to = "/projects" className = "nav-item project-formatter dropdown" activeClassName='nav-item project-formatter dropdown active'>
          <span>Projects</span>
          <div className="dropdown-content">
            {Projetos.map((e) => <Link to="#">{e.nome}</Link> )}
          </div>
           
          </NavLink>
       
        <NavLink to = "/contact" className = "nav-item" activeClassName='nav-item active'>Contact</NavLink>
      </nav>
</>
    );
  };
}

export default Header;