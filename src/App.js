import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About-component';
import Projects from './components/Projects-component';
import Home from './components/Home-component';
import Contact from './components/Contact-component';
import Header from './components/Header-component';
import './App.css';
import Footer from './components/Footer.component';
import {readLanguage, setLanguage} from './Util/Persistence';
import {headerEN, headerPT, ProjectCardEN, ProjectCardPT} from './Util/DefaultText';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      "language":'',
    }
  }
  
  componentDidMount() {
    this.setState({"language": readLanguage()});
  }

  updateLanguage = (e) => {
    this.setState({"language": e.target.value},setLanguage(e.target.value));
  }

  render(){
  const {language} = this.state;
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Header 
          texts={language === "EN"?headerEN:headerPT}
          update={this.updateLanguage}
          language={language}
        />
        <Switch>
          <Route path='/about'>{<About language={language}/>}</Route>
          <Route path='/projects'>
            {
              <Projects 
                language={language}
                texts={language === "EN"?ProjectCardEN:ProjectCardPT}
              />
              }
          </Route>
          <Route path='/contact'>{<Contact language={language}/>}</Route>
          <Route path='/home'>{<Home language={language}/>}</Route>
          <Route exact path='/'><Redirect to='/home' /></Route>
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
  }
}

export default App;
