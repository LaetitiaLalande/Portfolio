import React from 'react';
import "../Header/Header.scss";

const Header = () => {
    return (
        <div className='headerContainer'>
        <nav>
          <ul>
            <li><a href="#sectionAbout">À Propos</a></li>
            <li><a href="#sectionPortfolio">Portfolio</a></li>
            <li><a href="#sectionSkills">Mes Compétences</a></li>
            <li><a href="#sectionContact">Contact</a></li>
          </ul>
        </nav>
        </div>
    );
};

export default Header;