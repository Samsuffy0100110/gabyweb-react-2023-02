import Instagram from "../../../assets/instagram.png";
import Linkedin from "../../../assets/linkedin.png";
import Facebook from "../../../assets/facebook.png";
import style from "./footer.module.scss";
import { Link } from "react-router-dom";
import React from "react";

export function Footer() {
    const year = new Date().getFullYear();
    const socialMedia = [
        {
            name: "linkedin",
            link: "https://www.linkedin.com/",
            image: Linkedin,
        },
        {
            name: "instagram",
            link: "https://www.instagram.com/?hl=fr",
            image: Instagram,
        },
        {
            name: "facebook",
            link: "https://fr-fr.facebook.com/",
            image: Facebook,
        },
    ];

    return (
        <footer>
            <div className={style.footer__container}>
                <div className={style.footer__copyRight}>
                    <p>© {year} GabyWeb, Tout droits réservés</p>
                </div>
                <div className={style.footer__socialMedia}>
                    {socialMedia.map((social, index) => (
                        <a
                            href={social.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={social.image} alt={social.name} className={style.footer__socialMedia__image} />
                        </a>
                    ))}
                </div>
                <div className={style.footer__links}>
                    <Link to="/legals" className={style.footer__links__link}>Mentions légales</Link>
                </div>
            </div>
        </footer>
    );
}
