import { fetchMovieDetails } from '../movies-api';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

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
    }, [movieId])

    return (
        <div>
            <Link>Go back</Link>
            <div>
                <img src="" alt="" />
                <h1>{movie?.original_title}</h1>
                <p>User score: { }</p>
                <h2>Overview</h2>
                <p>{movie?.overview}</p>
                <h3>Genres</h3>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div>
                <h4>Additional information</h4>
                <ul>
                    <li>
                        <Link to='cast'>Cast</Link>
                    </li>
                    <li>
                        <Link to='reviews'>Reviews</Link>
                    </li>
                </ul>
            </div>

            <Suspense fallback={<div>Loading data...</div>}>
                <Outlet />
            </Suspense>
        </div>
    )
}