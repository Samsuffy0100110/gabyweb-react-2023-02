import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import style from "./projectUpdate.module.scss";
import Swal from "sweetalert2";

export function ProjectUpdate() {
  const [project, setProject] = useState("");
  const { id } = useParams();
  const day = project.date ? project.date.slice(8, 10) : "";
  const dayPlusOne = parseInt(day) + 1;
  const month = project.date ? project.date.slice(5, 7) : "";
  const year = project.date ? project.date.slice(0, 4) : "";
  const today = `${year}-${month}-${dayPlusOne}`;
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const baseURL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await fetch(`${baseURL}/project/${id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProject();
  }, []);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const deleteOldImage = async (fileName) => {
    try {
      const response = await fetch(`${baseURL}/project/image/${fileName}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("image", file);
      await fetch(`${baseURL}/project/image`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "multipart/form-data",
        },
      });
      const name = e.target.name.value;
      const description = e.target.description.value;
      const image = file ? file.name : project.image;
      const url = e.target.url.value;
      const date = e.target.date.value;
      const body = { name, description, image, url, date };
      await fetch(`${baseURL}/project/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      Swal.fire({
        title: "Projet modifié",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#0C8DA1",
        confirmButtonAriaLabel: "OK",
      });
      navigate("/admin/projects");
    } catch (error) {
      console.log(error);
    }
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.admin_container}>
      <h1>Modifier le projet</h1>
      <form
        onSubmit={handleUpdate}
        encType="multipart/form-data"
        className={style.admin__form}
      >
        <label htmlFor="name">Titre</label>
        <input type="text" name="name" id="name" defaultValue={project.name} />
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          defaultValue={project.description}
        />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" onChange={handleChange} />
        {imagePreview && (
          <img src={imagePreview} alt="preview" className={style.preview} />
        )}
        <label htmlFor="url">URL</label>
        <input type="text" name="url" id="url" defaultValue={project.url} />
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" defaultValue={today} />
        <input
          type="submit"
          value="Modifier"
          onClick={() => deleteOldImage(project.image)}
        />
      </form>
      <Link to="/admin/projects">Retour à la liste des projets</Link>
    </div>
  );
}
