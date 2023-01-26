import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from "./projectUpdate.module.scss";

export function ProjectUpdate () {
    const [project, setProject] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
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

    const handleUpdate = async (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const image = e.target.image.value;
        const stack = e.target.stack.value;
        const link = e.target.link.value;
        const date = e.target.date.value;
        const body = { title, description, image, stack, link, date };
        try {
            const response = await fetch(`${baseURL}/project/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            navigate("/admin");
        }
    };

    return (
        <div>
            <h3>Update project</h3>
            <form onSubmit={handleUpdate}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" defaultValue={project.title} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" defaultValue={project.description} />
                <label htmlFor="image">Image</label>
                <input type="text" name="image" defaultValue={project.image} />
                <label htmlFor="stack">Stack</label>
                <input type="text" name="stack" defaultValue={project.stack} />
                <label htmlFor="link">Link</label>
                <input type="text" name="link" defaultValue={project.link} />
                <label htmlFor="date">Date</label>
                <input type="text" name="date" defaultValue={project.date} />
                <button type="submit">Update</button>
            </form>
            <Link to={`/admin`}>Retour</Link>
        </div>
    );
}