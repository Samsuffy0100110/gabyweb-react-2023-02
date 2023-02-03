import React, { useState, useEffect } from 'react';
import style from './serviceDashboard.module.scss';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export function ServiceDashboard() {
    const [services, setServices] = useState([]);
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const uploadPath = "/service/";
    const iconPath = baseURL + uploadPath;

    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await fetch(`${baseURL}/services`);
                const data = await response.json();
                setServices(data);
            } catch (error) {
                console.log(error);
            }
        };
        getServices();
    }, []);

    const deleteIcon = async (fileName) => {
        try {
            await fetch(`${baseURL}/service/icon/${fileName}`, {
                method: "DELETE",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        const service = services.find((service) => service.id === id);
        const fileName = service.icon;
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
                    await fetch(`${baseURL}/service/${id}`, {
                        method: "DELETE",
                    });
                    deleteIcon(fileName);
                    setServices(services.filter((service) => service.id !== id));
                    Swal.fire({
                        title: "Supprimé !",
                        text: "Le service a été supprimé.",
                        icon: "success",
                        confirmButtonColor: "#0C8DA1",
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        });
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
                                <td><img src={`${iconPath}${service.icon}`} alt={service.title} width="100" /></td>
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