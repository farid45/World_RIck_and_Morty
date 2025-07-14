const API_BASE = 'https://rickandmortyapi.com/api';

export const fetchAllPages = async (endpoint) => {
  let results = [];
  let nextPage = `${API_BASE}/${endpoint}`;
  
  while (nextPage) {
    const response = await fetch(nextPage);
    if (!response.ok) throw new Error(`Failed to fetch ${endpoint}`);
    const data = await response.json();
    results = [...results, ...data.results];
    nextPage = data.info.next;
  }
  
  return results;
};

export const fetchEpisodes = () => fetchAllPages('episode');
export const fetchLocations = () => fetchAllPages('location');

export const fetchCharacters = async (ids) => {
  if (!ids || ids.length === 0) return [];
  const response = await fetch(`${API_BASE}/character/${ids.join(",")}`);
  if (!response.ok) throw new Error('Failed to fetch characters');
  const data = await response.json();
  return Array.isArray(data) ? data : [data];
};