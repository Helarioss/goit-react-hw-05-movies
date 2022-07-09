import { useFetchMovies } from 'hooks/useFetchMovies';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const useFetchMovieById = id => {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setStatus(STATUS.PENDING);
      try {
        const movies = await getMovieById(id);
        setMovies(movies);
        setStatus(STATUS.RESOLVED);
        console.log(movies);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }
    fetchMovies();
  }, [id]);

  return { movies, status, error };
};

export const MovieDetails = () => {
  const { movieId } = useParams();
  const {
    movies: {
      title,
      poster_path,
      overview,
      genres,
      release_date,
      vote_average,
    },
    status,
    error,
  } = useFetchMovieById(movieId);

  return (
    <>
      <Link to="/">Go back</Link>

      {status === STATUS.PENDING && <div>Загрузка</div>}

      {status === STATUS.REJECTED && <div>Error: {error.message}</div>}

      {status === STATUS.RESOLVED && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={`${title}'s poster`}
          ></img>
          <h1>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User Score: {vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genres.map(({ name }) => name).join(', ')}</p>
          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <hr />
          <Outlet />
        </div>
      )}
    </>
  );
};
