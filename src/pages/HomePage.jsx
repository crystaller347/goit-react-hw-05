import MovieList from '../components/MovieList/MovieList.jsx';
import { fetchTrendingMovies } from '../movies-api';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const trendingMovies = async () => {
            try {
                const data = await fetchTrendingMovies();
                setMovies([...data.results]);
            } catch {
                return "Oops, there seems to be a problem with loading your content, try refreshing the page!"
            }
        }
        trendingMovies();
    })

    return (
        <div>
            <h1>Trending today</h1>
            <MovieList movies={movies} />
        </div>
    )
}