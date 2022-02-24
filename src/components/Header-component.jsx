
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Styles/Header.style.css';
import Projetos from '../Util/Project-List';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends React.Component{

  render(){
    const {update, language, texts} = this.props;
    return (<>
      <header className = "header">
      <h1> Leandro Luiz Duarte Teixeira</h1>
      <span className="language-selector">
        <button onClick={update} className={language === "EN" ? "active": "" } value = "EN">EN</button>
        <button onClick={update} className={language === "PT" ? "active": "" } value = "PT">PT</button>
      </span>
       
        <h3>{texts.title}</h3>
      </header>
     

      <nav className = "nav-bar">
        <NavLink to = "/home" className = "nav-item" activeClassName='nav-item active'>{texts.home}</NavLink>
        <NavLink to = "/about" className = "nav-item" activeClassName='nav-item active'>{texts.about}</NavLink>
        <NavLink to = "/projects" className = {`nav-item project-formatter-${language} dropdown`} 
        activeClassName= {`nav-item project-formatter-${language} dropdown active`} >
          <span>{texts.project}</span>
          <div className="dropdown-content">
            {Projetos.map((e) => <Link to={`/projects#${e.id}`}>{e.nome}</Link> )}
          </div>
           
          </NavLink>
       
        <NavLink to = "/contact" className = "nav-item" activeClassName='nav-item active'>{texts.contact}</NavLink>
      </nav>
</>
    );
  };
}

export default Header;