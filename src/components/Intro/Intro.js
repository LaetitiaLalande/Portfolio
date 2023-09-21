import React from 'react';
import "../Intro/Intro.scss";
import IconContact from '../IconContact/IconContact';

const Intro = () => {
    return (
        <div className="introContainer">
            <div className="introText">
                <h1>Bonjour <span className="handEmojiContainer"><div className="handEmoji">👋</div></span> , <span>je suis Laëtitia Lalande </span></h1>
                <p>
                    Et voici mon Portfolio de <span>Développeuse Web Junior</span>
                </p>
                <IconContact />
                <hr className='hrIntro' />
            </div>
        </div>
    )
}

export default Intro;