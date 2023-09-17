import React from 'react';
import "../Home/Home.scss";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Intro from '../../components/Intro/Intro';
import About from '../../components/About/About';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='mainHome'>
                <section className='sectionIntro'>
                    <Intro />
                </section>
                <section id="sectionAbout">
                    <About />
                </section>
                <section id="sectionPortfolio">
                    <Projects />
                </section>
                <section id="sectionSkills">
                    <Skills />
                </section>
            </div>
            <div id="sectionContact">
                <Footer />
            </div>
        </div>
    );
};

export default Home;