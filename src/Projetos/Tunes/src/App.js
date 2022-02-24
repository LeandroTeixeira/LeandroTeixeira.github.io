import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';

class Tunes extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path="/Tunes/search" component={ Search } />
            <Route path="/Tunes/album/:id" component={ Album } />
            <Route path="/Tunes/favorites" component={ Favorites } />
            <Route path="/Tunes/profile/edit" component={ ProfileEdit } />
            <Route path="/Tunes/profile" component={ Profile } />
            <Route exact path="/Tunes/" component={ Login } />
            <Route path="/Tunes/" component={ NotFound } />
          </Switch>
        </BrowserRouter>
        <p>TrybeTunes</p>
      </>
    );
  }
}

export default Tunes;
