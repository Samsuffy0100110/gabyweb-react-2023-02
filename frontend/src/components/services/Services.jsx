import React, { useState, useEffect } from 'react';
import style from './services.module.scss';

export function Services() {
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

    return (
        <div className={style.container}>
            <h3>Services</h3>
            {services.map((service) => (
                <div key={service.id} className={style.container}>
                    <img src={iconPath + service.icon} alt={service.name} />
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
}