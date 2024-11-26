import css from './Navigation.module.css';

import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <header>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </header>
    )
}