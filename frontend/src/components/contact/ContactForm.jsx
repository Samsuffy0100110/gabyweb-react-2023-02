import React, { useState, useEffect } from 'react';
import style from './contact.module.scss';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

export function ContactForm() {
    const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [organization, setOrganization] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [radioChecked, setRadioChecked] = useState([ ]);
    const [rgpd, setChecked] = useState(false);
    const [message, setMessage] = useState('');
    const [mandatory, setMandatory] = useState('');
    const [disabled, setDisabled] = useState(true);


    const radios = [
        { name: 'Un site vitrine', value: 'Un site vitrine' },
        { name: 'Un site e-commerce', value: 'Un site e-commerce' },
        { name: 'Refonte de site', value: 'Refonte de site' },
        { name: 'Un site sur mesure', value: 'Un site sur mesure' },
        { name: 'Renseignements', value: 'Renseignements' },
    ];
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && organization && email && phone && radioChecked && rgpd && message) {
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            Swal.fire({
                title: 'Message envoyé!',
                text: 'Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.',
                icon: 'success',
                confirmButtonColor: '#424242',
                confirmButtonText: 'Fermer',
            });
            setFirstName('');
            setLastName('');
            setOrganization('');
            setEmail('');
            setPhone('');
            setRadioChecked([]);
            setChecked(false);
            setMessage('');
        } else {
            setMandatory('Tous les champs sont obligatoires.');
        }
    };

    useEffect(() => {
        if (firstName && lastName && email && rgpd && message) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [firstName, lastName, email, rgpd, message]);

    return (
        <div className={style.contactForm}>
            <form onSubmit={handleSubmit}>
                <div className={style.formGroup}>
                <label htmlFor="firstName">Prénom<span className={style.mandatory}> *</span></label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="lastName">Nom<span className={style.mandatory}> *</span></label>
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="organization">Organisation</label>
                    <input type="text" name="organization" id="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email<span className={style.mandatory}> *</span></label>
                    <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="phone">Téléphone</label>
                    <input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="radio">Type de projet</label>
                    <div className={style.radioGroup}>
                        {radios.map((radio) => (
                            <div key={radio.value}>
                                <input 
                                    type="radio" 
                                    name="radio" id={radio.value} 
                                    value={radio.value} 
                                    checked={radioChecked === radio.value} 
                                    onChange={(e) => setRadioChecked(e.target.value)}
                                    className={style.radio}
                                    />
                                <label htmlFor={radio.value}>{radio.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="message">Message<span className={style.mandatory}> *</span></label>
                    <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="checkbox">RGPD<span className={style.mandatory}> *</span></label>
                    <div className={style.checkbox}>
                        <input type="checkbox" id="checkbox" name="checkbox" checked={rgpd} onChange={(e) => setChecked(e.target.checked)} required />
                        <label htmlFor="checkbox">I agree to the processing of my personal data</label>
                    </div>
                </div>
                <div className={style.formGroup}>
                    <button type="submit" disabled={disabled}>Envoyer</button>
                </div>
                <div className={style.formGroup}>
                    <p>{mandatory}</p>
                </div>
            </form>
        </div>
    );
};













