import { fetchMovieDetails } from '../movies-api';
import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export default function MovieDetailsPage() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    const navigate = useNavigate();

    useEffect(() => {
        const movieDetails = async () => {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.error("Failed to fetch movie details:", error);
                navigate("*", { replace: true });
            }
        }
        movieDetails();
    }, [movieId])

    return (
        <div>
            <Link to={backLinkHref}>Go back</Link>
            <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.original_title} />
                <h1>{movie?.original_title}</h1>
                <p>User score: {Math.round(movie?.vote_average * 10)}%</p>
                <h2>Overview</h2>
                <p>{movie?.overview}</p>
                <h3>Genres</h3>
                <p>{movie?.genres.map(genre => genre.name).join(", ")}</p>
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