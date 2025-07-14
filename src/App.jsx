import { useState } from 'react';
import { EpisodeContainer } from './components/containers/EpisodesContainer';
import { LocationsContainer } from './components/containers/LocationsContainer';
import './Rick.css';

function App() {
  return (
    <div className="container">
      <h1>Rick and Morty Universe</h1>
      
      <div className="content-columns">
        <div className="content-column">
          <h2 className="section-title">Episodes</h2>
          <EpisodeContainer />
        </div>
        
        <div className="content-column">
          <h2 className="section-title">Locations</h2>
          <LocationsContainer />
        </div>
      </div>
    </div>
  );
}

export default App;