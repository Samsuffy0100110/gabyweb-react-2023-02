import { Link } from "react-router-dom";
import style from './nav.module.scss';
import React from 'react';

export function Nav() {
  return (
    <nav className={style.container}>
        <Link to="/">Home</Link>
        {/* <Link to="/admin">Admin</Link>
        <Link to="/login">Login</Link> */}
        <Link to="/logout">Logout</Link>
    </nav>
  );
}
