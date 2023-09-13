import React, { useState } from 'react';
import "../Projects/Projects.scss";
import { projectData } from '../Data/Data.js';
import Collapses from '../Collapses/Collapses';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const toggleModal = (project) => {
        setSelectedProject(project);
        setModalOpen(!modalOpen);
    };

    return (
        <div className="projectsContainer">
            <h2>Mes projets</h2>
            <div className="projectsGallery">
                {projectData && projectData.map((project) => (
                    <div className="projectCard" key={project.id}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt="capture écran projet" />
                        <p>{project.description}</p>
                        <button className="btnInfos" onClick={() => toggleModal(project)}>En savoir plus</button>
                    </div>
                ))}
            </div>
            {modalOpen && selectedProject && (
                <div className="modal">
                    <div className="modalContent">
                        <span className="btnClose" onClick={toggleModal}>X</span>
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>
                        <div className="collapseContainer">
                            <Collapses title="Objectifs" objectif={selectedProject.objectif} >
                                <p>{selectedProject.objectif}</p>
                            </ Collapses>
                            <Collapses title="Stack Technique">
                                <ul>
                                    {selectedProject.stack.map((elem) => <li>{elem}</li>)}
                                </ul>
                            </ Collapses>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects;
