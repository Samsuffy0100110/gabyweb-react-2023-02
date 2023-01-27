import React, { useState, useEffect } from 'react';
import style from './reviews.module.scss';

export function Reviews() {
    const [advisors, setAdvisors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        const getAdvisors = async () => {
            try {
                const response = await fetch(`${baseURL}/reviews`);
                const data = await response.json();
                setAdvisors(data);
                setLoading(false);
            } catch (error) {
                setError(true);
                setErrorMessage(error.message);
            }
        };
        getAdvisors();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{errorMessage}</div>;
    }

    return (
        <div className={style.container}>
            <h3>Advisors</h3>
            {advisors.map((advisor) => (
                <div key={advisor.id} className={style.container}>
                    <img src={advisor.logo} alt={advisor.name} width="200" />
                    <i>{advisor.description}</i>
                    <small>{advisor.name}</small>
                </div>
            ))}
        </div>
    );
}