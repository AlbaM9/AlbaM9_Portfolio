import React from "react";
import { useState, useEffect } from 'react';
import "../scss/components/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';



function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const controlNavbar = () => {
            if (window.pageYOffset === 0) {
                setHeaderVisible(true);
            } else if (window.pageYOffset > lastScrollY) {
                setHeaderVisible(false);
            } else {
                setHeaderVisible(true);
            }
            lastScrollY = window.pageYOffset;
        };

        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, []);

    return (
        <header className={headerVisible ? 'visible' : 'hidden'}>
            <nav className="header">
                <div><FontAwesomeIcon icon={faFont} className="logo" /></div>
                <ul className={`navMenu ${menuOpen ? 'active' : ''}`}>
                    <li><Link to="about" smooth={true} duration={500} offset={-150} onClick={handleMenuClose}>ABOUT</Link></li>
                    <li><Link to="skills" smooth={true} duration={500} offset={-150} onClick={handleMenuClose}>SKILLS</Link></li>
                    <li><Link to="portfolio" smooth={true} duration={500} offset={-150} onClick={handleMenuClose}>PORTFOLIO</Link></li>
                    <li><Link to="contact" smooth={true} duration={500} offset={-150} onClick={handleMenuClose}>CONTACT</Link></li>
                    <li>
                        <a className="btn" href="https://drive.google.com/uc?export=download&id=1o1ICCCv1yddJP2pVmRUeSdfjMQJ6PXHM" download="Alba_Melchor_Gomez_CV.pdf" onClick={handleMenuClose}>
                            CV
                        </a>
                    </li>
                </ul>
                <div className="hamburger" onClick={handleMenuToggle}>
                    <span className="hams"></span>
                    <span className="hams"></span>
                    <span className="hams"></span>
                </div>
            </nav>
        </header>
    );
}



export default Header