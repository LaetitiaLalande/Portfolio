import React from 'react';
import "./ProjectsGallery.scss";
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {

    return (
        <div className="projectsContainer">
            <div className='titleContainer'>
                <h2>Mes projets</h2>
            </div>
            <div className="projectsGallery">
                <ProjectCard />
            </div>
        </div>
    )
}

export default Projects;
