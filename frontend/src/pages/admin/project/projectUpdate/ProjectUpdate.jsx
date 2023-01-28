import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from "./projectUpdate.module.scss";
import Swal from "sweetalert2";

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
        const url = e.target.url.value;
        const date = e.target.date.value;
        const body = { title, description, image, stack, url, date };
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
            Swal.fire({
                title: "Modification",
                text: "Le projet a bien été modifié.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/admin/projects`);
                }
            });
        }
    };

    if (!project) {
        return <div>Loading...</div>;
    }

    const projectDate = new Date(project.date);

    return (
        <div>
            <h1>Update project</h1>
            <form onSubmit={handleUpdate}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" defaultValue={project.title} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" defaultValue={project.description} />
                <label htmlFor="image">Image</label>
                <input type="text" name="image" defaultValue={project.image} />
                <label htmlFor="stack">Stack</label>
                <input type="text" name="stack" defaultValue={project.stack} />
                <label htmlFor="url">Link</label>
                <input type="text" name="url" defaultValue={project.url} />
                <label htmlFor="date">Date</label>
                <input type="text" name="date" defaultValue={projectDate.toISOString().slice(0, 10)} />
                <button type="submit" className={style.update_button}>Update</button>
            </form>
            <Link to={`/admin/projects`}>Go back to projects</Link>
        </div>
    );
}