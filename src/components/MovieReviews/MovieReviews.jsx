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
        <ul className={css.list}>
            {data?.map(({ id, author, content }) => (
                <li className={css.listItem} key={id}>
                    <p className={css.author}><b>A review by {author}</b></p>
                    <p>{content}</p>
                </li>
            ))}
        </ul>
    )
}