import React, { useState, useEffect } from 'react';
import style from './projects.module.scss';

export function Projects() {
    const [projects, setProjects] = useState([]);
    const uploadPath = "/project/";
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const imagePath = baseURL + uploadPath;
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProject, setModalProject] = useState({});
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

    useEffect(() => {
        try {
            fetch(`${baseURL}/projects`)
                .then((res) => res.json())
                .then((data) => setProjects(data));
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleModal = (project) => {
        setModalProject(project);
        setModalOpen(true);
    };

    const handleOver = (e) => {
        e.target.style.opacity = 0.1;
        e.target.style.transition = "all 0.5s ease";
    };

    const handleOut = (e) => {
        e.target.style.opacity = 1;
    };

    return (
        <div className={style.container} id="projects">
            <h2 className={style.title}>Nos réalisations</h2>
            <div className={style.gallery}>
                {projects.map((project) => (
                    <div
                        className={style.project__gallery}
                        key={project._id}
                    >
                        <img
                            src={imagePath + project.image}
                            alt={project.name}
                            onClick={() => handleModal(project)}
                            className={style.project_image}
                            onMouseOver={handleOver}
                            onMouseOut={handleOut}
                        />
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className={style.modal} id="modal" style={{display: modalOpen ? "block" : "none"}}>
                    <div className={style.modal__content}>
                        <img
                            src={imagePath + modalProject.image}
                            alt={modalProject.name}
                        />
                        <h3>{modalProject.name}</h3>
                        <p>{modalProject.description}</p>
                        <a href={modalProject.url} target="_blank">
                            {modalProject.url}
                        </a>
                        <p>
                            {formatDate(modalProject.date)} 
                        </p>
                        <button
                            className={style.modal__close}
                            onClick={() => setModalOpen(false)}
                        >
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}