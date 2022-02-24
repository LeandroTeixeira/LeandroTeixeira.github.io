import React from 'react';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Header from './components/header';
import './App.css';

class SistemaSolar extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
      </div>);
  }
}

export default SistemaSolar;
