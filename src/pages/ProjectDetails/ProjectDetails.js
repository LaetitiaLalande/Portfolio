import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DataProjects } from '../../components/Data/DataProjects.js';
import "../ProjectDetails/ProjectDetails.scss";
import Footer from '../../components/Footer/Footer';
import Collapses from '../../components/Collapses/Collapses';
import CarouselProject from '../../components/Carousel/Carousel.js';

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
                        <CarouselProject images={project.imageCarousel}/>
                        <div className='linkSite'>
                            {project.visitSite.trim() !== '' && (
                                <a href={project.visitSite} target="_blank" rel="noopener noreferrer">
                                    Visiter le site
                                </a>
                            )}
                            <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">Lien Github</a>
                        </div>
                    </div>

                    <div className="collapseContainer">
                        <Collapses title="Objectif" objectif={project.objectif} >
                            <p>{project.objectif}</p>
                        </ Collapses>
                        <Collapses title="Stack Technique">
                            <ul>
                                {project.stack.map((elem, index) => <li key={index}>{elem}</li>)}
                            </ul>
                        </ Collapses>
                    </div>

                </div>

            </div>
            <div id="sectionContact">
                <Footer />
            </div>
        </div>
    );
};

export default ProjectDetails;
