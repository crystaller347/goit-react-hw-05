import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </header>
    )
}