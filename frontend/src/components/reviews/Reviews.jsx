import React, { useState, useEffect } from "react";
import style from "./reviews.module.scss";

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
    <div className={style.container} id="reviews">
      <h3 className={style.title}>Ils nous ont fait confiance</h3>
      <div className={style.row}>
        {advisors.map((advisor) => (
          <div key={advisor.id} className={style.card}>
            <img
              src={logoPath + advisor.logo}
              alt={advisor.name}
              width="50"
              height="50"
            />
            <i>"{advisor.review}"</i>
            <small className={style.name}>{advisor.name}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
