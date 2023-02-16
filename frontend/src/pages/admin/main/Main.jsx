import { Link } from 'react-router-dom';
import style from './main.module.scss';

export function Main() {
    return (
        <div>
            <h1>Bienvenue sur l'interface d'administration</h1>
                <Link to="/">Retour au site</Link>
            <div>
                <Link to="/admin/projects">
                    <h2>Projets</h2>
                </Link>
                <Link to="/admin/reviews">
                    <h2>Avis</h2>
                </Link>
                <Link to="/admin/services">
                    <h2>Préstations</h2>
                </Link>
            </div>
            <div>
                <Link to="/logout">Se déconnecter</Link>
            </div>
        </div>
    );
}
