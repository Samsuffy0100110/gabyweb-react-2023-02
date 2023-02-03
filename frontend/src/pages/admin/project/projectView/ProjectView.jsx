import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from './projectView.module.scss';
import Swal from "sweetalert2";

export function ProjectView() {
    const [project, setProject] = useState('');
    const [stacks, setStacks] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const uploadPath = "/project/";
    const imagePath = baseURL + uploadPath;

    useEffect(() => {
        try {
            fetch(`${baseURL}/project/${id}`)
                .then(res => res.json())
                .then(data => setProject(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        try {
            fetch(`${baseURL}/project/${id}/stacks`)
                .then(res => res.json())
                .then(data => setStacks(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${baseURL}/project/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
            setError(true);
            setErrorMessage(error.message);
        } finally {
            Swal.fire({
                title: "Suppression",
                text: "Le projet a bien été supprimé.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/admin/projects');
                }
            });
        }
    };

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatDate = (date) => {
        const dateUTC = new Date(date);
        const dateUTCString = dateUTC.toLocaleString("fr-FR", {
            timeZone: timeZone,
        });
        const dateUTCArray = dateUTCString.split(" ");
        const dateUTCArrayDate = dateUTCArray[0].split("/");
        const dateUTCArrayDay = dateUTCArrayDate[0];
        const dateUTCArrayMonth = dateUTCArrayDate[1];
        const dateUTCArrayYear = dateUTCArrayDate[2];
        const dateUTCArrayFinal = `${dateUTCArrayDay}-${dateUTCArrayMonth}-${dateUTCArrayYear}`;
        return dateUTCArrayFinal;
    };

    return (
        <div className={style.container}>
            <h1>Project and Stacks</h1>
            <button onClick={() => navigate(`/admin/project/${project.id}/update`)} className={style.update_button}>Modifier</button>
            <button onClick={() => handleDelete(project.id)} className={style.delete_button}>Supprimer</button>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={imagePath + project.image} alt={project.name} width="200" />
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
            <p>{formatDate(project.date)}</p>
            {/* <h3>Stacks</h3>
                {stacks.map(stack => (
                        <img src={stack.image} alt={stack.name} width="50" />
                ))} */}
            <Link to="/">Back</Link>
        </div>
    )
}
