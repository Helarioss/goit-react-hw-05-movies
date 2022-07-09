import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'services/api';

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const useFetchReviewsById = id => {
  const [reviews, setReviews] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReviews() {
      setStatus(STATUS.PENDING);
      try {
        const reviews = await getReviewsById(id);
        setReviews(reviews);
        setStatus(STATUS.RESOLVED);
        console.log(reviews);
      } catch (error) {
        setError(error);
        setStatus(STATUS.REJECTED);
      }
    }
    fetchReviews();
  }, [id]);

  return { reviews, status, error };
};
export const Reviews = () => {
  const { movieId } = useParams();
  const { reviews, status, error } = useFetchReviewsById(movieId);

  if (status === STATUS.PENDING) {
    return <div>Загрузка</div>;
  }

  if (status === STATUS.REJECTED) {
    return <div>Error: {error.message}</div>;
  }

  if (status === STATUS.RESOLVED && reviews.length === 0) {
    return <div>We don't have any reviews for this movie.</div>;
  }

  return (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
