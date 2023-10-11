import React, { useState, useEffect, useRef } from 'react';
import passwordRandomizer from '../assets/images/aedelfrid.github.io_password-randomizer_.png';
import notesAreUseful from '../assets/images/notesareus-396f1cddb53f.herokuapp.com_.png';
import bookFindr from '../assets/images/module-21-bookfindr-9d888a7b3f3f.herokuapp.com_.png';
import codr from '../assets/images/unb-codr-500c225d9d71.herokuapp.com_.png';

export default function Carousel() {

    const carouselImages = [
        'https://github.com/aedelfrid/SeorchLight/raw/main/assets/README/scrnshot.png',
        'https://github.com/aedelfrid/alexander-mckinnon-portfolio/blob/main/assets/img/portfolio-desktop.png?raw=true',
        'https://github.com/aedelfrid/jubilant-js-quiz-show/raw/main/assets/images/begin.png',
        'https://github.com/aedelfrid/event-scheduler/raw/main/assets/images/aedelfrid.github.io_event-scheduler_.png',
        'https://github.com/aedelfrid/Huzzah-Music/raw/main/assets/images/Screenshots/ScreenshotBasic.png',
        'https://github.com/aedelfrid/WeatherSpot/raw/main/assets/images/WeatherSpot-default.png',
    ];

    const [getCarouselImg, setCarouselImg] = useState(carouselImages[0]);

    useEffect(() => {
        let i=0;
        const interval = setInterval(() => {
            ++i; 
            setCarouselImg(carouselImages[i]); 
            if(i >= carouselImages.length - 1) i = 0;
        }, 3000);
        return () => clearInterval(interval);
    },[])

    return (
        <img src={getCarouselImg} alt="carousel" />
    );
}