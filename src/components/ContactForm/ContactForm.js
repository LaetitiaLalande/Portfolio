import React from 'react';
import '../ContactForm/ContactForm.scss';

const ContactForm = () => {


    return (
        <div className="formContainer">
            <form name="contact" method="post" className='formContact'>
                <input type="hidden" name="form-name" value="contact" />


                <label htmlFor="name">Nom : </label>
                <input type="text" name="name" id="name" />

                <label htmlFor="email">Email: </label>
                <input type="email" name="email" id="email" />

                <label htmlFor="message">Message: </label>
                <textarea name="message" id="message"></textarea>

                <div className='btnSubmit'>
                    <button type="submit">Envoyer</button>
                    </div>
            </form>
        </div>
    );
};

export default ContactForm;