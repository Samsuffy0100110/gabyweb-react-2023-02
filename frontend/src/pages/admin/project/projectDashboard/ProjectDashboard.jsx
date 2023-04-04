import React, { useState, useEffect } from "react";
import style from "./projectDashboard.module.scss";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export function ProjectDashboard() {
  const [projects, setProjects] = useState([]);
  const baseURL = import.meta.env.VITE_BACKEND_URL;
  const uploadPath = "/project/";
  const imagePath = baseURL + uploadPath;
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
  const truncateDescription = (text, length) => {
    const truncatedText = text.substring(0, length);
    return truncatedText + "...";
  };

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetch(`${baseURL}/projects`);
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  const deleteImage = async (fileName) => {
    try {
      await fetch(`${baseURL}/project/image/${fileName}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    const project = projects.find((project) => project.id === id);
    const fileName = project.image;
    Swal.fire({
      title: "Êtes-vous sûr ?",
      text: "Vous ne pourrez pas revenir en arrière !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#0C8DA1",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await fetch(`${baseURL}/project/${id}`, {
            method: "DELETE",
          });
          deleteImage(fileName);
          setProjects(projects.filter((project) => project.id !== id));
          Swal.fire({
            title: "Supprimé !",
            text: "Le projet a été supprimé.",
            icon: "success",
            confirmButtonColor: "#0C8DA1",
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  if (projects.length === 0) {
    return (
      <div className={style.admin_container}>
        <Link to={`/admin`}>Retour</Link>
        <h3>Tout les projets</h3>
        <Link to="/admin/project/new">Ajouter un projet</Link>
      </div>
    );
  } else {
    return (
      <div className={style.admin_container}>
        <Link to={`/admin`}>Retour</Link>
        <h3>Tout les projets</h3>
        <Link to="/admin/project/new">Ajouter un projet</Link>
        <div className={style.admin__table__container}>
          {projects.map((project) => (
            <table key={project.id} className={style.admin__projects}>
              <thead>
                <tr>
                  <th>Nom du projet</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Lien du projet</th>
                  <th>Date de création</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{project.name}</td>
                  <td className={style.description}>
                    {truncateDescription(project.description, 100)}
                  </td>
                  <td>
                    <img
                      src={imagePath + project.image}
                      alt={project.name}
                      width="200px"
                    />
                  </td>
                  <td>
                    <a href={project.url} target="_blank" rel="noreferrer">
                      {project.url}
                    </a>
                  </td>
                  <td>{formatDate(project.date)}</td>
                  <td>
                    <Link to={`/admin/project/${project.id}`}>
                      <button>Voir le projet</button>
                    </Link>
                    <Link to={`/admin/project/${project.id}/update`}>
                      <button className={style.update_button}>Modifier</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className={style.delete_button}
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      </div>
    );
  }
}
