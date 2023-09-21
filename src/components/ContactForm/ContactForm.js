import React, { useState } from 'react';
import '../ContactForm/ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => alert('Message envoyé avec succès'))
            .catch((error) => alert(`Erreur lors de l'envoi : ${error}`));
    };

    return (
        <div className="contactContainer">
            <form name="contact" method="post" onSubmit={handleSubmit} data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />

                <label htmlFor="name">Nom :</label>
                <input type="text" name="name" id="name" onChange={handleChange} value={formData.name} />

                <label htmlFor="email">Email :</label>
                <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />

                <label htmlFor="message">Message :</label>
                <textarea name="message" id="message" onChange={handleChange} value={formData.message}></textarea>

                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default ContactForm;