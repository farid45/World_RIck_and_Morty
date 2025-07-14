import { useState } from 'react';
import { CharactersContainer } from '../containers/CharactersContainer';

export const LocationItem = ({ location }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Безопасное получение ID резидентов
  const residentIds = location.residents?.map(url => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  }).filter(Boolean) || [];

  return (
    <div className="content-card" onClick={() => setIsOpen(!isOpen)}>
      <div className="content-header">
        <h3>{location.name}</h3>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      
      <div className="content-meta">
        <span>Type: {location.type}</span>
        <span>Dimension: {location.dimension}</span>
      </div>

      {isOpen && (
        <div className="content-details">
          <h4>Residents:</h4>
          {residentIds.length > 0 ? (
            <CharactersContainer ids={residentIds} />
          ) : (
            <div className="no-data">No residents found</div>
          )}
        </div>
      )}
    </div>
  );
};