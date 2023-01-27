import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from "./reviewUpdate.module.scss";
import Swal from "sweetalert2";

export function ReviewUpdate () {
    const [review, setReview] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        try {
            fetch(`${baseURL}/review/${id}`)
                .then(res => res.json())
                .then(data => setReview(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const review = e.target.review.value;
        const logo = e.target.logo.value;
        const body = { name, review, logo };
        try {
            const response = await fetch(`${baseURL}/review/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            Swal.fire({
                title: "Modification",
                text: "L\' avis a bien été modifié.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/admin/reviews`);
                }
            });
        }
    };

    if (!review) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Modifier un avis</h1>
            <form onSubmit={handleUpdate}>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" defaultValue={review.name} />
                <label htmlFor="review">Avis</label>
                <input type="text" name="review" id="review" defaultValue={review.review} />
                <label htmlFor="logo">Logo</label>
                <input type="text" name="logo" id="logo" defaultValue={review.logo} />
                <button type="submit">Modifier</button>
            </form>
            <Link to="/admin/reviews">Retour à la liste des avis</Link>
        </div>
    );
}