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

    return (
        <img
            ref={imageRef}
            src={src}
            alt={alt}
            className={`img ${isInView ? 'in-view' : ''}`}
        />
    );
};

export default ImageComponent;
