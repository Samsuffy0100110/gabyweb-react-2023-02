import style from "./footer.module.scss";
import { Link } from "react-router-dom";
import React from "react";

export function Footer() {
    const year = new Date().getFullYear();
    const socialMedia = [
        {
            name: "instagram",
            link: "http",
            image: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg",
        },
        {
            name: "facebook",
            link: "http",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg",
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
                    <Link to="/about" className={style.footer__links__link}>Plan du Site</Link>
                </div>
                <div className={style.footer__links}>
                    <Link to="/contact" className={style.footer__links__link}>Politique de confidentialité</Link>
                </div>
                <div className={style.footer__links}>
                    <Link to="/contact" className={style.footer__links__link}>Mentions légales</Link>
                </div>
            </div>
        </footer>
    );
}
