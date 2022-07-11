import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'services/api';
import { FaSearch } from 'react-icons/fa';
import {
  Form,
  List,
  MovieLink,
  MovieTitle,
  Poster,
  SearchButton,
  SearchInput,
} from './Movies.styled';
import { Spinner } from 'components/Spinner/Spinner';

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

const Movies = () => {
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
      <Form onSubmit={onSubmit}>
        <SearchInput type="text" name="search" />
        <SearchButton type="submit">
          <FaSearch size={20} />
        </SearchButton>
      </Form>

      {status === STATUS.PENDING && <Spinner />}

      {status === STATUS.REJECTED && <h1>Error: {error.message}</h1>}

      {status === STATUS.RESOLVED && (
        <List>
          {movies.map(({ title, name, poster_path, id }) => (
            <li key={id}>
              <MovieLink
                to={`/movies/${id}`}
                state={{ from: `/movies?query=${query}` }}
              >
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

export default Movies;
