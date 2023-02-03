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
    const today = `${year}-${month}-${day}`;
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
            const response = await fetch(`${baseURL}/project`, {
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
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            Swal.fire({
                title: "Project added!",
                text: "You can add another project or go back to the admin panel.",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#424242",
                cancelButtonColor: "#0C8DA1",
                confirmButtonText: "Add another project",
                cancelButtonText: "Go back to admin panel project",
            }).then((result) => {
                if (result.isConfirmed) {
                    setProject({
                        name: "",
                        description: "",
                        image: "",
                        url: "",
                        date: today,
                    });
                } else {
                    navigate("/admin/projects");
                }
            });
        }
    };

    return (
        <div>
            <h3>Add Project</h3>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <label htmlFor="name">name</label>
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
                        width="100"
                    />
                )}
                <label htmlFor="url">Link</label>
                <input
                    type="text"
                    name="url"
                    value={project.url}
                    onChange={handleChange}
                />
                <label htmlFor="date">Date</label>
                <input
                    type="text"
                    name="date"
                    value={project.date}
                    onChange={handleChange}
                />
                <button type="submit">Ajouter</button>
            </form>
            <Link to={`/admin/projects`}>Go back to projects</Link>
        </div>
    );
}
