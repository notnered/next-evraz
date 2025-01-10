'use client';
// REACT & REACT LIBS
import { useState } from 'react';
import { FaXmark } from 'react-icons/fa6';
// COMPONENTS
import MainButton from '../Buttons/MainButton';



export default function AddNewsModal(props){
    const [newsTitle, setNewsTitle] = useState('');
    const [newsMessage, setNewsMessage] = useState('');

    console.log(newsTitle, newsMessage);

    async function createNews(){
        const result = await fetch('/api/news/', {
            method: 'POST',
            body: JSON.stringify({
                title: newsTitle,
                text: newsMessage
            }),
        })
        props.toggleFunc();
    }

    return (
        <div className="bg-black/25 fixed flex h-full w-full top-0 left-0 px-4 z-20" onClick={props.toggleFunc}>
            <div className="bg-white flex flex-col w-full h-fit modalWindow my-auto max-h-[700px] mx-auto max-w-[600px] overflow-y-scroll lg:overflow-y-hidden rounded-sm z-30" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col px-8 py-4 h-full relative gap-y-2">
                    <div className="absolute top-4 right-4">
                        <span onClick={props.toggleFunc} className="cursor-pointer text-2xl transition-colors durataion-200 hover:text-[--orange-color]">
                            <FaXmark />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-medium text-2xl">Добавление новости</h1>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Тема новости
                            <input onChange={(e) => setNewsTitle(e.target.value)} type="text" className="px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-[--border-color] text-lg" required/>
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Текст новости
                            <textarea onChange={(e) => setNewsMessage(e.target.value)} rows={5} type="text" className="resize-none px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-[--border-color] text-lg" required/>
                        </label>
                    </div>
                    <div className="py-2">
                        <MainButton text={'Добавить новость'} full={true} func={createNews}/>
                    </div>
                </div>
            </div>
        </div>
    )
}