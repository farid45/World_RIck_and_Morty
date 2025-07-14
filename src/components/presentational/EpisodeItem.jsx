import { useState, useMemo } from 'react';
import { CharactersContainer } from '../containers/CharactersContainer';

export const EpisodeItem = ({ episode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const characterIds = useMemo(() => 
    episode.characters?.map(url => url.split('/').pop()).filter(Boolean) || [],
    [episode.characters]
  );

  return (
    <div className="content-card" onClick={() => setIsOpen(!isOpen)}>
      <div className="content-header">
        <h3>{episode.episode}: {episode.name}</h3>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      
      <div className="content-meta">
        <span>Air date: {episode.air_date}</span>
      </div>

      {isOpen && (
        <div className="content-details">
          <h4>Characters ({characterIds.length}):</h4>
          <CharactersContainer ids={characterIds} />
        </div>
      )}
    </div>
  );
};