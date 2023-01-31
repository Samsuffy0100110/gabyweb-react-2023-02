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
        <div className={style.container} id="services">
            <h3 className={style.title}>Nos Services</h3>
            <div className={style.row}>
            {services.map((service) => (
                <div key={service.id} className={style.card}>
                    <img src={service.icon} alt={service.name} width="300" />
                    <h3>{service.title}</h3>
                    {/* <img src={iconPath + service.icon} alt={service.name} width="200" /> */}
                    <p className={style.description}>{service.description}</p>
                </div>
            ))}
            </div>
        </div>
    );
}