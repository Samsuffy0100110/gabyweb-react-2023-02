import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./stackNew.module.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function StackNew() {
    const [stack, setStack] = useState({
        name: "",
        image: "",
    });

    const navigate = useNavigate();
    const inputRef = useRef();
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (e) => {
        setStack({ ...stack, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("image", inputRef.current.files[0]);
            await fetch(`${baseURL}/stack/image`, {
                method: "POST",
                body: formData,
                headers: {
                "Accept": "multipart/form-data",
            },
        });
            const response = await fetch(`${baseURL}/stack`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(stack),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            Swal.fire({
                title: "Stack ajoutée!",
                text: "Vous pouvez ajouter une autre stack ou retourner au panneau d'administration.",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#424242",
                cancelButtonColor: "#0C8DA1",
                confirmButtonText: "Ajouter une autre stack",
                cancelButtonText: "Retourner au panneau d'administration",
            }).then((result) => {
                if (result.isConfirmed) {
                    setStack({
                        name: "",
                        image: "",
                    });
                } else {
                    navigate("/admin/stacks");
                }
            });
        }
    };

    return (
        <div>
            <h1>Ajouter une stack</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nom de la stack</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={stack.name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="image">Image</label>
                <input
                    type="file"
                    name="image"
                    id="image"
                    value={stack.image}
                    onChange={handleChange}
                    ref={inputRef}
                    accept="image/*"
                    required
                />
                <button type="submit">Ajouter</button>
            </form>
            <Link to="/admin/stacks">Retourner à la liste des stacks</Link>
        </div>
    );
}