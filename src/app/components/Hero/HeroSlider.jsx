import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"

export default function HeroSlider(props){

    const allSlides = [
        {index: 0, count: '01'},
        {index: 1, count: '02'},
        {index: 2, count: '03'},
    ];

    return (
        <div className='flex flex-col'>
            <div className="flex gap-x-2 pb-1">
                <button onClick={props.prevSlide} className='size-12 bg-white rounded-full flex items-center justify-center transition-[border] duration-75 hover:border-2 border-[--border-color]'>
                    <FaChevronLeft />
                </button>
                <button onClick={props.nextSlide} className='size-12 bg-white rounded-full flex items-center justify-center transition-[border] duration-75 hover:border-2 border-[--border-color]'>
                    <FaChevronRight />
                </button>
            </div>
            <div className="flex justify-center items-center gap-x-2">
                {allSlides.map((item) => {
                    return (
                        props.slideCount === item.index ? (
                            <div 
                            key={item.index} 
                            className='text-white font-medium border-b-[3px] transition-[border] duration-300 border-b-red-500'>
                                {item.count}
                            </div>
                        ) : (
                            <div 
                            key={item.index} 
                            className='text-white font-medium border-b-[3px] transition-[border] duration-300 border-b-gray-500'>
                                {item.count}
                            </div>
                        )
                    )
                })}
            </div>
        </div>
    )
}