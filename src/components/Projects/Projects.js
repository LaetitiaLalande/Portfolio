import React from 'react';
import "../Projects/Projects.scss";
import { DataProjects } from '../Data/DataProjects.js';
import { Link } from 'react-router-dom';

const Projects = () => {

    return (
        <div className="projectsContainer">
            <h2>Mes projets</h2>

            <div className="projectsGallery">
                {DataProjects.map((project) => (
                    <div className="projectCard" key={project.id}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt="capture écran projet" />
                        <Link to={`/projet/${project.id}`} className="btnInfos">
                            En savoir plus
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;
