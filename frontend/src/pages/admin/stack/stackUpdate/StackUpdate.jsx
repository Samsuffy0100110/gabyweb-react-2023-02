import { useParams, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import style from "./stackUpdate.module.scss";
import Swal from "sweetalert2";

export function StackUpdate () {
    const [stack, setStack] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        try {
            fetch(`${baseURL}/stack/${id}`)
                .then(res => res.json())
                .then(data => setStack(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        const body = { name, image };
        try {
            const response = await fetch(`${baseURL}/stack/${id}`, {
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
                text: "La stack a bien été modifiée.",
                icon: "success",
                confirmButtonColor: "#0C8DA1",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate(`/admin/stacks`);
                }
            });
        }
    };

    if (!stack) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Modifier une stack</h1>
            <form onSubmit={handleUpdate}>
                <label htmlFor="name">Nom</label>
                <input type="text" name="name" id="name" defaultValue={stack.name} />
                <label htmlFor="image">Image</label>
                <input type="text" name="image" id="image" defaultValue={stack.image} />
                <button type="submit" className={style.update_button}>Modifier</button>
            </form>
            <Link to="/admin/stacks">Retour</Link>
        </div>
    );
}