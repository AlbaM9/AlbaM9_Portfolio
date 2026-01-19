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
    
    // Asegurar que las rutas de imágenes usen el base URL correcto
    const imageSrc = !isFontAwesomeIcon && icons && icons.startsWith('/')
        ? `${import.meta.env.BASE_URL}${icons.slice(1)}`
        : icons;

    return (
        <div className='skillStyle'>
            <div className='iconBrand'>
                {isFontAwesomeIcon ? (
                    <FontAwesomeIcon icon={iconMap[icons]} className="fa-icon" />
                ) : (
                    <img src={imageSrc} alt={name} className="customIcon" />
                )}
            </div>
            <div className='nameBar'>
                <span>{name}</span>
            </div>
        </div>
    );
}

export default Skill;
