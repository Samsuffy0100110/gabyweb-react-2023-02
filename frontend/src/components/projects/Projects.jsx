import React, { useState, useEffect } from 'react';
import style from './projects.module.scss';
import { Link } from 'react-router-dom';

export function Projects() {
    const [projects, setProjects] = useState([]);
    const uploadPath = "/project/";
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const imagePath = baseURL + uploadPath;

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch(`${baseURL}/projects`);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProjects();
    }, []);

    return (
        <div className={style.container}>
            <h3>Projects</h3>
            {projects.map((project) => (
                <div key={project.id} className={style.container}>
                    <Link to={`/project/${project.id}`}>
                        <img src={imagePath + project.image} alt={project.name} width="200" height="200" />
                    </Link>
                </div>
            ))}
        </div>
    );
}
