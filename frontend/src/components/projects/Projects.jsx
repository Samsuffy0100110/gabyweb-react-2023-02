import React, { useState, useEffect } from 'react';
import style from './projects.module.scss';
import { Link } from 'react-router-dom';

export function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch(`${baseURL}/projects`);
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getProjects();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>{errorMessage}</div>;
    }

    return (
        <div className={style.container}>
            <h3>Projects</h3>
            {projects.map((project) => (
                <div key={project.id} className={style.container}>
                    <Link to={`/project/${project.id}`}><img src={project.image} alt={project.title} width="200" /></Link>
                </div>
            ))}
        </div>
    );
}
