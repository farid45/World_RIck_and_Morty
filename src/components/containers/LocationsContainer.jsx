import { useEffect, useState } from 'react';
import { fetchLocations } from '../../api';
import { LocationList } from '../presentational/LocationList';

export const LocationsContainer = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchLocations();
        setLocations(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return <LocationList locations={locations} loading={loading} error={error} />;
};