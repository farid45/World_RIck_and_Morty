export const CharacterItem = ({ character }) => {
    const statusColor = {
        Alive: '#55cc44',
        Dead: '#ff5555',
        unknown: '#bdc3c7'
    };

    const characterData = {
        species: character.species || 'Unknown species',
        status: character.status || 'unknown',
        gender: character.gender || 'Unknown',
        origin: character.origin?.name || 'Unknown origin',
        location: character.location?.name || 'Unknown location'
    };

    return (
        <div className="character-card">
            <img
                src={character.image}
                alt={character.name}
                className="character-image"
            />
            <div className="character-info">
                <h3>{character.name}</h3>
                <div className="character-meta">
                    <div className="meta-row">
                        <span className="status-dot" style={{ backgroundColor: statusColor[characterData.status] }} />
                        <span>{characterData.species} • {characterData.status}</span>
                    </div>
                    <div className="meta-row">
                        <span>Gender: {characterData.gender}</span>
                    </div>
                    <div className="meta-row">
                        <span>Origin: {characterData.origin}</span>
                    </div>
                    <div className="meta-row">
                        <span>Location: {characterData.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};