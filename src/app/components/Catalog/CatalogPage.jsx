'use client';
// REACT & REACT LIBS
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { PulseLoader } from "react-spinners";
// COMPONENTs
import EvrazLine from "../Branding/EvrazLine";
import MainButton from "../Buttons/MainButton";
import ContactModal from "../Contact/ContactModal";
// DATA

export default function CatalogPage(props){
    const router = useRouter();

    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getCategories(){
            const response = await fetch('/api/category/');
            const data = await response.json();
            setCategory([...data])
        }

        getCategories();
        setTimeout(() => {
            setLoading(false);
        }, 350);
    }, [])

    console.log(category);

    const [modal, setModal] = useState(false);

    function switchModal(){
        setModal(!modal);
    }

    const placeholderCategory = Array.from(Array(5).keys());
    console.log('placeholder', placeholderCategory);

    return (
        <>
            <div>
                {modal ? (
                    <ContactModal closeFunc={switchModal}/>
                ) : null}
            </div>
            <div className="my-8 px-4 lg:px-2">
                <div className="flex justify-center pb-4">
                    <h1 className="font-semibold text-2xl">Категории продукции</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-4 lg:gap-y-8 lg:gap-x-8">

                {loading ? (
                    placeholderCategory.map((item, index) => {
                        return (
                            <div key={index} className='my-16 flex justify-center'>
                                <PulseLoader
                                    color='#F0862F'
                                    size={16}
                                    loading={loading}
                                />
                            </div>
                        )
                    })
                ) : (
                    category.map((item) => {
                        return (
                            <div key={item.id} className="border-[1px] border-[--border-color] px-4 pt-4 pb-4 relative flex flex-col">
                                <span className="absolute left-0"><EvrazLine /></span>
                                <h1 className="font-medium text-2xl pb-2">{item.title}</h1>
                                <div>
                                    <p className="line-clamp-[8]">{item.desc}</p>
                                </div>
                                <div className="mt-auto pt-2">
                                    <MainButton text={'Оставить заявку'} func={switchModal} />
                                </div>
                            </div>
                        )
                    })
                )}

                </div>
            </div>
        </>
    )
}