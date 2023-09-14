import React, { useState } from 'react';
import "../Projects/Projects.scss";
import { projectData } from '../Data/Data.js';
import Collapses from '../Collapses/Collapses';
import { FaTimes } from 'react-icons/fa';

const Projects = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const toggleModal = (project) => {
        setSelectedProject(project);
        setModalOpen(!modalOpen);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (modalOpen && e.target.classList.contains('modal')) {
            closeModal();
        }
    };

    return (
        <div className="projectsContainer">
            <h2>Mes projets</h2>

            <div className="projectsGallery">
                {projectData.map((project) => (
                    <div className="projectCard" key={project.id}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt="capture écran projet" />
                        <button className="btnInfos" onClick={() => toggleModal(project)}>En savoir plus</button>
                    </div>
                ))}
            </div>

            {modalOpen && selectedProject && (
                <div className="modal" onClick={handleOutsideClick}>
                    <div className="modalContent">
                        <FaTimes className="btnClose" onClick={toggleModal} />
                        <h2>{selectedProject.title}</h2>
                        <p>{selectedProject.description}</p>

                        <div className="collapseContainer">
                            <Collapses title="Objectif" objectif={selectedProject.objectif} >
                                <p>{selectedProject.objectif}</p>
                            </ Collapses>
                            <Collapses title="Stack Technique">
                                <ul>
                                    {selectedProject.stack.map((elem) => <li>{elem}</li>)}
                                </ul>
                            </ Collapses>
                        </div>

                        <div className='linkSite'>
                            <a href={selectedProject.visitSite} target="_blank" rel="noopener noreferrer">Visiter le site</a>
                            <a href={selectedProject.gitHubLink} target="_blank" rel="noopener noreferrer">Lien Github</a>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default Projects;
