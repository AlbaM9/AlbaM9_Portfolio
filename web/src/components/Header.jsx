import React from "react";
import "../scss/components/Header.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return (
        <header>
            <nav className="header">
                <div><FontAwesomeIcon icon={faFont} className="logo" /></div>
                <ul className="navMenu" >
                    <li>ABOUT</li>
                    <li>SKILLS</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT</li>
                    <li>
                        {/*subir a drive el curri y adjuntar el el enlace para descargar el cv*/}
                        <a href="" download="nombre_del_archivo.pdf">
                            CV </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header