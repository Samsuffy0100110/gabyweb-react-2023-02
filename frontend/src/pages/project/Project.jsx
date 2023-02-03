import { Footer } from "@components/layouts/footer/Footer";
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Nav } from "@components/layouts/nav/Nav";
import style from "./project.module.scss";

export function Project() {
    const [project, setProject] = useState('');
    const [stacks, setStacks] = useState([]);
    const { id } = useParams();
    const uploadPath = "/project/";
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const imagePath = baseURL + uploadPath;

    useEffect(() => {
        try {
            fetch(`${baseURL}/project/${id}`)
                .then(res => res.json())
                .then(data => setProject(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    useEffect(() => {
        try {
            fetch(`${baseURL}/project/${id}/stacks`)
                .then(res => res.json())
                .then(data => setStacks(data))
        } catch (error) {
            console.log(error);
        }
    }, [id]);

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const formatDate = (date) => {
        const dateUTC = new Date(date);
        const dateUTCString = dateUTC.toLocaleString("fr-FR", {
            timeZone: timeZone,
        });
        const dateUTCArray = dateUTCString.split(" ");
        const dateUTCArrayDate = dateUTCArray[0].split("/");
        const dateUTCArrayDay = dateUTCArrayDate[0];
        const dateUTCArrayMonth = dateUTCArrayDate[1];
        const dateUTCArrayYear = dateUTCArrayDate[2];
        const dateUTCArrayFinal = `${dateUTCArrayDay}-${dateUTCArrayMonth}-${dateUTCArrayYear}`;
        return dateUTCArrayFinal;
    };

    return (
        <main className={style.container}>
            <Nav />
            <h1>Project and Stacks</h1>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <img src={imagePath + project.image} alt={project.name} width="200" />
            <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a>
            <p>{formatDate(project.date)}</p>
            {/* <h3>Stacks</h3>
                {stacks.map(stack => (
                        <img src={stack.image} alt={stack.name} width="50" />
                ))} */}
            <Link to="/">Back</Link>
            <Footer />
        </main>
    )
}