import React, { useState, useEffect } from 'react';
import style from './serviceDashboard.module.scss';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export function ServiceDashboard() {
    const [services, setServices] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await fetch(`${baseURL}/services`);
                const data = await response.json();
                setServices(data);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getServices();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${baseURL}/service/${id}`, {
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
                text: "Le service a bien été supprimé.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        }
    };

    if (services.length === 0) {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h1>Services</h1>
                <p>Aucun service n'a été ajouté.</p>
                <Link to="/admin/service/new">
                    <button>Ajouter un service</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h1>Services</h1>
                <Link to="/admin/service/new">Add a service</Link>
                {services.map((service) => (
                    <table key={service.id} className={style.admin_services}>
                        <thead>
                            <tr>
                                <th>Titre</th>
                                <th>Description</th>
                                <th>Icones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{service.title}</td>
                                <td>{service.description}</td>
                                <td><img src={service.icon} alt="icon" /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <Link to={`/admin/service/${service.id}/update`}>
                                        <button className={style.update_button}>Modifier</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(service.id)} className={style.delete_button}>Supprimer</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                ))}
            </div>
        );
    }
}