'use client';
import { FaAngleUp } from "react-icons/fa6";
import { useState } from 'react';

export default function BackUpBtn(){
    // const [smoothScroll, setSmoothScroll] = useState(false);

    function headToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }


    return (
        <button onClick={headToTop} className="border-[1px] border-[--border-color] p-4 rounded-full">
            <FaAngleUp style={{fontSize: '1.375rem'}} />
        </button>
    )
}