import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataProjects } from '../../components/Data/DataProjects.js';
import "../ProjectDetails/ProjectDetails.scss";
import CarouselProject from '../../components/Carousel/Carousel.js';
import IconContact from '../../components/IconContact/IconContact.js';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = DataProjects.find((project) => project.id === Number(id));

    if (!project) {
        return <div>Projet non trouvé</div>;
    }



    return (
        <div className='ProjectDetailContainer'>
            <div className='headerContainer'>
                <Link to="/" className='linkToHome'>Retour à l'accueil</Link>
            </div>
            <div className='mainProjectDetail'>
                <h2>{project.title}</h2>

                <div className="infosContainer">

                    <div className='photoLinkContainer'>

                        <CarouselProject images={project.imageCarousel} />

                    </div>

                    <div className="detailContainer">

                        <div className='objectifContainer'>
                            <h3>Objectif</h3>
                            <p>{project.objectif}</p>
                        </div>

                        <div className='stackContainer'>
                            <h3>Stack Technique</h3>
                            <ul>
                                {project.stack.map((elem, index) => <li key={index}>{elem}</li>)}
                            </ul>
                        </div>

                        <div className='linkSite'>
                            {project.visitSite.trim() !== '' && (
                                <a href={project.visitSite} target="_blank" rel="noopener noreferrer">
                                    Visiter le site
                                </a>
                            )}
                            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">Lien Github</a>
                        </div>
                        
                    </div>

                </div>

            </div>
            <div className="sectionContact">
                <hr />
                <IconContact />
            </div>
        </div>
    );
};

export default ProjectDetails;
