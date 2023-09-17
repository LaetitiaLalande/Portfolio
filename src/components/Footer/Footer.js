import React from 'react';
import "../Footer/Footer.scss";
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const email = 'laetitia2288@gmail.com';

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="sectionContact">
      <hr />
      <h2>Me Contacter</h2>
      <div className='infos'>

        <div className='emailContainer'>
          <p>Vous pouvez me joindre par email en cliquant ici 👇:</p>
          <FaEnvelope onClick={handleClick} className='iconEnveloppe' />
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