import { Link } from 'react-router-dom';
import { useFetchMovies, STATUS } from 'hooks/useFetchMovies';
import { getTrendingMovies } from 'services/api';

export const Home = () => {
  const { movies, status, error } = useFetchMovies(getTrendingMovies);
  return (
    <>
      <h1>Trending today</h1>
      {status === STATUS.PENDING && <p>Загрузка</p>}
      {status === STATUS.RESOLVED && (
        <ul>
          {movies.map(({ title, name, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title ?? name}</Link>
            </li>
          ))}
        </ul>
      )}
      {status === STATUS.REJECTED && <h1>Error: {error.message}</h1>}
    </>
  );
};

// export const Home = () => {
//   const [movies, setMovies] = useState([]);
//   const [status, setStatus] = useState(STATUS.IDLE);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function fetchMovies() {
//       setStatus(STATUS.PENDING);
//       try {
//         const movies = await getTrendingMovies();
//         setMovies(movies);
//         setStatus(STATUS.RESOLVED);
//         console.log(movies);
//       } catch (error) {
//         setError(error);
//         setStatus(STATUS.REJECTED);
//       }
//     }
//     fetchMovies();
//   }, []);

//   return (
//     <>
//       <h1>Trending today</h1>

//       {status === STATUS.PENDING && <p>Загрузка</p>}

//       {status === STATUS.RESOLVED && (
//         <ul>
//           {movies.map(({ original_title, name, id }) => (
//             <li key={id}>
//               <Link to={`/movies/${id}`}>{original_title ?? name}</Link>
//             </li>
//           ))}
//         </ul>
//       )}

//       {status === STATUS.REJECTED && <h1>Ошибка: {error.message}</h1>}
//     </>
//   );
// };
