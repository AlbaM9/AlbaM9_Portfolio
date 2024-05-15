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



function App() {
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
            <li className="label">FOLLOW ME</li>

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
              <button>GET CV</button>
              <button className="contactBtn">CONTACT ME</button>
            </div>
          </div>

        </section>
        <section className="About">
          <p>
            I am a passionate web developer with experience in technologies like React and Node.js. I am currently seeking new opportunities that allow me to continue learning and growing in this ever-evolving sector. I am committed to contributing my energy and creativity to challenging projects while continuing to expand my technical skills and adapting to an environment that fosters innovation and excellence.</p>
          <img src="https://content.nationalgeographic.com.es/medio/2023/11/29/golden-retriever-corriendo_7a50f15e_231129131211_800x800.jpg" alt="me" />
          <span className="label">ABOUT ME</span>

        </section>
        <section className="Passions">
          <span className="label">PASSIONS</span>
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


        </section>
        <section className="Skills">
          <div className="container">
            <Skill />
            <Skill />
          </div>
          <span className="label">SKILLS</span>
        </section>

        <section className="Portfolio">

          <span className="label">PORTFOLIO</span>
          <div className="web">

            <div className="projects">
              <Project />
              <Project />
              <Project />
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
