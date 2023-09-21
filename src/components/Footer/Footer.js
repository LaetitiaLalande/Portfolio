import React from 'react';
import "../Footer/Footer.scss";
import { FaEnvelope } from 'react-icons/fa';
import IconContact from '../IconContact/IconContact';
import ContactForm from '../ContactForm/ContactForm';

const Footer = () => {
  const email = 'laetitia2288@gmail.com';

  const handleClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="sectionContact">
      <hr />
      <div className='titleContainer'>
        <h2>Me Contacter</h2>
      </div>
      <div className='infos'>

        <div className='emailContainer'>
          <ContactForm />
        </div>

        <div className='contactContainer'>
          <p>Retrouvez-moi également sur :</p>
          <IconContact />
        </div>
      </div>
    </div>
  );
};

export default Footer;