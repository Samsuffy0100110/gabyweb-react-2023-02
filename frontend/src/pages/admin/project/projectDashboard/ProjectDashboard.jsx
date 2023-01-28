import React, { useState, useEffect } from 'react';
import style from './projectDashboard.module.scss';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export function ProjectDashboard() {
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch(`${baseURL}/projects`);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getProjects();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${baseURL}/project/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
            setError(true);
            setErrorMessage(error.message);
        } finally {
            Swal.fire({
                title: "Suppression",
                text: "Le projet a bien été supprimé.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        }
    };

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatDate = (date) => {
        const dateUTC = new Date(date);
        const dateUTCString = dateUTC.toLocaleString("fr-FR", {
            timeZone: timeZone,
        });
        return dateUTCString;
    };

    console.log(projects);

    if (projects.length === 0) {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h3>Projects</h3>
                <Link to="/admin/project/new">Add project</Link>
                <p>No projects yet</p>
            </div>
        );
    } else {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h3>Projects</h3>
                <Link to="/admin/project/new">Add project</Link>
                {projects.map((project) => (
                    <table key={project.id} className={style.admin_projects}>
                        <thead>
                            <tr>
                                <th>Project Title</th>
                                <th>Project Description</th>
                                <th>Project Image</th>
                                <th>Project Stack</th>
                                <th>Project Link</th>
                                <th>Project Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{project.title}</td>
                                <td>{project.description}</td>
                                <td><img src={project.image} alt={project.title} width="200" /></td>
                                <td>{project.stack}</td>
                                <td>{project.url}</td>
                                <td>{formatDate(project.date)}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <Link to={`/admin/project/${project.id}`}>
                                    <button>View</button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/admin/project/${project.id}/update`}>
                                    <button className={style.update_button}>Update</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(project.id)} className={style.delete_button}>Delete</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                ))}
            </div>
        );
    }
}