import React from 'react';
import './Styles/Project.style.css';
// import {Link } from 'react-router-dom';

class ProjectCard extends React.Component{
  render() {
    const {id, name, picture} = this.props;
    return(<div className="project"><article id = "Pixel-Art">
    <h2><a href = "../Projetos/Pixel-Art/index.html">{name}</a></h2>
    <p><a href = "../Projetos/Pixel-Art/index.html">Clique Para Acessar o Repositório</a></p>
    <header>
      <a href = "../Projetos/Pixel-Art/index.html"><img src="https://leandroteixeira.github.io/Projetos/Pixel-Art/print.png" alt="description" /></a>
    </header>
    <section>
    <div>
    <h3>Description: </h3> 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis tempor turpis, elementum pulvinar justo sagittis at. Nullam sit amet nisi id diam tempus pretium. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse velit ipsum, dignissim ac dolor a, tempus ultricies magna. Vivamus rutrum, metus blandit euismod rutrum, diam orci tristique eros, vitae lobortis neque sem vitae neque. Nulla maximus vulputate mattis. Morbi lacinia nisi id eros porta, ultrices condimentum augue pharetra. Suspendisse facilisis placerat mi in mattis. Nullam elementum varius quam a maximus. Suspendisse nec ligula id lectus consectetur posuere. Morbi sollicitudin odio neque, vel pretium libero egestas quis. Praesent blandit, felis a tincidunt elementum, lectus libero ornare elit, vitae fermentum ligula sapien id libero. Integer massa nulla, euismod eu vestibulum nec, efficitur in felis. Duis congue mauris quis risus fermentum dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non est consequat, porta augue sed, tempor ante.
  
    Phasellus a facilisis justo. Aliquam semper molestie viverra. Maecenas nisl ipsum, iaculis vitae velit non, bibendum dictum tortor. Donec ultricies sit amet velit nec tincidunt. Donec est lectus, tempor at dapibus nec, mattis sit amet sem. Aliquam vitae ex in ante mattis feugiat vitae id ligula. Cras fringilla ante tincidunt mi luctus, non tristique orci ullamcorper. Vivamus pharetra interdum ornare. Aenean pretium facilisis malesuada. Suspendisse tempor sollicitudin dictum. Nulla eget interdum ipsum. Curabitur nec quam vulputate, lacinia sapien vel, venenatis sapien. Pellentesque aliquet eros in nisi fringilla, et venenatis nulla ullamcorper. Vivamus pulvinar, felis vitae molestie aliquet, nibh erat fermentum massa, eu accumsan quam tortor et urna.
    
    Phasellus quis nulla eleifend, ultricies erat feugiat, feugiat tellus. Cras sed augue vulputate, tristique diam vitae, varius nisi. Cras tincidunt, metus in efficitur porttitor, leo diam aliquet dui, aliquam mollis nulla tortor quis sapien. Aliquam nisl justo, vestibulum ut metus vitae, lobortis euismod velit. Fusce vel dignissim ante. Donec eu dapibus quam, eu cursus massa. Pellentesque urna ipsum, ultricies quis posuere non, volutpat sit amet nulla. In volutpat dui nec porta sollicitudin.
    
    Integer commodo imperdiet dapibus. Nunc at lectus vestibulum, tempus leo vitae, efficitur felis. Aliquam a metus augue. Sed imperdiet purus sit amet libero dapibus, eu venenatis nibh consequat. Curabitur convallis in felis convallis mattis. Donec interdum nulla tellus. Vivamus ac efficitur elit. Morbi sed ligula velit. Aenean viverra nunc id tincidunt laoreet.

    Phasellus a facilisis justo. Aliquam semper molestie viverra. Maecenas nisl ipsum, iaculis vitae velit non, bibendum dictum tortor. Donec ultricies sit amet velit nec tincidunt. Donec est lectus, tempor at dapibus nec, mattis sit amet sem. Aliquam vitae ex in ante mattis feugiat vitae id ligula. Cras fringilla ante tincidunt mi luctus, non tristique orci ullamcorper. Vivamus pharetra interdum ornare. Aenean pretium facilisis malesuada. Suspendisse tempor sollicitudin dictum. Nulla eget interdum ipsum. Curabitur nec quam vulputate, lacinia sapien vel, venenatis sapien. Pellentesque aliquet eros in nisi fringilla, et venenatis nulla ullamcorper. Vivamus pulvinar, felis vitae molestie aliquet, nibh erat fermentum massa, eu accumsan quam tortor et urna.
  </div>
  <div class = "divisor">
  
  <div>
    <h3>Used technologies:</h3>
    <ul>
      <li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li><li>&bull; CSS </li><li>&bull; JS </li><li>&bull; HTML</li>
    </ul>
  </div>
  <span><h3> Complexity : Low</h3></span>
  
  </div>
  </section>
  </article>
  </div>);
  }
}

export default ProjectCard;