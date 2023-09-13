import React from 'react';
import "../About/About.scss";
import Selfie from "../../assets/images/selfie.jpg";

const About = () => {
    return (
        <div className="aboutContainer">
            <h2>A propos de moi</h2>
            <div className="about">
                <div className="aboutText">
                    <p>
                        Après 10 ans en tant que collaboratrice d'agence en assurances , je suis actuellement en reconversion professionelle.
                        Suite à une formation en développement Web chez OpenClassrooms, où j'ai pu acquérir de nombreuses compétences, je suis maintenant à la recherche d'une alternance.
                        N'hésitez pas à me contacter.
                    </p>
                </div>
                <div className="aboutImage">
                <img src={Selfie} className="profilImage" alt="selfie Laetitia Lalande" />
                </div>
            </div>
        </div>
    )
}

export default About;