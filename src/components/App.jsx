import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import { lazy } from 'react';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const SearchForMovies = lazy(() => import('./pages/SearchMovies/Search'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));
const MoviesDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails'));
const MovieCast = lazy(() => import('./pages/MoviesDetails/MovieCast'));
const MovieReviews = lazy(() => import('./pages/MoviesDetails/MoviesReview'));
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="SearchForMovies" element={<SearchForMovies />} />
          <Route path="Movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
};
