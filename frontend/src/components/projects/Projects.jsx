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

    const handleOver = (e) => {
        e.target.style.opacity = 0.1;
        e.target.style.transition = "all 0.5s ease";
    };

    const handleOut = (e) => {
        e.target.style.opacity = 1;
    };
    
    return (
        <div className={style.container} id="projects">
            <h2 className={style.title}>Nos Réalisations</h2>
            <div className={style.gallery}>
                {projects.map((project) => (
                    <div key={project.id} className={style.project_gallery}>
                        <Link to={`/project/${project.id}`}>
                            <img 
                                src={imagePath + project.image}
                                alt={project.name} 
                                className={style.project_image}
                                onMouseOver={handleOver}
                                onMouseOut={handleOut}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
