'use client';
// REACT & REACT LIBS
import { FaAngleUp } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export default function BackUpBtn(){
    let scrollThreshold = 0;

    function headToTop(){
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    const [scrolledBy, setScrolledBy] = useState(0);
    const [showBtn, setShowBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrolledBy(window.scrollY);
            if (scrolledBy >= scrollThreshold){
                setShowBtn(true);
            } else {
                setShowBtn(false);
            }
        })
        const maxScroll = document.body.scrollHeight;
        scrollThreshold = (maxScroll * 0.5) / 2;
    })

    return (
        <>
            {scrolledBy > scrollThreshold && showBtn ? (
                <button onClick={headToTop} className="back-btn opacity-100 transition-[opacity] border-[1px] border-[--border-color] p-4 rounded-full fixed bottom-8 right-24">
                    <FaAngleUp style={{fontSize: '1.375rem'}} />
                </button>
            ): (
                <button onClick={headToTop} className="opacity-0 transition-[opacity] border-[1px] border-[--border-color] p-4 rounded-full fixed bottom-8 right-24">
                <FaAngleUp style={{fontSize: '1.375rem'}} />
            </button>
            )}
        </>
    )
}