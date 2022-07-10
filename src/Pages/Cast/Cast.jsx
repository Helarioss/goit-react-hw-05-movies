import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/api';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const useFetchCastById = id => {
  const [cast, setCast] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCast() {
      setStatus(STATUS.PENDING);
      try {
        const cast = await getCastById(id);
        setCast(cast);
        setStatus(STATUS.RESOLVED);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }
    fetchCast();
  }, [id]);

  return { cast, status, error };
};
export const Cast = () => {
  const { movieId } = useParams();
  const { cast, status, error } = useFetchCastById(movieId);

  if (status === STATUS.PENDING) {
    return <div>Загрузка</div>;
  }

  if (status === STATUS.REJECTED) {
    return <div>Error: {error.message}</div>;
  }

  if (status === STATUS.RESOLVED && cast.length === 0) {
    return <div>We don't have cast for this movie.</div>;
  }

  return (
    <ul>
      {cast.map(({ name, profile_path, character, id }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
            alt={`${name}`}
          ></img>
          <h3>{name}</h3>
          <p>Character: {character || 'unknown'}</p>
        </li>
      ))}
    </ul>
  );
};
