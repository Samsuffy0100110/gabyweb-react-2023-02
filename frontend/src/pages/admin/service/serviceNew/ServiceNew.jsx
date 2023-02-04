import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./serviceNew.module.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function ServiceNew() {
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [iconPreview, setIconPreview] = useState(null);
    const [service, setService] = useState({
        title: "",
        description: "",
        icon: "",
    });

    const handleChange = (e) => {
        if (e.target.name === "icon") {
            setFile(e.target.files[0]);
            setIconPreview(URL.createObjectURL(e.target.files[0]));
        } else {
            setService({
                ...service,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("icon", file);
            await fetch(`${baseURL}/service/icon`, {
                method: "POST",
                body: formData,
            });
            await fetch(`${baseURL}/service`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: service.title,
                    description: service.description,
                    icon: file.name,
                }),
            });
            Swal.fire({
                title: "Service ajouté",
                icon: "success",
                confirmButtonText: "OK",
                confirmButtonAriaLabel: "OK",
                confirmButtonColor: "#0C8DA1",
            });
            navigate("/admin/services");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.admin_container}>
            <h1 className={style.title}>Créer un service</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                    <label htmlFor="title">Titre du service</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={service.title}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        name="description"
                        id="description"
                        value={service.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="icon">Icone</label>
                    <input
                        type="file"
                        name="icon"
                        id="icon"
                        onChange={handleChange}
                    />
                    {iconPreview && (
                        <img
                            src={iconPreview}
                            alt="icon preview"
                            className={style.iconPreview}
                            width="200"
                        />
                    )}
                </div>
                <button type="submit">GO !!!</button>
            </form>
            <Link to="/admin/services">Retour à la liste des services</Link>
        </div>
    );
}
