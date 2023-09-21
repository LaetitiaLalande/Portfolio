import React, { useState } from 'react';
import "../Header/Header.scss";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='headerContainer'>
      <nav className={` ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <ul className={` ${menuOpen ? 'active' : ''}`}>
          <li><a href="#sectionAbout">À Propos</a></li>
          <li><a href="#sectionPortfolio">Portfolio</a></li>
          <li><a href="#sectionSkills">Compétences</a></li>
          <li><a href="#sectionContact">Contact</a></li>
        </ul>
        <div id='icons' ></div>
      </nav>
    </div>
  );
};

export default Header;