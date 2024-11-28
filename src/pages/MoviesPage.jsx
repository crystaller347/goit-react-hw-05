import MovieList from '../components/MovieList/MovieList.jsx';
import { useState, useEffect } from 'react';
import { fetchSearchResults } from '../movies-api';
import { useNavigate } from "react-router-dom";

export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const handleSend = (query) => {
        setQuery(query);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const searchInput = form.elements.search.value.trim();
        handleSend(searchInput);
        form.reset();
    }

    useEffect(() => {
        if (!query) {
            return;
        }
        const movieSearch = async () => {
            try {
                const data = await fetchSearchResults(query);
                setSearchResults([...data]);
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
            <MovieList searchResults={searchResults} />
        </div>
    )
}