import React from 'react';
import './Styles/Projects.style.css';
import ProjectCard from './Project-Card.component';
import Projetos from '../Util/Project-List';

class Projects extends React.Component{
  render() {
    const {texts} = this.props;
    return(<div className='projects'>
      {Projetos.map((e) => <ProjectCard 
              key={e.id}  
              id={e.id}
               name={e.nome} 
               picture={e.picture} 
               link={e.link} 
               repLink={e.repositoryLink} 
               description={e.descricao}
               languages={e.languages}
               technologies={e.tecnologies}
               bgColor={e.BGColor}
               color={e.Color}
               texts={texts}/>)}
      </div>);
  }
}

export default Projects;