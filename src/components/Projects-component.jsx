import React from 'react';
import './Styles/Projects.style.css';
import ProjectCard from './Project-Card.component';
import Projetos from '../Data/Project-List';

class Projects extends React.Component{
  render() {
    return(<div className='projects'>
      {Projetos.map((e) => <ProjectCard id={e.id}
               name={e.nome} picture={e.picture} />)}
      </div>);
  }
}

export default Projects;