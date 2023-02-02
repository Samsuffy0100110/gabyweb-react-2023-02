import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./reviewNew.module.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function ReviewNew() {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const [review, setReview] = useState({
        name: "",
        review: "",
        logo: "",
    });

    const handleChange = (e) => {
        if (e.target.name === "logo") {
            setFile(e.target.files[0]);
        } else {
            setReview({
                ...review,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("logo", file);
            await fetch(`${baseURL}/review/logo`, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "multipart/form-data",
                },
            });
            const response = await fetch(`${baseURL}/review`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: review.name,
                    review: review.review,
                    logo: file.name,
                }),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            Swal.fire({
                title: "Avis ajouté!",
                text: "Vous pouvez ajouter un autre avis ou retourner au panneau d'administration.",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#424242",
                cancelButtonColor: "#0C8DA1",
                confirmButtonText: "Ajouter un autre avis",
                cancelButtonText: "Retourner au panneau d'administration",
            }).then((result) => {
                if (result.isConfirmed) {
                    setReview({
                        name: "",
                        review: "",
                        logo: "",
                    });
                } else {
                    navigate("/admin/reviews");
                }
            });
        }
    };

    return (
        <div>
            <h1>Ajouter un avis</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="name">Nom</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={review.name}
                    onChange={handleChange}
                />
                <label htmlFor="review">Avis</label>
                <input
                    type="text"
                    name="review"
                    id="review"
                    value={review.review}
                    onChange={handleChange}
                />
                <label htmlFor="logo">Logo</label>
                <input
                    type="file"
                    name="logo"
                    id="logo"
                    accept="image/*"
                    onChange={handleChange}
                />
                <button type="submit">Ajouter</button>
            </form>
            <Link to="/admin/reviews">Retour à la liste des avis</Link>
        </div>
    );
}