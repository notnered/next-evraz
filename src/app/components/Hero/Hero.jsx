'use client';
// REACT & REACT LIBS
import { useEffect, useState } from 'react';
// STATIC
// import hero from '../../../../public/hero/hero.jpg';
import slide0 from '../../../../public/hero/heroSlides/slide0.jpg';
import slide1 from '../../../../public/hero/heroSlides/slide1.jpg';
import slide2 from '../../../../public/hero/heroSlides/slide2.jpg';
// COMPONENTS
import HeroBlock from './HeroBlock';
import HeroSlider from './HeroSlider';

export default function Hero(){
    const [slide, setSlide] = useState(0);

    function nextSlide(){
        setTimeout(() => {
            slide === 2 ? setSlide(0) : setSlide(slide + 1);
        }, 100);
    }

    function prevSlide(){
        setTimeout(() => {
            slide === 0 ? setSlide(2) : setSlide(slide - 1);
        }, 100);
    }

    const slides = [slide0, slide1, slide2];

    return (
        <header key={'hero-slider'} style={{backgroundImage: `url(${slides[slide].src})`}} className={'flex h-[30rem] relative heroBG w-full px-4 transition-[background-image] duration-300'}>
            <div className='flex flex-col md:flex-row justify-end md:justify-between gap-y-4 items-center md:items-end my-auto h-[85%] w-full'>
                <HeroBlock slideCount={slide} />
                <HeroSlider nextSlide={nextSlide} prevSlide={prevSlide} slideCount={slide} />
            </div>
        </header>
    )
}