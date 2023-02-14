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
        const monthToMonthName = (month) => {
            switch (month) {
                case "01":
                    return "Janvier";
                case "02":
                    return "Février";
                case "03":
                    return "Mars";
                case "04":
                    return "Avril";
                case "05":
                    return "Mai";
                case "06":
                    return "Juin";
                case "07":
                    return "Juillet";
                case "08":
                    return "Août";
                case "09":
                    return "Septembre";
                case "10":
                    return "Octobre";
                case "11":
                    return "Novembre";
                case "12":
                    return "Décembre";
                default:
                    return "Mois inconnu";
            }
        };
        const dateUTCArrayMonthName = monthToMonthName(dateUTCArrayMonth);
        const dateUTCArrayFinal = `Créer le ${dateUTCArrayDay} ${dateUTCArrayMonthName} ${dateUTCArrayYear}`;
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
                        />
                    </div>
                ))}
            </div>
            {modalOpen && (
                <div className={style.modal} id="modal" style={{ display: modalOpen ? "block" : "none" }}>
                    <div className={style.modal__content}>
                        <div className={style.modal__display}>
                            <img
                                src={imagePath + modalProject.image}
                                alt={modalProject.name}
                                className={style.modal__image}
                            />
                            <div className={style.modal__info}>
                                <button className={style.modal__close} onClick={() => setModalOpen(false)} aria-label="Fermer la fenêtre">Fermer</button>
                                <p className={style.modal__date}>
                                    {formatDate(modalProject.date)}
                                </p>
                                <h2 className={style.modal__title}>
                                    {modalProject.name}
                                </h2>
                                <a href={modalProject.url} target="_blank" rel="noreferrer" className={style.modal__link}>
                                    <button className={style.modal__link__button}>
                                        Visiter le site
                                    </button>
                                </a>
                            </div>
                        </div>
                        <p className={style.modal__description}>
                            {modalProject.description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}