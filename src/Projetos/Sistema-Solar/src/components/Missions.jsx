import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.style.css';

class Missions extends React.Component {
  render() {
    return (
      <><Title headline="Missões" />
      <div data-testid="missions" className='Missions'>
        {missions.map((e) => (
          <MissionCard
            key={e.name}
            name={e.name}
            year={e.year}
            country={e.country}
            destination={e.destination} />))}
      </div></>);
  }
}

export default Missions;
