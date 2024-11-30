import { fetchMovieDetails } from '../movies-api';
import { useParams, useLocation } from "react-router-dom";
import useFetch from '../hooks.js';
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";

    const { data, error, loading } = useFetch(fetchMovieDetails, movieId);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <Link to={backLinkHref}>Go back</Link>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt={data?.original_title} />
                <h1>{data?.original_title}</h1>
                <p>User score: {Math.round(data?.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{data?.overview}</p>
                <h3>Genres</h3>
                <p>{data?.genres.map(genre => genre.name).join(", ")}</p>
            </div>
            <div>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <Link to='cast' state={{ from: location.state?.from }}>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews' state={{ from: location.state?.from }}>Reviews</Link>
                    </li>
                </ul>
            </div>

            <Suspense fallback={<div>Loading data...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}