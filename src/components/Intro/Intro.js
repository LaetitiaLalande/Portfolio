import React from 'react';
import "../Intro/Intro.scss";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Intro = () => {
    return (
        <div className="introContainer">
            <div className="introText">
                <h1>Bonjour <span className="handEmojiContainer"><div className="handEmoji">👋</div></span> , je suis Laëtitia Lalande </h1>
                <p>
                    Et voici mon Portfolio de Développeuse Web Junior
                </p>
                <div className="socialIcons">
                    <a href="https://github.com/LaetitiaLalande" target="_blank" rel="noopener noreferrer">
                        <FaGithub className='iconGithub' />
                    </a>
                    <a href="https://www.linkedin.com/in/laetitia-lalande-6a60a9259" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <hr className='hrIntro' />
            </div>
        </div>
    )
}

export default Intro;