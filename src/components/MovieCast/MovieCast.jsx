import css from './MovieCast.module.css';
import { fetchMovieCast } from '../../movies-api';
import useFetch from '../../hooks.js';
import { useParams } from "react-router-dom";
import placeholderPicture from '../../placeholder-profile-picture.jpg';

export default function MovieCast() {
    const { movieId } = useParams();
    const { data, error, loading } = useFetch(fetchMovieCast, movieId);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul className={css.list}>
            {data?.map(({ id, name, character, profile_path }) => (
                <li className={css.listItem} key={id}>
                    <img className={css.image} src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : placeholderPicture} alt={name} />
                    <div className={css.description}>
                        <p><b>{name}</b></p>
                        <p>Character: <i>{character}</i></p>
                    </div>
                </li>
            ))}
        </ul>
    )
}