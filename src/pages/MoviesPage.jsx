import MovieList from '../components/MovieList/MovieList.jsx';
import { useState, useEffect } from 'react';
import { fetchSearchResults } from '../movies-api';
import { useNavigate, useSearchParams } from "react-router-dom";

export default function MoviesPage() {
    const [searchResults, setSearchResults] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchInput = form.elements.search.value.trim();
        if (searchInput) {
            setSearchParams({ query: searchInput });
        }
        form.reset();
    }

    useEffect(() => {
        if (!query) {
            setSearchResults([]);
            return;
        }
        const movieSearch = async () => {
            try {
                history.replaceState(query, "", "/movies");
                const data = await fetchSearchResults(query);
                setSearchResults(data);
            } catch (error) {
                console.error("Failed to fetch movie search results:", error);
                navigate("*", { replace: true });
            }
        }
        movieSearch();
    }, [query])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='search' placeholder='Find a movie...' />
                <button type='submit'>Search</button>
            </form>
            {searchResults.length === 0 && query && (<p>No results found for "{query}"</p>)}
            <MovieList searchResults={searchResults} />
        </div>
    )
}