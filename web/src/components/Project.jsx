import React from 'react'
import "../scss/components/Project.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

function Project() {
    return (
        <section className='projectCard'>
            <img className='img' src='./src/images/logo-landing-Bg7Hes1v.jpg' />
            <h2 className='title'> Mi proyecto 1</h2>
            <p className='desc'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio quaerat, atque ex dicta tenetur</p>
            <span className='links'>
                <a href="https://github.com/AlbaM9" target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="icons" /></a>
                <a href="https://github.com/AlbaM9" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icons" /></a>

            </span>
            <span className='techs'>React.js | Express.js | MySQL<a></a></span>



        </section>
    )
}

export default Project