import css from './MoviesPage.module.css';
import MovieList from '../../components/MovieList/MovieList.jsx';
import useFetch from '../../hooks.js';
import { fetchSearchResults } from '../../movies-api.js';
import { useSearchParams } from "react-router-dom";

export default function MoviesPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const { data, error, loading } = useFetch(fetchSearchResults, query);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchInput = form.elements.search.value.trim();
        if (searchInput) {
            setSearchParams({ query: searchInput });
        }
        form.reset();
    }

    const movies = Array.isArray(data) ? data : data?.results ?? [];

    return (
        <div>
            <form className={css.form} onSubmit={handleSubmit}>
                <input className={css.input} type="text" name='search' placeholder='Find a movie...' />
                <button className={css.button} type='submit'>Search</button>
            </form>
            {movies?.length === 0 && query && (<p>No results found for "{query}"</p>)}
            <div className={css.list}>
                <MovieList searchResults={movies} />
            </div>
        </div>
    )
}