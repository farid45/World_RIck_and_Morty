import { useEffect, useState } from 'react';
import { fetchCharacters } from '../../api';
import { CharacterList } from '../presentational/CharacterList';

export const CharactersContainer = ({ ids }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);
        const data = await fetchCharacters(ids);
        setCharacters(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, [ids]);

  return <CharacterList characters={characters} loading={loading} error={error} />;
};