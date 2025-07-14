import { useEffect, useState } from 'react';
import { fetchEpisodes } from '../../api';
import { EpisodeList } from '../presentational/EpisodeList';

export const EpisodeContainer = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadEpisodes = async () => {
      try {
        setLoading(true);
        const data = await fetchEpisodes();
        setEpisodes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadEpisodes();
  }, []);

  return <EpisodeList episodes={episodes} loading={loading} error={error} />;
};