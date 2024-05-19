import React from "react";
import { useState } from 'react';
import "../scss/components/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';



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
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                    <li>
                        {/*subir a drive el curri y adjuntar el el enlace para descargar el cv*/}
                        <a href="" download="Alba_Melchor_Gomez_CV.pdf">
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