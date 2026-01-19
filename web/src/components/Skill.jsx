import React from 'react';
import "../scss/components/Skill.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs, faMicrosoft, faPython, faJava, faUnity, faGithubAlt, faVuejs, faAws, faDocker } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faServer } from '@fortawesome/free-solid-svg-icons';

function Skill({ name, icons }) {
    // Mapeo de los íconos de FontAwesome
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
        faVuejs,
        faAws,
        faDocker,
    };

    // Verifica si el ícono es de FontAwesome o una imagen
    const isFontAwesomeIcon = iconMap.hasOwnProperty(icons);

    return (
        <div className='skillStyle'>
            <div className='iconBrand'>
                {isFontAwesomeIcon ? (
                    <FontAwesomeIcon icon={iconMap[icons]} className="fa-icon" />
                ) : (
                    <img src={icons} alt={name} className="customIcon" />
                )}
            </div>
            <div className='nameBar'>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default Skill;
