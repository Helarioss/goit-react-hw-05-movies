import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import NotFoundPage from 'Pages/NotFoundPage';
import { Spinner } from 'components/Spinner';
import {
  BaseInformation,
  ButtonBack,
  Description,
  Image,
} from './MovieDetails.styled';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const useFetchMovieById = id => {
  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setStatus(STATUS.PENDING);
      try {
        const movie = await getMovieById(id);
        setMovie(movie);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }
    fetchMovies();
  }, [id]);

  return { movie, status, error };
};

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const prevLocation = location?.state?.from ?? '/';

  const { movie, status } = useFetchMovieById(movieId);

  const { title, poster_path, overview, genres, release_date, vote_average } =
    movie;

  return (
    <>
      <ButtonBack to={prevLocation}>
        <BsFillArrowLeftCircleFill size={24} />
        Go back
      </ButtonBack>

      {status === STATUS.PENDING && <Spinner />}

      {status === STATUS.REJECTED && <NotFoundPage />}

      {status === STATUS.RESOLVED && (
        <div>
          <BaseInformation>
            <Image
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={`${title}'s poster`}
            ></Image>
            <Description>
              <h1>
                {title} ({release_date.slice(0, 4)})
              </h1>
              <p>User Score: {vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{overview}</p>
              <h2>Genres</h2>
              <p>{genres.map(({ name }) => name).join(', ')}</p>
            </Description>
          </BaseInformation>
          <hr />
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast" state={{ from: prevLocation }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: prevLocation }}>
                Reviews
              </Link>
            </li>
          </ul>
          <hr />
          <Suspense fallback={<Spinner />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
