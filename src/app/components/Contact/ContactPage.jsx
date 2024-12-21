'use client';
// REACT & REACT LIBS
import { useState } from 'react';
// COMPONENTS
import ContactHeader from "./ContactHeader";
import ContactContent from './ContactContent';
import GeneralContact from './Pages/GeneralContact';
import BuyersContact from './Pages/BuyersContact';
import PartnersContact from './Pages/PartnersContact';
import MediaContact from './Pages/MediaContact';
import ApplicationContact from './Pages/ApplicationContact';

export default function ContactPage(){

    const [page, setPage] = useState(2);

    function handlePage(event){
        let index = parseInt(event.target.value);
        setPage(index);
    }

    let componentID = 1;

    const ComponentsArray = [
        <GeneralContact key={componentID++} />,
        <BuyersContact key={componentID++} />,
        <PartnersContact key={componentID++} />,
        <MediaContact key={componentID++} />,
        <ApplicationContact key={componentID++} />,
    ]

    return (
        <div className="my-8 flex px-4">
            <div className="flex flex-col w-full">
                <ContactHeader currentPage={page} handlePage={handlePage} />
                <ContactContent currentPage={page}>
                    {ComponentsArray[page]}
                </ContactContent>
            </div>
        </div>
    )
}