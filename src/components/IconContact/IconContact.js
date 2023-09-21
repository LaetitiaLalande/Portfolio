import React from 'react';
import '../IconContact/IconContact.scss';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const IconContact = () => {

    const email = 'laetitia2288@gmail.com';

    const handleClick = () => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="socialIcons">
            <FaEnvelope onClick={handleClick} className='iconEnveloppe' />
            <a href="https://github.com/LaetitiaLalande" target="_blank" rel="noopener noreferrer">
                <FaGithub className='iconGithub' />
            </a>
            <a href="https://www.linkedin.com/in/laetitia-lalande-6a60a9259" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
        </div>
    );
};

export default IconContact;