import React from 'react';
import "../Footer/Footer.scss";
import { FaEnvelope } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const email = 'laetitia2288@gmail.com';

  const handleClick = () => {
    // mailto: pour ouvrir le client de messagerie par défaut de l'utilisateur
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="sectionContact">
      <hr />
      <h2>Me Contacter</h2>
      <div className='infos'>
        <div className='emailContainer'>
          <p>Besoin de me contacter ? Vous pouvez me joindre par email en cliquant sur l'icône ci-dessous :</p>
          <FaEnvelope onClick={handleClick} className='iconEnveloppe' />
          {/* <div className='separation'></div> */}
        </div>
        <div className='socialIcons'>
          <p>Retrouvez-moi également sur :</p>
          <a href="https://github.com/LaetitiaLalande" target="_blank" rel="noopener noreferrer">
            <FaGithub className='iconGithub' />
          </a>
          <a href="https://www.linkedin.com/in/laetitia-lalande-6a60a9259" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;