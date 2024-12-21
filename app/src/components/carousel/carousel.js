import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from 'next/image';
import carouselStyles from './carousel.module.css';

const carouselData = [
    {
        color: "#ee922c",
        imagePath: "/services/bbn.png",
        name: "BBN",
        description: "Need a music distro? We have you covered!",
        link: "https://bbn.one"
    },
    {
        color: "#941b34",
        imagePath: "/services/eranodes.png",
        name: "EraNodes",
        description: "Need a freemium hosting service? We got you covered!",
        link: "https://eranodes.com"
    }
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <div id="services" class={carouselStyles.services}>
            {carouselData.length > 0 && (
                <div class={carouselStyles.card}>
                    <a href={carouselData[currentIndex].link} target='_blank' rel="noopener noreferrer">
                        <Image
                            src={carouselData[currentIndex].imagePath}
                            alt={carouselData[currentIndex].name}
                            width={60}
                            height={60}
                            loading="lazy"
                        />
                    </a>
                    <div class={carouselStyles.content}>
                        <h4 style={{ color: carouselData[currentIndex].color }}>{carouselData[currentIndex].name}<a href={carouselData[currentIndex].link} target='_blank' rel="noopener noreferrer"><FaExternalLinkAlt /></a></h4>
                        <p>{carouselData[currentIndex].description}</p>

                    </div>
                </div>
            )}
            <div class={carouselStyles.controls}>
                <button onClick={prevSlide}><IoIosArrowBack /></button>
                <button onClick={nextSlide}><IoIosArrowForward /></button>
            </div>
        </div>
    );
};

export default Carousel;