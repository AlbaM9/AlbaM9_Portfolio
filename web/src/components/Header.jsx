import React from "react";
import { useState } from 'react';
import "../scss/components/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';



function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <header>
            <nav className="header">
                <div><FontAwesomeIcon icon={faFont} className="logo" /></div>
                <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="about" smooth={true} duration={500}>ABOUT</Link></li>
                    <li><Link to="skills" smooth={true} duration={500}>SKILLS</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={500}>PORTFOLIO</Link></li>
                    <li><Link to="contact" smooth={true} duration={500}>CONTACT</Link></li>
                    <li >
                        {/*subir a drive el curri y adjuntar el el enlace para descargar el cv*/}

                        <a className="btn" href="https://drive.google.com/uc?export=download&id=1o1ICCCv1yddJP2pVmRUeSdfjMQJ6PXHM" download="Alba_Melchor_Gomez_CV.pdf">
                            CV </a>
                    </li>
                </ul>

                <div className="hamburger" onClick={handleMenuToggle}>
                    <span className="hams"></span>
                    <span className="hams"></span>
                    <span className="hams"></span>
                </div>
            </nav>
        </header >
    )
}

export default Header