import { CharacterItem } from "./CharacterItem";

export const CharacterList = ({ characters, isLoading, error }) => {
    if (isLoading) {
        return <div className="loading">Loading characters...</div>;
    }

    if (error) {
        return <div className="error">{error}</div>;
    }

    if (!characters || characters.length === 0) {
        return <div className="no-data">No characters found</div>;
    }

    return (
        <div className="characters-container">
            {characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
            ))}
        </div>
    );
};