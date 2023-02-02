import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import style from "./projectUpdate.module.scss";
import Swal from "sweetalert2";

export function ProjectUpdate() {
    const [project, setProject] = useState('');
    const { id } = useParams();
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const baseURL = import.meta.env.VITE_BACKEND_URL;


    useEffect(() => {
        const getProject = async () => {
            try {
                const response = await fetch(`${baseURL}/project/${id}`);
                const data = await response.json();
                setProject(data);
            } catch (error) {
                console.log(error);
            }
        };
        getProject();
    }, []);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
};

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", file);
            await fetch(`${baseURL}/project/image`, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "multipart/form-data",
                },
            });
            const title = e.target.title.value;
            const description = e.target.description.value;
            const image = file.name;
            const stack = e.target.stack.value;
            const url = e.target.url.value;
            const date = e.target.date.value;
            const body = { title, description, image, stack, url, date };
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
                title: "Project updated!",
                text: "You can update another project or go back to the admin panel.",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#424242",
                cancelButtonColor: "#0C8DA1",
                confirmButtonText: "Update another project",
                cancelButtonText: "Go back to admin panel",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/admin/project/update/${id}`);
                } else if (result.isDismissed) {
                    navigate("/admin");
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
            <h1>Modifier le projet</h1>
            <form onSubmit={handleUpdate} encType="multipart/form-data">
                <div>
                    <label htmlFor="title">Titre</label>
                    <input type="text" name="title" id="title" defaultValue={project.title} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" defaultValue={project.description} />
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input type="file" name="image" id="image" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="stack">Stack</label>
                    <input type="text" name="stack" id="stack" defaultValue={project.stack} />
                </div>
                <div>
                    <label htmlFor="url">URL</label>
                    <input type="text" name="url" id="url" defaultValue={project.url} />
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="text" name="date" id="date" defaultValue={projectDate.toISOString().slice(0, 10)} />
                </div>
                <div>
                    <button type="submit" className={style.update_button}>Update</button>
                </div>
            </form>
            <Link to="/admin/project" className={style.link}>
                <button>Retour</button>
            </Link>
        </div>
    );
}