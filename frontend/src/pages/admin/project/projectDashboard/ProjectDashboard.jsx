import React, { useState, useEffect } from 'react';
import style from './projectDashboard.module.scss';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export function ProjectDashboard() {
    const [projects, setProjects] = useState([]);
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const uploadPath = "/project/";
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

    const deleteImage = async (fileName) => {
        try {
            await fetch(`${baseURL}/project/image/${fileName}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        const project = projects.find((project) => project.id === id);
        const fileName = project.image;
        Swal.fire({
            title: "Êtes-vous sûr ?",
            text: "Vous ne pourrez pas revenir en arrière !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#0C8DA1",
            cancelButtonColor: "#d33",
            confirmButtonText: "Oui, supprimer !",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await fetch(`${baseURL}/project/${id}`, {
                        method: "DELETE",
                    });
                    deleteImage(fileName);
                    setProjects(projects.filter((project) => project.id !== id));
                    Swal.fire({
                        title: "Supprimé !",
                        text: "Le projet a été supprimé.",
                        icon: "success",
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatDate = (date) => {
        const dateUTC = new Date(date);
        const dateUTCString = dateUTC.toLocaleString("fr-FR", {
            timeZone: timeZone,
        });
        const dateUTCArray = dateUTCString.split(" ");
        const dateUTCArrayDate = dateUTCArray[0].split("/");
        const dateUTCArrayDay = dateUTCArrayDate[0];
        const dateUTCArrayMonth = dateUTCArrayDate[1];
        const dateUTCArrayYear = dateUTCArrayDate[2];
        const dateUTCArrayFinal = `${dateUTCArrayDay}-${dateUTCArrayMonth}-${dateUTCArrayYear}`;
        return dateUTCArrayFinal;
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
                                <td><img src={imagePath + project.image} alt={project.name} width="200px" /></td>
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