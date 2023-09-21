import React from 'react';
import '../ContactForm/ContactForm.scss';

const ContactForm = () => {
    return (
        <div className='contactContainer'>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <label for="name">Nom : <input type="text" name="name" /></label>

                <label for="email">Email: <input type="email" name="email" /></label>

                <label for="message">Message: <textarea name="message"></textarea></label>

                <button type="submit">Envoyer</button>

            </form>,
        </div>
    );
};

export default ContactForm;