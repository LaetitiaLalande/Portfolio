import React from 'react';
import "../About/About.scss";
import Selfie from "../../assets/images/selfie.jpg";

const About = () => {
    const pdfUrl = '../CV.pdf'

    return (
        <div className="aboutContainer">
            <h2 className="overlinedTitle">A propos de moi</h2>
            <div className="about">
                <div className="aboutText">
                    <p>
                        Après 10 ans en tant que collaboratrice d'agence en assurances , je suis actuellement en reconversion professionelle.
                        Suite à une formation en développement Web chez OpenClassrooms, où j'ai pu acquérir les bases et les concepts fondamentaux des langages de programmation, je suis maintenant à la recherche d'une alternance.
                    </p>
                    <a href={pdfUrl} download="document.pdf">Téléchargez mon CV</a>
                </div>
                <div className="aboutImage">
                    <img src={Selfie} className="profilImage" alt="selfie Laetitia Lalande" />
                </div>
            </div>

        </div>
    )
}

export default About;