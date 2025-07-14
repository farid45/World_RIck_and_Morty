export const CharacterItem = ({ character }) => {
    const statusColor = {
        Alive: 'green',
        Dead: 'red',
        unknown: 'gray'
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
                    <span style={{ color: statusColor[character.status] }}>
                        {character.status} - {character.species}
                    </span>
                    <span>Gender: {character.gender}</span>
                    <span>Origin: {character.origin?.name}</span>
                    <span>Location: {character.location?.name}</span>
                </div>
            </div>
        </div>
    );
};