'use client';
// REACT & REACT LIBS
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { PulseLoader } from 'react-spinners';
// COMPONENTS
const DynamicGeneral = dynamic(() => import('./Pages/GeneralContact'))
const DynamicBuyers = dynamic(() => import('./Pages/BuyersContact'))
const DynamicPartners = dynamic(() => import('./Pages/PartnersContact'))
const DynamicMedia = dynamic(() => import('./Pages/MediaContact'))
const DynamicApplication = dynamic(() => import('./Pages/ApplicationContact'))

const ContactHeaderLazy = dynamic(() => import('./ContactHeader'));
const ContactLazy = dynamic(() => import('./ContactContent'), {
    loading: () => <div className='my-16 flex justify-center'>
        <PulseLoader color='#F0862F'size={16}/>
    </div>
});

export default function ContactPage(){

    const [page, setPage] = useState(0);

    function handlePage(event){
        let index = parseInt(event.target.value);
        setPage(index);
    }

    let componentID = 0;

    const ComponentsArray = [
        <DynamicGeneral key={componentID++} />,
        <DynamicBuyers key={componentID++} />,
        <DynamicPartners key={componentID++} />,
        <DynamicMedia key={componentID++} />,
        <DynamicApplication key={componentID++} />,
    ]

    return (
        <div className="my-8 flex px-4 lg:px-2">
            <div className="flex flex-col w-full">
                <ContactHeaderLazy currentPage={page} handlePage={handlePage} />
                <ContactLazy currentPage={page}>
                    {ComponentsArray[page]}
                </ContactLazy>
            </div>
        </div>
    )
}