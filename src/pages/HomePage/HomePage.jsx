import css from './HomePage.module.css';
import MovieList from '../../components/MovieList/MovieList.jsx';
import useFetch from '../../hooks.js';
import { fetchTrendingMovies } from '../../movies-api.js';

export default function HomePage() {
    const { data, error, loading } = useFetch(fetchTrendingMovies);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1 className={css.title}>Trending today</h1>
            <div className={css.list}>
                <MovieList movies={data?.results} />
            </div>
        </div>
    )
}