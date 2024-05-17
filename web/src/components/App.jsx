import React from "react";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faItchIo } from '@fortawesome/free-brands-svg-icons';
import { faCube, faMusic, faPalette, faBook, faGamepad } from '@fortawesome/free-solid-svg-icons';


import Header from "./Header";
import Project from "./Project";
import Skill from "./Skill";
import "../scss/App.scss";

import skills from '../data/skills.json';
import projects from '../data/webProjects.json';



function App() {

  const [selectedCategory, setSelectedCategory] = useState('web');
  const filteredProjects = projects.filter(project =>
    selectedCategory === 'web' ? project.category === 'web' : project.category === 'videogame'
  );

  return (
    <>

      <script src="https://kit.fontawesome.com/81f7d3236c.js" crossOrigin="anonymous"></script>

      <Header />
      <body>
        <section className="Introduction">
          <ul className="social">
            <li><a href="https://github.com/AlbaM9" target="_blank"><FontAwesomeIcon icon={faGithubAlt} className="icons" /></a></li>
            <li><a href="https://albam9.itch.io" target="_blank"><FontAwesomeIcon icon={faItchIo} className="icons" /></a></li>
            <li><a href="https://www.linkedin.com/in/albam9/" target="_blank"><FontAwesomeIcon icon={faLinkedinIn} className="icons" /></a></li>
            <li className="label followMelabel">FOLLOW ME</li>

          </ul>
          <div className="intro">
            <h3>Hello, I am</h3>
            <h1>Alba Melchor Gómez</h1>
            <h2>Full Stack Developer</h2>
            <div className="xtra">
              <ul>
                <li className="iAm">Web Developer</li>
                <li className="iAm">Unity Videogame Developer</li>
              </ul>
            </div>
            <div>
              <a href="" download="Alba_Melchor_Gomez_CV.pdf">GET CV</a>
              <a href="mailto:albamelchorgomez@gmail.com" className="contactBtn">CONTACT ME</a>

            </div>
          </div>

        </section>
        <section className="About">
          <p>
            I am a passionate web developer with experience in technologies like React and Node.js. I am currently seeking new opportunities that allow me to continue learning and growing in this ever-evolving sector. I am committed to contributing my energy and creativity to challenging projects while continuing to expand my technical skills and adapting to an environment that fosters innovation and excellence.</p>
          <img
            src="https://content.nationalgeographic.com.es/medio/2023/11/29/golden-retriever-corriendo_7a50f15e_231129131211_800x800.jpg"

            alt="me"
          />
          <span className="label">ABOUT ME</span>

        </section>

        <section className="Passions">
          <span className="label">PASSIONS</span>
          <div className="containerPass">
            <div>
              <span><FontAwesomeIcon icon={faCube} className="passIcons1" /></span>
              <h2>3D Printing and Modeling</h2>
            </div>
            <div>
              <span><FontAwesomeIcon icon={faMusic} className="passIcons" /></span>
              <h2>Music</h2>
            </div>
            <div>
              <span><FontAwesomeIcon icon={faPalette} className="passIcons1" /></span>
              <h2>Art</h2>
            </div>
            <div>
              <span><FontAwesomeIcon icon={faGamepad} className="passIcons" /></span>
              <h2>Videogames</h2>
            </div>
            <div>
              <span><FontAwesomeIcon icon={faBook} className="passIcons1" /></span>
              <h2>Reading</h2>
            </div>
          </div>

        </section>
        <section className="Skills">
          <div className="container">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                percentage={skill.percentage}
              />
            ))}
          </div>
          <span className="label">SKILLS</span>
        </section>

        <section className="Portfolio">
          <span className="label">PORTFOLIO</span>



          <div className="projContainer">

            <div className="projMenu">
              <span className={`projBtn ${selectedCategory === 'web' ? 'active' : ''}`} onClick={() => setSelectedCategory('web')}>WEB</span>
              <span className={`projBtn ${selectedCategory === 'videogame' ? 'active' : ''}`} onClick={() => setSelectedCategory('videogame')}>VIDEOGAMES</span>
            </div>
            <div className="web">

              <div className="projects">
                {filteredProjects.map((project, index) => (
                  <Project
                    key={index}
                    name={project.name}
                    description={project.description}
                    github={project.github}
                    image={project.image}
                    link={project.link}
                    techs={project.techs}
                  />
                ))}

              </div>
            </div>
          </div>


        </section>
        <section className="Contact">


        </section>
      </body >

    </>
  )

}

export default App;
