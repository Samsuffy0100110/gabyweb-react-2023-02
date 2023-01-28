import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import style from "./project.module.scss";

export function Project() {
    const [project, setProject] = useState('');
    const [stacks, setStacks] = useState([]);
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

    useEffect(() => {
        try {
            fetch(`${baseURL}/project/${id}/stacks`)
                .then(res => res.json())
                .then(data => setStacks(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    return (
        <div className={style.container}>
            <h1>Project and Stacks</h1>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={project.image} alt={project.title} width="200" />
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
            <p>{project.date}</p>
            <h3>Stacks</h3>
                {stacks.map(stack => (
                        <img src={stack.image} alt={stack.name} width="50" />
                ))}
            <Link to="/">Back</Link>
        </div>
    )
}