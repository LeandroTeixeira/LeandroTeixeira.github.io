import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import About from './components/About-component';
import Projects from './components/Projects-component';
import Project from './components/Project.component';
import Home from './components/Home-component';
import Contact from './components/Contact-component';
import Header from './components/Header-component';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/about'>{<About />}</Route>
          <Route path='/projects'>{<Projects />}</Route>
          <Route path='/projects/:id'>{<Project />}</Route>
          <Route path='/contact'>{<Contact />}</Route>
          <Route path='/home'>{<Home />}</Route>
          <Route exact path='/'><Redirect to='/home' /></Route>
        </Switch>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
