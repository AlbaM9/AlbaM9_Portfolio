import React from 'react'
import "../scss/components/Project.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Project({ name, description, github, image, link, techs }) {
    return (
        <section className='projectCard'>
            <img className='img' src={image} />
            <h2 className='title'> {name}</h2>
            <p className='desc'>{description}</p>
            <span className='links'>
                <a href={github} target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="icons" /></a>
                {link !== " " && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGlobe} className="icons" />
                    </a>
                )}

            </span>
            <span className='techs'>{techs}<a></a></span>



        </section>
    )
}

export default Project