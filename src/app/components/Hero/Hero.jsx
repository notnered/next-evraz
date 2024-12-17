'use client';
import { useEffect, useState } from 'react';
// import hero from '../../../../public/hero/hero.jpg';
import slide0 from '../../../../public/hero/heroSlides/slide0.jpg';
import slide1 from '../../../../public/hero/heroSlides/slide1.jpg';
import slide2 from '../../../../public/hero/heroSlides/slide2.jpg';
import HeroBlock from './HeroBlock';
import HeroSlider from './HeroSlider';

export default function Hero(){
    const [slide, setSlide] = useState(0);

    function nextSlide(){
        slide === 2 ? setSlide(0) : setSlide(slide + 1); 
    }

    function prevSlide(){
        slide === 0 ? setSlide(2) : setSlide(slide - 1);
    }

    const slides = [slide0, slide1, slide2];

    return (
        <header key={'hero-slider'} style={{backgroundImage: `url(${slides[slide].src})`}} className={'flex h-[30rem] relative heroBG w-full px-4 transition-[background-image] duration-300'}>
            <div className='flex flex-row justify-between items-end my-auto h-[80%] w-full'>
                <HeroBlock slideCount={slide} />
                <HeroSlider nextSlide={nextSlide} prevSlide={prevSlide} slideCount={slide} />
            </div>
        </header>
    )
}