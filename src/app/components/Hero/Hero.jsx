'use client';
// REACT & REACT LIBS
import { useState } from 'react';
// STATIC
import slide0 from '../../../../public/hero/heroSlides/slide0.jpg';
import slide1 from '../../../../public/hero/heroSlides/slide1.jpg';
import slide2 from '../../../../public/hero/heroSlides/slide2.jpg';
// COMPONENTS
import HeroBlock from './HeroBlock';
import HeroSlider from './HeroSlider';

export default function Hero(){
    // STATES
    const [slide, setSlide] = useState(0);
    const [slideSwap, setSlideSwap] = useState(false);
    const [btnPress, setBtnPress] = useState(false);

    let lineStyles = {
        height: '1rem',
    }

    function nextSlide(){
        if (btnPress){
            return;
        }
        setBtnPress(true);
        setSlideSwap(true);
        setTimeout(() => {
            slide === 2 ? setSlide(0) : setSlide(slide + 1);
        }, 100);
        setTimeout(() => {
            setSlideSwap(false);
            setBtnPress(false);
        }, 500)
    }

    function prevSlide(){
        if (btnPress){
            return;
        }
        setBtnPress(true);
        setSlideSwap(true);
        setTimeout(() => {
            slide === 0 ? setSlide(2) : setSlide(slide - 1);
        }, 100);
        setTimeout(() => {
            setSlideSwap(false);
            setBtnPress(false);
        }, 500)
    }

    const slides = [slide0, slide1, slide2];

    return (
        <header key={'hero-slider'} style={{backgroundImage: `url(${slides[slide].src})`}} className={'flex h-[30rem] relative heroBG w-full px-4 transition-[background-image] duration-300'}>
            <div className='flex flex-col md:flex-row justify-end md:justify-between gap-y-4 items-center md:items-end my-auto h-[85%] w-full'>
                <HeroBlock slideCount={slide} />
                <HeroSlider nextSlide={nextSlide} prevSlide={prevSlide} slideCount={slide} />
            </div>
            <div className='absolute flex items-end w-full bottom-0 left-0'>
                <div style={slideSwap ? lineStyles : {height: '0.5rem'}} className='w-full bg-[--yellow-color] h-2 transition-[height]'></div>
                <div style={slideSwap ? lineStyles : {height: '0.75rem'}} className='w-full bg-[--orange-color] h-3 transition-[height]'></div>
                <div className='w-full bg-[--red-color] h-4 transition-[height]'></div>
            </div>
        </header>
    )
}