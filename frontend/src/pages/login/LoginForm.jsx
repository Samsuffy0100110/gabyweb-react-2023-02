import { Footer } from "@components/layouts/footer/Footer";
import { Nav } from "@components/layouts/nav/Nav";
import { useNavigate } from "react-router-dom";
import style from "./loginForm.module.scss";
import React, { useState } from "react";

export function LoginForm() {
    const [pseudo, setPseudo] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const baseURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseURL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    pseudo,
                    password,
                }),
            });
            const data = await response.json();
            if (data.error) {
                setError(true);
                setErrorMessage(data.message);
            } else {
                localStorage.setItem("token", data.token);
                navigate("/admin");
            }
        } catch (error) {
            setError(true);
            setErrorMessage(error.message);
        }
    };

    return (
        <>
            <Nav />
            <div className={style.loginForm}>
                <h3>Connexion</h3>
                <form onSubmit={handleSubmit}>
                    <div className={style.formGroup}>
                        <label htmlFor="pseudo" className={style.label}>
                            Pseudo
                        </label>
                        <input
                            type="pseudo"
                            name="pseudo"
                            id="pseudo"
                            value={pseudo}
                            onChange={(e) => setPseudo(e.target.value)}
                        />
                    </div>
                    <div className={style.formGroup}>
                        <label htmlFor="password" className={style.label}>
                            Mot de passe
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Se connecter</button>
                </form>
                {error && <div>{errorMessage}</div>}
            </div>
            <Footer />
        </>
    );
}
