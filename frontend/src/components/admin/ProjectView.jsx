import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProjectView() {
    const [project, setProject] = useState('');
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/project/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }
    , [id]);

    return (
        <div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} />
            <p>{project.stack}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
            <p>{project.date}</p>
            <Link to={`/admin`}>Retour</Link>
        </div>
    );
}
