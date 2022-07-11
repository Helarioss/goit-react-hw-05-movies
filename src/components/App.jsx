import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('../Pages/Home'));
const Movies = lazy(() => import('Pages/Movies'));
const MovieDetails = lazy(() => import('Pages/MovieDetails'));
const Reviews = lazy(() => import('Pages/Reviews'));
const Cast = lazy(() => import('Pages/Cast'));
const NotFoundPage = lazy(() => import('Pages/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
