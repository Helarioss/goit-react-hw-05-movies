import { Home } from 'Pages/Home';
import { MovieDetails } from 'Pages/MovieDetails/MovieDetails';
import { Reviews } from 'Pages/Reviews/Reviews';
import { Cast } from 'Pages/Cast/Cast';
import { Routes, Route, Outlet } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<div>Movies</div>} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};
