import React from 'react';
import "../Intro/Intro.scss";
import Selfie from "../../assets/images/selfie.jpg";

const Intro = () => {
    return (
        <div className="introContainer">
            <div className="introText">
                <h1>Salut, je suis Laëtitia Lalande 👋</h1>
                <p>
                    Et voici mon Portfolio de Développeuse Web Junior
                </p>
                <div className="social-icons">
                    <a
                        href="https://twitter.com/olawanle_joel"
                        aria-label="Twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a
                        href="https://github.com/olawanlejoel"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/olawanlejoel/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Intro;