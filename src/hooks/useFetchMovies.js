import { useEffect, useState } from 'react';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const useFetchMovies = getMovies => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setStatus(STATUS.PENDING);
      try {
        const movies = await getMovies();
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
        console.log(movies);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }
    fetchMovies();
  }, [getMovies]);

  return { movies, status, error };
};
