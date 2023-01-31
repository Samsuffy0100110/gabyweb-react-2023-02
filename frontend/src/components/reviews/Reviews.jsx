import React, { useState, useEffect } from 'react';
import style from './reviews.module.scss';

export function Reviews() {
    const [advisors, setAdvisors] = useState([]);
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const uploadPath = "/review/";
    const logoPath = baseURL + uploadPath;

    useEffect(() => {
        const getAdvisors = async () => {
            try {
                const response = await fetch(`${baseURL}/reviews`);
                const data = await response.json();
                setAdvisors(data);
            } catch (error) {
                console.log(error);
            }
        };
        getAdvisors();
    }, []);

    return (
        <div className={style.container}>
            <h3>Advisors</h3>
            {advisors.map((advisor) => (
                <div key={advisor.id} className={style.container}>
                    <img src={logoPath + advisor.logo} alt={advisor.name} width="200" height="200" />
                    <i>{advisor.description}</i>
                    <small>{advisor.name}</small>
                </div>
            ))}
        </div>
    );
}