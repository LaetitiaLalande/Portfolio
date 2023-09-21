import React, { useState } from 'react';
import "../Projects/Projects.scss";
import { DataProjects } from '../Data/DataProjects.js';
import { Link } from 'react-router-dom';

const Projects = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
    };

    return (
        <div className="projectsContainer">
            <div className='titleContainer'>
                <h2>Mes projets</h2>
            </div>
            <div className="projectsGallery">
                {DataProjects.map((project) => (
                    <div className="projectCard" key={project.id}>

                        <h3>{project.title}</h3>

                        <div className="projectImageContainer">

                            <Link to={`/projet/${project.id}`} >
                                <img src={project.image} alt="capture écran projet" onMouseEnter={toggleOverlay} loading="lazy" />

                                {showOverlay && (
                                    <div className="projectOverlay">
                                        <p>{project.description}</p>
                                        <p>en savoir plus</p>
                                    </div>
                                )}
                            </Link>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
