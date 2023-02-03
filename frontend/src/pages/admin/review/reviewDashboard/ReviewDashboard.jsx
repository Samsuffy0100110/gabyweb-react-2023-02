import React, { useState, useEffect } from 'react';
import style from './reviewDashboard.module.scss';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export function ReviewDashboard() {
    const [reviews, setReviews] = useState([]);
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const uploadPath = "/review/";
    const logoPath = baseURL + uploadPath;

    useEffect(() => {
        const getReviews = async () => {
            try {
                const response = await fetch(`${baseURL}/reviews`);
                const data = await response.json();
                setReviews(data);
            } catch (error) {
                console.log(error);
            }
        };
        getReviews();
    }, []);

    const deleteLogo = async (fileName) => {
        try {
            await fetch(`${baseURL}/review/logo/${fileName}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        const review = reviews.find((review) => review.id === id);
        const fileName = review.logo;
        Swal.fire({
            title: "Êtes-vous sûr ?",
            text: "Vous ne pourrez pas revenir en arrière !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0C8DA1",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, supprimer !",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch(`${baseURL}/review/${id}`, {
                        method: "DELETE",
                    });
                    deleteLogo(fileName);
                    setReviews(reviews.filter((review) => review.id !== id));
                    Swal.fire({
                        title: "Supprimé !",
                        text: "L\'avis a été supprimé.",
                        icon: "success",
                        confirmButtonColor: "#0C8DA1",
                    }
                    );

                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    if (reviews.length === 0) {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h1>Avis</h1>
                <p>Aucun avis n\'a été ajouté.</p>
                <Link to="/admin/review/new">
                    <button>Ajouter un avis</button>
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
                                <td><img src={logoPath + review.logo} alt={review.name} width="100" /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <Link to={`/admin/review/${review.id}/update`}>
                                        <button className={style.update_button}>Modifier</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(review.id)} className={style.delete_button}>Supprimer</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                ))}
            </div>
        );
    }
}