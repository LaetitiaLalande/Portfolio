import React from 'react';
import "../Skills/Skills.scss";
import { FaReact, FaHtml5, FaCss3, FaJs, FaNodeJs, FaDatabase } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className="skillsContainer">
            <h2>Compétences</h2>
            <div className="skills">
                <div className="skillCard html">
                <FaHtml5 className='iconSkill'/>
                    <p>HTML</p>
                </div>
                <div className="skillCard css">
                <FaCss3 className='iconSkill'/>
                    <p>CSS</p>
                </div>
                <div className="skillCard js">
                <FaJs className='iconSkill'/>
                    <p>JavaScript</p>
                </div>
                <div className="skillCard react">
                <FaReact className='iconSkill'/>
                    <p>React</p>
                </div>
                <div className="skillCard node">
                <FaNodeJs className='iconSkill'/>
                    <p>NodeJS</p>
                </div>
                <div className="skillCard mongoDB">
                <FaDatabase className='iconSkill'/>
                    <p>MongoDB</p>
                </div>
            </div>
        </div>
    )
}


export default Skills;