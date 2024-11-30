import css from './MovieReviews.module.css';
import { fetchMovieReviews } from '../../movies-api';
import useFetch from '../../hooks.js';
import { useParams } from "react-router-dom";

export default function MovieReviews() {
    const { movieId } = useParams();
    const { data, error, loading } = useFetch(fetchMovieReviews, movieId);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (data?.length === 0) {
        return <p>We don't have any reviews for this movie yet</p>;
    }

    return (
        <ul>
            {data?.map(({ id, author, content }) => (
                <li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
}