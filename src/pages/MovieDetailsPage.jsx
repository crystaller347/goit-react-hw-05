import { fetchMovieDetails } from '../../movies-api';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams;

    useEffect(() => {
        const movieDetails = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie([...data]);
            } catch {
                return "Oops, there seems to be a problem with loading your content, try refreshing the page!"
            }
        }
        movieDetails();
    }, [movie])

    return (
        <div>
            <div></div>
            <div></div>
        </div>
    )
}