import React, { useState, useEffect } from 'react';
import style from './stackDashboard.module.scss';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

export function StackDashboard() {
    const [stacks, setStacks] = useState([]);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getStacks = async () => {
            try {
                const response = await fetch(`${baseURL}/stacks`);
                const data = await response.json();
                setStacks(data);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getStacks();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${baseURL}/stack/${id}`, {
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
                text: "La stack a bien été supprimée.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload();
                }
            });
        }
    };

    if (stacks.length === 0) {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h1>Stacks</h1>
                <p>Aucune stack n\'a été ajoutée.</p>
                <Link to="/admin/stack/new">
                    <button>Ajouter une stack</button>
                </Link>
            </div>
        );
    } else {
        return (
            <div className={style.container}>
                <Link to={`/admin`}>Retour</Link>
                <h1>Stacks</h1>
                <Link to="/admin/stack/new">Ajouter une stack</Link>
                {stacks.map((stack) => (
                    <table key={stack.id} className={style.admin_stacks}>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Icone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{stack.name}</td>
                                <td><img src={stack.image} alt={stack.name} /></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>
                                    <Link to={`/admin/stack/${stack.id}/update`}>
                                        <button className={style.update_button}>Modifier</button>
                                    </Link>
                                </td>
                                <td>
                                    <button className={style.delete_button} onClick={() => handleDelete(stack.id)}>Supprimer</button>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                ))}
            </div>
        );
    }
}
