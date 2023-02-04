import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from './projectView.module.scss';

export function ProjectView() {
    const [project, setProject] = useState('');
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
        <div className={style.admin_container}>
            <h1>{project.name}</h1>
            <button onClick={() => navigate(`/admin/project/${project.id}/update`)} className={style.update_button}>Modifier</button>
            <p>{project.description}</p>
            <img src={imagePath + project.image} alt={project.name} width="200" />
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
            <p>{formatDate(project.date)}</p>
            <Link to="/admin/projects">Retour</Link>
        </div>
    )
}
