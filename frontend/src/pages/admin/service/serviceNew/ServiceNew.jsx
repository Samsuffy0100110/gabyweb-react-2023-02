import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import style from "./serviceNew.module.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function ServiceNew() {
    const [service, setService] = useState({
        title: "",
        description: "",
        icon: "",
    });

    const navigate = useNavigate();
    const inputRef = useRef();
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    const handleChange = (e) => {
        setService({ ...service, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("icon", inputRef.current.files[0]);
            await fetch(`${baseURL}/service/icon`, {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "multipart/form-data",
                },
            });
            const response = await fetch(`${baseURL}/service`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(service),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(error);
        } finally {
            Swal.fire({
                title: "Service added!",
                text: "You can add another service or go back to the admin panel.",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#424242",
                cancelButtonColor: "#0C8DA1",
                confirmButtonText: "Add another service",
                cancelButtonText: "Go back to admin panel service",
            }).then((result) => {
                if (result.isConfirmed) {
                    setService({
                        title: "",
                        description: "",
                        icon: "",
                    });
                } else {
                    navigate("/admin/services");
                }
            });
        }
    };

    return (
        <div>
            <h1>Add a new service</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    name="title" 
                    value={service.title} 
                    onChange={handleChange} 
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    value={service.description}
                    onChange={handleChange}
                />
                <label htmlFor="icon">Icon</label>
                <input
                    type="file"
                    name="icon"
                    ref={inputRef}
                    accept="image/*"
                    value={service.icon}
                    onChange={handleChange}
                />
                <button type="submit">Add service</button>
            </form>
            <Link to="/admin/services">Go back to services</Link>
        </div>
    );
}
