import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from "./serviceUpdate.module.scss";
import Swal from "sweetalert2";

export function ServiceUpdate () {
    const [service, setService] = useState('');
    const { id } = useParams();
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const icon = e.target.icon.value;
        const body = { title, description, icon };
        try {
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
            <form onSubmit={handleUpdate}>
                <label htmlFor="title">Titre</label>
                <input type="text" name="title" id="title" defaultValue={service.title} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" defaultValue={service.description} />
                <label htmlFor="icon">Icone</label>
                <input type="text" name="icon" id="icon" defaultValue={service.icon} />
                <button type="submit" className={style.update_button}>Modifier</button>
            </form>
            <Link to="/admin/services">Retour à la liste des services</Link>
        </div>
    );
}