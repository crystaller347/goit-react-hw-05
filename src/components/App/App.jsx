import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from '../Header/Header.jsx';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('../MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'));

export default function App() {
  return (
    <div>
      <Header />

      < Suspense fallback={< div > Loading page...</div >}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />}>
            {/* <Route path='cast' element={<MovieCast />}>Cast</Route>
            <Route path='reviews' element={<MovieReviews />}>Reviews</Route> */}
          </Route>
        </Routes>
      </Suspense >
    </div>
  )
}
