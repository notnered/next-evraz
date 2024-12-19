'use client'
// REACT & REACT LIBS
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa6'
import Link from "next/link"
// DATA
export const productionCatalog = [
    {id: 1, name: 'Строительная продукция'},
    {id: 2, name: 'Железнодорожная продукция'},
    {id: 3, name: 'Листовой и плоский прокат'},
    {id: 4, name: 'Трубная продукция'},
    {id: 5, name: 'Специальные материалы'},
]

export default function NavMenuElement(props){
    const [dropmenu, setDropmenu] = useState(false);

    function openDropmenu(){
        setDropmenu(!dropmenu);
    }

    return (
        <li className="font-semibold capitalize relative h-full my-auto items-center flex">
            {props.dropdown 
            ? (
                <>
                    <span onClick={openDropmenu} className='flex cursor-pointer select-none h-full items-center text-black transition-colors duration-200 hover:text-gray-700'>
                        {props.title}
                        <FaAngleDown className="mt-1.5 ml-0.5 text-[--orange-color]" /> 
                    </span>
                    {dropmenu ? (
                        <div className='absolute catalogDrop bg-[--orange-color] top-[4.5rem] -left-[60%] p-1.5 rounded-sm text-white w-56 z-50'>
                            <ul className='w-full flex flex-col'>
                                {productionCatalog.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <Link href='/catalog' className='transition-colors duration-200 hover:bg-[--orange-hover-color] px-1 rounded-sm block'>{item.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ) : null}
                </>
            )
            : (
                <Link href={props.link} className='flex items-center text-black transition-colors duration-200 hover:text-gray-700'>
                    {props.title}
                </Link>
            )}
         </li>
    )
}