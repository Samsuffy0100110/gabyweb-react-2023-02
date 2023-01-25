import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './main.module.scss';

export default function Main() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const getProjects = async () => {
            try {
                const response = await fetch("http://localhost:5000/projects");
                const data = await response.json();
                setProjects(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getProjects();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/project/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            console.log(data);
            setLoading(false);
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
        } finally {
            window.location.reload();
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{errorMessage}</div>;
    }

    return (
        <div className={style.container}>
            <h3>Projects</h3>
            <Link to="/project/new">Add project</Link>
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
                            <td>{project.link}</td>
                            <td>{project.date}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <Link to={`/project/${project.id}`}>See</Link>
                            </td>
                            <td>
                                <Link to={`/project/${project.id}/update`}>Update</Link>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(project.id)}>Delete</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            ))}
        </div>
    );
}