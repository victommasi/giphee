import api from "./api";

export const searchGifs = (term: string, limit: number, offset: number) => {
  return api.get('/search', {
    params:
    {
      q: term,
      limit: limit,
      offset: offset,
      rating: 'g'
    }
  });
}

export const fetchTredingGifs = (limit: number, offset: number) => {
  return api.get('/trending', {
    params:
    {
      limit: limit,
      offset: offset,
      rating: 'g'
    }
  });
}