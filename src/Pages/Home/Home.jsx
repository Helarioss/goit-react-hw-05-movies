import { Spinner } from 'components/Spinner';
import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { List, MovieLink, Poster, MovieTitle, Title } from './Home.styled';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setStatus(STATUS.PENDING);
      try {
        const movies = await getTrendingMovies();
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }

    fetchMovies();
  }, []);

  return { movies, status, error };
};

const Home = () => {
  const { movies, status, error } = useFetchMovies();
  return (
    <>
      <Title>Trending today</Title>
      {status === STATUS.PENDING && <Spinner />}

      {status === STATUS.REJECTED && <h1>Error: {error.message}</h1>}

      {status === STATUS.RESOLVED && (
        <List>
          {movies.map(({ title, poster_path, name, id }) => (
            <li key={id}>
              <MovieLink to={`/movies/${id}`}>
                <Poster
                  src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                  alt={`${title}'s poster`}
                ></Poster>
                <MovieTitle>{title ?? name}</MovieTitle>
              </MovieLink>
            </li>
          ))}
        </List>
      )}
    </>
  );
};

export default Home;
