import React, { useEffect, useRef, useState } from 'react';


const ImageComponent = ({ src, alt }) => {
    const [isInView, setIsInView] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                } else {
                    setIsInView(false);
                }
            });
        });

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => {
            if (imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, []);

    // Asegurar que las rutas de imágenes usen el base URL correcto
    const imageSrc = src.startsWith('/') 
        ? `${import.meta.env.BASE_URL}${src.slice(1)}` 
        : src;

    return (
        <img
            ref={imageRef}
            src={imageSrc}
            alt={alt}
            className={`img ${isInView ? 'in-view' : ''}`}
        />
    );
};

export default ImageComponent;
