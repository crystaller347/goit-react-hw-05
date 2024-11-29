import css from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function MovieList({ movies = [], searchResults = [] }) {
    const location = useLocation();
    const items = [...movies, ...searchResults];

    return (
        <ul>
            {items.map(({ id, title }) => (
                <li key={id}>
                    <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                </li>
            ))
            }
        </ul>
    )
}