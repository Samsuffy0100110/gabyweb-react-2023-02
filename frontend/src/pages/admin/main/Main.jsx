import { Link } from 'react-router-dom';
import style from './main.module.scss';

export function Main() {
    return (
        <div className={style.main}>
            <h1 className={style.title}>Bienvenue sur l'interface d'administration</h1>
            <div className={style.links}>
                <Link to="/admin/projects" className={style.link}>
                    <h2 className={style.linkTitle}>Projets</h2>
                </Link>
                <Link to="/admin/stacks" className={style.link}>
                    <h2 className={style.linkTitle}>Stacks</h2>
                </Link>
                <Link to="/admin/reviews" className={style.link}>
                    <h2 className={style.linkTitle}>Reviews</h2>
                </Link>
                <Link to="/admin/services" className={style.link}>
                    <h2 className={style.linkTitle}>Services</h2>
                </Link>
            </div>
            <div>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    );
}
