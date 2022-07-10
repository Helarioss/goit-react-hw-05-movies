import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const useSearchMovies = query => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      if (query) {
        setStatus(STATUS.PENDING);
        try {
          const movies = await searchMovies(query);
          setMovies(movies);
          setStatus(STATUS.RESOLVED);
        } catch (error) {
          setError(error);
          setStatus(STATUS.REJECTED);
        }
      }
    }
    fetchMovies();
  }, [query]);

  return { movies, status, error };
};

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const { movies, status, error } = useSearchMovies(query);

  const onSubmit = event => {
    event.preventDefault();

    const query = event.target.elements.search.value.trim();
    setSearchParams({ query });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="search" />
        <button type="submit">Search</button>
      </form>

      {status === STATUS.PENDING && <p>Загрузка</p>}

      {status === STATUS.REJECTED && <h1>Error: {error.message}</h1>}

      {status === STATUS.RESOLVED && (
        <ul>
          {movies.map(({ title, name, id }) => (
            <li key={id}>
              <Link
                to={`/movies/${id}`}
                state={{ from: `/movies?query=${query}` }}
              >
                {title ?? name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
