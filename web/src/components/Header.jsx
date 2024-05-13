import React from "react";
import "../scss/components/Header.scss";

function Header() {
    return (
        <header>
            <nav className="header">
                <div>Icon</div>
                <ul className="navMenu" >
                    <li>About</li>
                    <li>Skill</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                    <li>
                        {/*subir a drive el curri y adjuntar el el enlace para descargar el cv*/}
                        <a href="" download="nombre_del_archivo.pdf">
                            Resume/CV </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header