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
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isValidate, setIsValidate] = useState(false);

    const radios = [
        { name: 'Un site vitrine', value: 'Un site vitrine' },
        { name: 'Un site e-commerce', value: 'Un site e-commerce' },
        { name: 'Refonte de site', value: 'Refonte de site' },
        { name: 'Un site sur mesure', value: 'Un site sur mesure' },
        { name: 'Renseignements', value: 'Renseignements' },
    ];
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSubmitted(false);
        setIsError(false);
        setIsSuccess(false);
        setIsValidate(false);
        setLoading(true);
        setDisabled(true);
        setError('');
        setSuccess('');
        setFirstName('');
        setLastName('');
        setOrganization('');
        setEmail('');
        setPhone('');
        setRadioChecked([]);
        setChecked(false);
        setMessage('');
        if (!firstName || !lastName || !email || !message || !rgpd) {
            setIsSubmitting(false);
            setIsSubmitted(false);
            setIsError(false);
            setIsSuccess(false);
            setIsValidate(true);
            setLoading(false);
            setDisabled(false);
            setError('');
            setSuccess('');
            setFirstName('');
            setLastName('');
            setOrganization('');
            setEmail('');
            setPhone('');
            setRadioChecked([]);
            setChecked(false);
            setMessage('');
            setMandatory('Les champs marqués d\'une * sont obligatoires');
            Swal.fire({
                title: 'Les champs marqués d\'une * sont obligatoires',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return;
        }

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setIsError(false);
            setIsSuccess(true);
            setIsValidate(false);
            setLoading(false);
            setDisabled(false);
            setError('');
            setSuccess('Message sent successfully!');
            setFirstName('');
            setLastName('');
            setOrganization('');
            setEmail('');
            setPhone('');
            setRadioChecked([]);
            setChecked(false);
            setMessage('');
            setMandatory('');
            Swal.fire({
                title: 'Message sent successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }, (error) => {
            setIsSubmitting(false);
            setIsSubmitted(false);
            setIsError(true);
            setIsSuccess(false);
            setIsValidate(false);
            setLoading(false);
            setDisabled(false);
            setError('Message not sent');
            setSuccess('');
            setFirstName('');
            setLastName('');
            setOrganization('');
            setEmail('');
            setPhone('');
            setRadioChecked([]);
            setChecked(false);
            setMessage(''); 
            setMandatory('');
            Swal.fire({
                title: 'Message not sent',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    }

    const handleReset = (e) => {
        e.preventDefault();
        setIsSubmitting(false);
        setIsSubmitted(false);
        setIsError(false);
        setIsSuccess(false);
        setIsValidate(false);
        setLoading(false);
        setDisabled(true);
        setError('');
        setSuccess('');
        setFirstName('');
        setLastName('');
        setOrganization('');
        setEmail('');
        setPhone('');
        setRadioChecked([]);
        setChecked(false);
        setMessage('');
        setMandatory('');
    }

    useEffect(() => {
        if (firstName && lastName && email && message && rgpd) {
            setDisabled(false);
            setMandatory('');
        } else {
            setDisabled(true);
            setMandatory('Les champs marqués d\'une * sont obligatoires');
        }
    }, [firstName, lastName, email, message, rgpd]);

    return (
        <div className={style.contactForm}>
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className={style.formGroup}>
                    <label htmlFor="firstName">First Name<span className={style.mandatory}>*</span></label>
                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="lastName">Last Name<span className={style.mandatory}>*</span></label>
                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="organization">Organization</label>
                    <input type="text" id="organization" name="organization" value={organization} onChange={(e) => setOrganization(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="email">Email<span className={style.mandatory}>*</span></label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="radio">Reason for contacting us<span className={style.mandatory}>*</span></label>
                    <div className={style.radio}>
                        {radios.map((radio, index) => (
                            <div key={index}>
                                <input type="radio" id={radio.value} name="radio" value={radio.value} checked={radioChecked === radio.value} onChange={(e) => setRadioChecked(e.target.value)} required />
                                <label htmlFor={radio.value}>{radio.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="checkbox">RGPD<span className={style.mandatory}>*</span></label>
                    <div className={style.checkbox}>
                        <input type="checkbox" id="checkbox" name="checkbox" checked={rgpd} onChange={(e) => setChecked(e.target.checked)} required />
                        <label htmlFor="checkbox">I agree to the processing of my personal data</label>
                    </div>
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="message">Message<span className={style.mandatory}>*</span></label>
                    <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                </div>
                <div className={style.formGroup}>
                    <button type="reset">Reset</button>
                    <button type="submit" disabled={disabled} className={disabled ? style.disabled : ''}>Submit</button>
                </div>
            </form>
            {isSubmitting && <div className={style.submitting}>Submitting...</div>}
            {isSubmitted && <div className={style.submitted}>Submitted!</div>}
            {isError && <div className={style.error}>Error: {error}</div>}
            {isSuccess && <div className={style.success}>Success: {success}</div>}
            {isValidate && <div className={style.validate}>Validate</div>}
            {loading && <div className={style.loading}>Loading...</div>}
        </div>
    );
}













