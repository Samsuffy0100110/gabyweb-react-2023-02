import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from "./serviceUpdate.module.scss";
import Swal from "sweetalert2";

export function ServiceUpdate () {
    const [service, setService] = useState('');
    const { id } = useParams();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const [iconPreview, setIconPreview] = useState(null);
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        try {
            fetch(`${baseURL}/service/${id}`)
                .then(res => res.json())
                .then(data => setService(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const handleChange = (e) => {
            setFile(e.target.files[0]);
            setIconPreview(URL.createObjectURL(e.target.files[0]));
    };

    const deleteOldIcon = async (fileName) => {
        try {
            const response = await fetch(`${baseURL}/service/icon/${fileName}`, {
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
        try {
            const formData = new FormData();
            formData.append("icon", file);
            await fetch(`${baseURL}/service/icon`, {
                method: "POST",
                body: formData,
            });
            const title = e.target.title.value;
            const description = e.target.description.value;
            const icon = file ? file.name : service.icon;
            const body = { title, description, icon };
            await fetch(`${baseURL}/service/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            Swal.fire({
                title: "Service modifié",
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
            <h1>Modifier un service</h1>
            <form 
                onSubmit={handleUpdate} 
                encType="multipart/form-data"
            >
                <label htmlFor="title">Titre</label>
                <input 
                    type="text" 
                    name="title" 
                    id="title" 
                    defaultValue={service.title}
                />
                <label htmlFor="description">Description</label>
                <textarea 
                    type="text" 
                    name="description" 
                    id="description" 
                    defaultValue={service.description}
                />
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
                        alt="icon"
                        className={style.icon_preview}
                    />
                )}
                <button type="submit" className={style.update_button} onClick={() => deleteOldIcon(service.icon)}>Modifier</button>
            </form>
            <Link to="/admin/services">Retour à la liste des services</Link>
        </div>
    );
}