import css from './MovieDetailsPage.module.css';
import { fetchMovieDetails } from '../../movies-api';
import { useParams, useLocation } from "react-router-dom";
import useFetch from '../../hooks.js';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { MdArrowBackIos } from "react-icons/md";

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    const { data, error, loading } = useFetch(fetchMovieDetails, movieId);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <NavLink className={`${css.link} ${css.goBackLink}`} to={backLinkHref}><MdArrowBackIos />Go back</NavLink>
            <div className={css.movie}>
                <div className={css.imageContainer}>
                    <img className={css.image} src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data?.original_title} />
                </div>
                <div className={css.movieInfo}>
                    <div>
                        <h1>{data?.original_title}</h1>
                        <p>User score: {Math.round(data?.vote_average * 10)}%</p>
                    </div>
                    <div>
                        <h2>Overview</h2>
                        <p>{data?.overview}</p>
                    </div>
                    <div>
                        <h3>Genres</h3>
                        <p>{data?.genres.map(genre => genre.name).join(", ")}</p>
                    </div>
                </div>
            </div>
            <div className={css.extraInfo}>
                <h4 className={css.title}>Additional information</h4>
                <ul className={css.list}>
                    <li className={css.listItem}>
                        <NavLink className={css.link} to='cast' state={{ from: location.state?.from }}>Cast</NavLink>
                    </li>
                    <li className={css.listItem}>
                        <NavLink className={css.link} to='reviews' state={{ from: location.state?.from }}>Reviews</NavLink>
                    </li>
                </ul>
            </div>

            <Suspense fallback={<div>Loading data...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}