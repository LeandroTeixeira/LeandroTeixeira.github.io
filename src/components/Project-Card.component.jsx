import React from 'react';
import {defaultText} from '../Util/DefaultText';
import './Styles/Project.style.css';
// import {Link } from 'react-router-dom';

class ProjectCard extends React.Component{
  render() {
   //  const style= //style={{"background-color": "white", "color": "black"}};
    const {id, 
          name, 
          picture, 
          link,
          repLink, 
          description, 
          languages, 
          technologies, 
          bgColor, 
          color, 
          texts} = this.props;
    return(

    <div className="project" style={{"backgroundColor": bgColor, "color": color}} id={id} ><article>
    <h2><a href = {link ? link : repLink}>{name}</a></h2>
    <p><a href = {repLink}>{texts.link}</a></p>
    <header>
      <a href =  {link ? link : repLink}><img src={picture} alt="Project ilustration" /></a>
    </header>
    <section>
    <div>
    <h3>{texts.desc}</h3> 
    <div className="description">
    {description? description: defaultText}
    </div>
  </div>
  <div className = "divisor">
  
    <div>
    <h3> {texts.lang}</h3>
    <ul>
      {languages.map((e) => <li key={e}>{e}</li>)}
    </ul>
    </div>
    <span>  
    <h3>{texts.tech}</h3>
      <ul>
        {technologies.map((e) => <li key={e}>{e}</li>)}
      </ul>
      </span>
    
    </div>
  </section>
  </article>
  </div>);
  }
}

export default ProjectCard;