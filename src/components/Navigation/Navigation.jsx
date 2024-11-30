import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <header className={css.header}>
            <NavLink className={({ isActive }) => isActive ? `${css.navLink} ${css.active}` : css.navLink} to="/">Home</NavLink>
            <NavLink className={({ isActive }) => isActive ? `${css.navLink} ${css.active}` : css.navLink} to="/movies">Movies</NavLink>
        </header>
    )
}