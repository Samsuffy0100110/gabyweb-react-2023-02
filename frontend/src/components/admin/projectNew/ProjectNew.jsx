import { useNavigate } from "react-router-dom";
import style from './projectNew.module.scss';
import React, { useState } from 'react';

export function ProjectNew() {

    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const today = `${year}-${month}-${day}`;

    const [project, setProject] = useState({
        title: "",
        description: "",
        image: "",
        stack: "",
        url: "",
        date: today,
    });

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (event) => {
        setProject({ ...project, [event.target.name]: event.target.value });
    }


    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`${baseURL}/project`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(project),
            });
            const data = await response.json();
            console.log(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
        } finally {
            navigate("/admin");
        }
    }

    if (error) {
        return <div>{errorMessage}</div>;
    }

    return (
        <div className={style.project_form}>
            <h3>Add Project</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={project.title} onChange={handleChange} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={project.description} onChange={handleChange} />
                <label htmlFor="image">Image</label>
                <input type="text" name="image" value={project.image} onChange={handleChange} />
                <label htmlFor="stack">Stack</label>
                <input type="text" name="stack" value={project.stack} onChange={handleChange} />
                <label htmlFor="link">Link</label>
                <input type="text" name="link" value={project.url} onChange={handleChange} />
                <label htmlFor="date">Date</label>
                <input type="text" name="date" value={project.date} onChange={handleChange} />
                <button type="submit">Add Project</button>
            </form>
        </div>
    );
}