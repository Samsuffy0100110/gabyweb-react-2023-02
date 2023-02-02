import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import style from "./reviewUpdate.module.scss";
import Swal from "sweetalert2";

export function ReviewUpdate () {
    const [review, setReview] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
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

    const handleChange = (e) => {
        setFile(e.target.files[0]);
};

    const handleUpdate = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("logo", file);
        try {
            await fetch(`${baseURL}/review/logo`, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "multipart/form-data",
                },
            });
            const review = e.target.review.value;
            const logo = file.name;
            const name = e.target.name.value;
            const body = { name, review, logo };
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
            <form 
                onSubmit={handleUpdate} 
                encType="multipart/form-data"
            >
                <label htmlFor="name">Nom</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    defaultValue={review.name} 
                />
                <label htmlFor="review">Avis</label>
                <input 
                    type="text" 
                    name="review" 
                    id="review" 
                    defaultValue={review.review}
                />
                <label htmlFor="logo">Logo</label>
                <input 
                    type="file" 
                    name="logo" 
                    id="logo" 
                    accept="image/*" 
                    onChange={handleChange}
                />
                <button type="submit" className={style.update_button}>Modifier</button>
            </form>
            <Link to="/admin/reviews">Retour à la liste des avis</Link>
        </div>
    );
}