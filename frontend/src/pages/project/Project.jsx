import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from "./project.module.scss";

export function Project() {
    const [project, setProject] = useState('');
    const { id } = useParams();
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        try {
            fetch(`${baseURL}/project/${id}`)
                .then(res => res.json())
                .then(data => setProject(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    return (
        <div className={style.container}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} width="200" />
            <p>{project.stack}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
            <p>{project.date}</p>
            <Link to={`/`}>Retour</Link>
        </div>
    );
}