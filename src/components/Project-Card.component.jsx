import React from 'react';
import {defaultText} from '../Util/DefaultText';
import './Styles/Project.style.css';
// import {Link } from 'react-router-dom';

class ProjectCard extends React.Component{
  render() {
    const {id, name, picture, link, repLink, description, languages, technologies} = this.props;
    return(<div className="project" id={id}><article id = "Pixel-Art">
    <h2><a href = {link ? link : repLink}>{name}</a></h2>
    <p><a href = {repLink}>Click to Access Repository</a></p>
    <header>
      <a href =  {link ? link : repLink}><img src={picture} alt="Project ilustration" /></a>
    </header>
    <section>
    <div>
    <h3>Description: </h3> 
    <div className="description">
    {description? description: defaultText}
    </div>
  </div>
  <div class = "divisor">
  
  <div>
  <h3> Languages / Frameworks used:</h3>
  <ul>
    {languages.map((e) => <li>&bull; {e}</li>)}
  </ul>
  </div>
  <span>  <h3>Used technologies:</h3>
    <ul>
       {technologies.map((e) => <li>&bull; {e}</li>)}
    </ul></span>
  
  </div>
  </section>
  </article>
  </div>);
  }
}

export default ProjectCard;