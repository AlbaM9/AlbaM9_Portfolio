import React from 'react';
import '../scss/components/BackgroundImage.scss';

const BackgroundImage = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const desktopImage = `${baseUrl}images/galaxia_apaisado.png`;
    const mobileImage = `${baseUrl}images/galaxia.png`;

    const styles = {
        '--desktop-bg': `url('${desktopImage}')`,
        '--mobile-bg': `url('${mobileImage}')`
    };

    return (
        <div 
            className="background-galaxy"
            style={styles}
        >
            <div className="background-overlay"></div>
        </div>
    );
};

export default BackgroundImage;
