import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from "./serviceUpdate.module.scss";
import Swal from "sweetalert2";

export function ServiceUpdate () {
    const [service, setService] = useState('');
    const { id } = useParams();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
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
            const icon = file.name;
            const body = { title, description, icon };
            const response = await fetch(`${baseURL}/service/${id}`, {
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
                text: "Le service a bien été modifié.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/admin/services`);
                }
            });
        }
    };

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div>
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
                <input 
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
                    accept="image/*" 
                    onChange={handleChange}
                />
                <button type="submit" className={style.update_button}>Modifier</button>
            </form>
            <Link to="/admin/services">Retour à la liste des services</Link>
        </div>
    );
}