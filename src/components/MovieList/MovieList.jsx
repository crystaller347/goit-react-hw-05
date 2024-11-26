import css from './MovieList.module.css';
import { Link } from 'react-router-dom';

export default function MovieList({ movies }) {
    return (
        <ul>
            {movies.map(({ id, title }) => (
                <li key={id}>
                    <Link to="/movies/:movieId">{title}</Link>
                </li>
            ))}
        </ul>
    )
}