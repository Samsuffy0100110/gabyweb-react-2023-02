import { useParams, Link, useNavigate, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import style from "./projectView.module.scss";

export function ProjectView() {
  const [project, setProject] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BACKEND_URL;
  const uploadPath = "/project/";
  const imagePath = baseURL + uploadPath;

  useEffect(() => {
    try {
      fetch(`${baseURL}/project/${id}`)
        .then((res) => res.json())
        .then((data) => setProject(data));
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
    <div className={style.admin_container}>
      <Link to="/admin/projects">Retour</Link>
      <div className={style.admin__card}>
        <div className={style.admin__card__header}>
          <h1 className={style.admin__card__title}>{project.name}</h1>
          <div className={style.admin__card__header__buttons}>
            <Link to={`/admin/project/${id}/edit`}>
              <button
                onClick={() => navigate(`/admin/project/${project.id}/update`)}
                className={style.update_button}
              >
                Modifier
              </button>
            </Link>
          </div>
        </div>
        <div className={style.admin__card__body}>
          <div className={style.admin__card__body__image}>
            <img src={`${imagePath}${project.image}`} alt={project.name} />
          </div>
          <div className={style.admin__card__body__content}>
            <p className={style.admin__card__body__content__text}>
              {project.description}
            </p>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={style.admin__card__link}
            >
              {project.url}
            </a>
            <p className={style.admin__card__body__content__text}>
              {formatDate(project.date)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
