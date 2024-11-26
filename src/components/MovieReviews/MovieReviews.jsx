import css from './MovieReviews.module.css';
import { fetchMovieReviews } from '../../movies-api';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

export default function MovieReviews() {
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
        const movieReviews = async () => {
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                console.error("Failed to fetch movie reviews:", error);
            }
        }
        movieReviews();
    }, [movieId])

    if (reviews.length === 0) {
        return <p>We don't have any reviews for this movie yet</p>;
    }

    return (
        <ul>
            {reviews.map(({ id, author, content }) => (
                <li key={id}>
                    <p>Author: {author}</p>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
}