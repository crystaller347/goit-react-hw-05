import css from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Header from '../Header/Header.jsx';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage'));

export default function App() {
  return (
    <div>
      <Header />

      < Suspense fallback={< div > Loading page...</div >}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/movies/:movieId' element={<MovieDetailsPage />} />
        </Routes>
      </Suspense >
    </div>
  )
}
