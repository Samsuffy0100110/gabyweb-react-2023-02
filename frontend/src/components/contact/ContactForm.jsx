import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import style from "./contact.module.scss";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export function ContactForm() {
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const reCaptchaKey = import.meta.env.VITE_RECAPTCHA_KEY;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [radioChecked, setRadioChecked] = useState([]);
  const [captcha, setCaptcha] = useState("");
  const [rgpd, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const radios = [
    { name: "Un site vitrine", value: "Un site vitrine", icon: "🌐" },
    { name: "Un site e-commerce", value: "Un site e-commerce", icon: "👜" },
    {
      name: "Un site administrable",
      value: "Un site administrable",
      icon: "📝",
    },
    { name: "Un site sur mesure", value: "Un site sur mesure", icon: "🔧" },
    { name: "Refonte de site", value: "Refonte de site", icon: "💻" },
    { name: "Renseignements", value: "Renseignements", icon: "❗️" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      radioChecked &&
      rgpd &&
      message &&
      captcha
    ) {
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      Swal.fire({
        title: "Message envoyé!",
        text: "Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.",
        icon: "success",
        confirmButtonColor: "#424242",
        confirmButtonText: "Fermer",
      });
      setFirstName("");
      setLastName("");
      setOrganization("");
      setEmail("");
      setPhone("");
      setRadioChecked([]);
      setChecked(false);
      setMessage("");
      setCaptcha("");
    }
  };

  useEffect(() => {
    if (
      firstName &&
      lastName &&
      email &&
      radioChecked &&
      rgpd &&
      message &&
      captcha
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [firstName, lastName, email, radioChecked, rgpd, message, captcha]);

  return (
    <div className={style.container} id="contact">
      <h2 className={style.title}>Une question, un projet ?</h2>
      <p className={style.summary}>
        Besoin d’en parler avec nous, appeler nous où remplissez le formulaire
        de contact, on s’engage à répondre sous 48 h.
      </p>
      <div className={style.contactForm}>
        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Prénom *"
              label="Prénom *"
            />
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Nom *"
              label="Nom *"
            />
          </div>
          <div className={style.formGroup}>
            <input
              type="text"
              name="organization"
              id="organization"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              placeholder="Organisation / Entreprise"
              label="Organisation"
            />
          </div>
          <div className={style.formGroup}>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email *"
              label="Email *"
            />
            <input
              type="tel"
              name="phone"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Téléphone"
              label="Téléphone"
            />
          </div>
          <h3>Votre demande</h3>
          <div className={style.formGroup}>
            <div className={style.radioGroup}>
              {radios.map((radio) => (
                <div key={radio.value}>
                  <input
                    type="checkbox"
                    name="radio"
                    id={radio.value}
                    value={radio.value}
                    checked={radioChecked === radio.value}
                    onChange={(e) => setRadioChecked(e.target.value)}
                    className={style.radio}
                    label={radio.name}
                  />
                  <label htmlFor={radio.value}>
                    {radio.name + " " + radio.icon}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <h3>Un petit message ?</h3>
          <div className={style.formGroup}>
            <textarea
              name="message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Bonjour Gaby Web... *"
              label="Message *"
            />
          </div>
          <div className={style.formGroup}>
            <div className={style.checkbox}>
              <label htmlFor="checkbox">
                RGPD<span className={style.mandatory}> *</span>
              </label>
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                checked={rgpd}
                onChange={(e) => setChecked(e.target.checked)}
                required
              />
              <label htmlFor="checkbox">
                Je consens à ce que les données que j'ai soumises soient
                collectées et stockées en vue d'être utilisées pour traiter ma
                demande. Voir notre politique de protection des données
                personnelles. Vous disposez d'un droit d'accès, de rectification
                et d'opposition.
              </label>
            </div>
          </div>
          <div className={style.formGroup}>
            <ReCAPTCHA
              sitekey={reCaptchaKey}
              onChange={(value) => setCaptcha(value)}
            />
            <button type="submit" disabled={disabled}>
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
