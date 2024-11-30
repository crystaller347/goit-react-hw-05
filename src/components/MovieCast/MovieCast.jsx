import css from './MovieCast.module.css';
import { fetchMovieCast } from '../../movies-api';
import useFetch from '../../hooks.js';
import { useParams } from "react-router-dom";

export default function MovieCast() {
    const { movieId } = useParams();
    const { data, error, loading } = useFetch(fetchMovieCast, movieId);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {data?.map(({ id, name, character, profile_path }) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    )
}