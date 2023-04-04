import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import style from "./nav.module.scss";
import React from "react";

export function Nav() {
  return (
    <nav className={style.nav}>
      <Link to="/">
        <img src={logo} alt="logo" className={style.nav__logo} />
      </Link>
      <ul className={style.nav__links}>
        <li className={style.nav__link}>
          <a href="#services">Nos Préstations</a>
        </li>
        <li className={style.nav__link}>
          <a href="#projects">Nos Réalisations</a>
        </li>
      </ul>
      <a
        href="#contact"
        className={style.button}
        style={{ color: "white", textDecoration: "none" }}
      >
        Contactez-nous
      </a>
    </nav>
  );
}
