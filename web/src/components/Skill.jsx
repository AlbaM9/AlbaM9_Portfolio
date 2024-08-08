import React from 'react'
import "../scss/components/Skill.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faMicrosoft, faPython, faJava, faUnity, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

function Skill({ name, icons }) {

    const iconMap = {
        faReact,
        faNodeJs,
        faJs,
        faDatabase,
        faServer,
        faMicrosoft,
        faPython,
        faJava,
        faUnity,
        faGithubAlt,
    };

    const icon = iconMap[icons];
    return (
        <div className='skillStyle'>
            <div className='iconBrand'>
                <FontAwesomeIcon icon={icon} />
            </div>
            <div className='nameBar'>
                <span>{name}</span>
                <div
                ></div>
            </div>

        </div>
    )
}

export default Skill