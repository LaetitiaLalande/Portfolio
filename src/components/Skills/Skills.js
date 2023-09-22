import "../Skills/Skills.scss";
import React from 'react';
import { DataSkills } from "../Data/DataSkills.js"
import SkillModal from '../SkillModal/SkillModal.js';

const Skills = () => {

    return (
        <div className="skillsContainer">
           
            <div className='titleContainer'>
                <h2>Mes Compétences</h2>
            </div>

            <div className="skillsGallery">
               
                {DataSkills.map((skill) => (
                    <SkillModal key={skill.id} title={skill.title} icons={skill.icon} name={skill.name} description={skill.description} />
                ))}
                
            </div>
        </div>
    );
};

export default Skills;
