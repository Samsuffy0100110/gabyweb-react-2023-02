import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./projectNew.module.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function ProjectNew() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today = `${year}-${month < 10 ? `0${month}` : `${month}`}-${day < 10 ? `0${day}` : `${day}`}`;
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [imagePreview, setImagePreview] = useState(null);
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const [project, setProject] = useState({
        name: "",
        description: "",
        image: "",
        url: "",
        date: today,
    });

    const handleChange = (event) => {
        if (event.target.name === "image") {
            setFile(event.target.files[0]);
            setImagePreview(URL.createObjectURL(event.target.files[0]));
        } else {
            setProject({
                ...project,
                [event.target.name]: event.target.value,
            });
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", file);
            await fetch(`${baseURL}/project/image`, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "multipart/form-data",
                },
            });
            await fetch(`${baseURL}/project`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: project.name,
                    description: project.description,
                    image: file.name,
                    url: project.url,
                    date: project.date,
                }),
            });
            Swal.fire({
                title: "Project ajouté",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonColor: "#0C8DA1",
                confirmButtonAriaLabel: "OK",
            });
            navigate("/admin/projects");
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className={style.admin_container}>
            <h3>Ajouter un projet</h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className={style.admin__form}>
                <label htmlFor="name">Nom du Projet</label>
                <input
                    type="text"
                    name="name"
                    value={project.name}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <textarea
                    type="text"
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                />
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                />
                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="preview"
                        className={style.preview}
                        width="200"
                    />
                )}
                <label htmlFor="url">Lien du projet</label>
                <input
                    type="text"
                    name="url"
                    value={project.url}
                    onChange={handleChange}
                />
                <label htmlFor="date">Date de création</label>
                <input
                    type="date"
                    name="date"
                    value={project.date}
                    onChange={handleChange}
                />
                <button type="submit">Décollage !</button>
            </form>
            <Link to={`/admin/projects`}>Retour à la liste des projets</Link>
        </div>
    );
}
