import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import style from "./reviewUpdate.module.scss";
import Swal from "sweetalert2";

export function ReviewUpdate () {
    const [review, setReview] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [logoPreview, setLogoPreview] = useState(null);
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
        setLogoPreview(URL.createObjectURL(e.target.files[0]));
};

const deleteOldLogo = async (fileName) => {
    try {
        const response = await fetch(`${baseURL}/review/logo/${fileName}`, {
            method: "DELETE",
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
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
            const logo = file ? file.name : review.logo;
            const name = e.target.name.value;
            const body = { name, review, logo };
            await fetch(`${baseURL}/review/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            Swal.fire({
                title: "Avis modifié",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#0C8DA1",
                confirmButtonAriaLabel: "OK",
            });
            navigate("/admin/reviews");
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div className={style.admin_container}>
            <h1>Modifier un avis</h1>
            <form 
                onSubmit={handleUpdate} 
                encType="multipart/form-data"
                className={style.admin__form}
            >
                <label htmlFor="name">Nom du porteur de projet</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    defaultValue={review.name} 
                />
                <label htmlFor="review">Commentaire</label>
                <textarea 
                    type="text" 
                    name="review" 
                    id="review" 
                    defaultValue={review.review}
                />
                <label htmlFor="logo">Logo du porteur de projet</label>
                <input 
                    type="file" 
                    name="logo" 
                    id="logo" 
                    accept="image/*" 
                    onChange={handleChange}
                />
                {logoPreview && (
                    <img 
                        src={logoPreview}
                        alt="logo"
                        className={style.preview}
                    />
                )}
                <input type="submit" value="Modifier" onClick={() => deleteOldLogo(review.logo)} />
            </form>
            <Link to="/admin/reviews">Retour à la liste des avis</Link>
        </div>
    );
}