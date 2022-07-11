import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'services/api';
import { Image, List } from './Cast.styled';
import UnknowPerson from 'images/unknown-person.jpg';
import { Spinner } from 'components/Spinner/Spinner';

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
const Cast = () => {
  const { movieId } = useParams();
  const { cast, status, error } = useFetchCastById(movieId);

  if (status === STATUS.PENDING) {
    return <Spinner />;
  }

  if (status === STATUS.REJECTED) {
    return <div>Error: {error.message}</div>;
  }

  if (status === STATUS.RESOLVED && cast.length === 0) {
    return <div>We don't have cast for this movie.</div>;
  }

  return (
    <List>
      {cast.map(({ name, profile_path, character, id }) => (
        <li key={id}>
          <Image
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : UnknowPerson
            }
            alt={`${name}`}
          ></Image>
          <h3>{name}</h3>
          <p>Character: {character || 'unknown'}</p>
        </li>
      ))}
    </List>
  );
};

export default Cast;
