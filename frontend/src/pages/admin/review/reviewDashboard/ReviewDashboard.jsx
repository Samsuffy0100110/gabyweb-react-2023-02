import React, { useState, useEffect } from 'react';
import style from './reviewDashboard.module.scss';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export function ReviewDashboard() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await fetch(`${baseURL}/reviews`);
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getReviews();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${baseURL}/review/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
            setError(true);
            setErrorMessage(error.message);
        } finally {
            Swal.fire({
                title: "Suppression",
                text: "L\' avis a bien été supprimé.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        }
    };

    if (reviews.length === 0) {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h1>Avis</h1>
                <p className={style.emptyText}>Aucun avis n\'a été ajouté.</p>
                <Link to="/admin/review/new">
                    <button className={style.emptyButton}>Ajouter un avis</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h1>Avis</h1>
                <Link to="/admin/review/new">Ajouter un avis</Link>
                {reviews.map((review) => (
                    <table key={review.id} className={style.admin_reviews}>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Message</th>
                                <th>Logo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{review.name}</td>
                                <td>{review.review}</td>
                                <td><img src={review.logo} alt={review.name} /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <Link to={`/admin/review/${review.id}/update`}>
                                        <button>Modifier</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(review.id)}>Supprimer</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                ))}
            </div>
        );
    }
}