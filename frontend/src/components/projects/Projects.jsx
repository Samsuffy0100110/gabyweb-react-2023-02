import React, { useState, useEffect } from 'react';
import style from './project.module.scss';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch("http://localhost:5000/projects");
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
                <div key={project.id}>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <img src={project.image} alt={project.title} width="200" />
                </div>
            ))}
        </div>
    );
}
