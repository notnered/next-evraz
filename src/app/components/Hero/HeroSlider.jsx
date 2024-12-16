'use client'
import { useState } from 'react';

export default function HeroSlider(){
    const [slide, setSlide] = useState(0);

    function nextSlide(){
        slide === 2 ? setSlide(0) : setSlide(slide + 1); 
    }

    function prevSlide(){
        slide === 0 ? setSlide(2) : setSlide(slide - 1);
    }

    return (
        <>
        <button onClick={prevSlide} className='size-12 bg-red-500'>
        -
        </button>
        <span>{slide}</span>
        <button onClick={nextSlide} className='size-12 bg-orange-500'>
        +
        </button>
        </>
    )
}