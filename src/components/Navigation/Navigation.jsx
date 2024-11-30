import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <header className={css.header}>
            <NavLink className={css.navLink} to="/">Home</NavLink>
            <NavLink className={css.navLink} to="/movies">Movies</NavLink>
        </header>
    )
}