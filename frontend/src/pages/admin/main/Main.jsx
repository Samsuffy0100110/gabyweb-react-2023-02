import { Link } from 'react-router-dom';
import style from './main.module.scss';

export function Main() {
    return (
        <div>
            <h1>Bienvenue sur l'interface d'administration</h1>
            <div>
                <Link to="/admin/projects">
                    <h2>Projets</h2>
                </Link>
                <Link to="/admin/stacks">
                    <h2>Stacks</h2>
                </Link>
                <Link to="/admin/reviews">
                    <h2>Reviews</h2>
                </Link>
                <Link to="/admin/services">
                    <h2>Services</h2>
                </Link>
            </div>
            <div>
                <Link to="/logout">Logout</Link>
            </div>
        </div>
    );
}
