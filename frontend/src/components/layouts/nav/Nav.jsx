import React from 'react';
import { Link } from "react-router-dom";
import style from './nav.module.scss';

export default function Nav() {
  return (
    <nav className={style.container}>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
    </nav>
  );
}
