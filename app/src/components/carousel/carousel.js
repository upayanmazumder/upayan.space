import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
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
                    <Image
                        src={carouselData[currentIndex].imagePath}
                        alt={carouselData[currentIndex].name}
                        width={60}
                        height={60}
                        loading="lazy"
                    />
                    <div>
                        <h4 style={{ color: carouselData[currentIndex].color }}>{carouselData[currentIndex].name}</h4>
                        <p>{carouselData[currentIndex].description}</p>
                        <a href={carouselData[currentIndex].link} target='_blank' rel="noopener noreferrer">Learn More</a>
                    </div>
                </div>
            )}
            <div>
                <button onClick={prevSlide}><IoIosArrowBack /></button>
                <button onClick={nextSlide}><IoIosArrowForward /></button>
            </div>
        </div>
    );
};

export default Carousel;