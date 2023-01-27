import React, { useState, useEffect } from 'react';
import style from './services.module.scss';

export function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getServices = async () => {
            try {
                const response = await fetch(`${baseURL}/services`);
                const data = await response.json();
                setServices(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getServices();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{errorMessage}</div>;
    }

    return (
        <div className={style.container}>
            <h3>Services</h3>
            {services.map((service) => (
                <div key={service.id} className={style.container}>
                    <img src={service.icon} alt={service.title} width="200" />
                    <strong>{service.title}</strong>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}