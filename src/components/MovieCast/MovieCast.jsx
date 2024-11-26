import css from './MovieCast.module.css';
import { fetchMovieCast } from '../../movies-api';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";

export default function MovieCast() {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const movieCast = async () => {
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
            } catch (error) {
                console.error("Failed to fetch movie cast:", error);
                navigate("*", { replace: true })
            }
        }
        movieCast();
    }, [movieId])

    return (
        <ul>
            {cast.map(({ id, name, character, profile_path }) => (
                <li key={id}>
                    <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                    <p>{name}</p>
                    <p>Character: {character}</p>
                </li>
            ))}
        </ul>
    )
}