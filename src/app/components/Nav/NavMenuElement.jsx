'use client'
import { useState } from 'react'
import Link from "next/link"
import { FaAngleDown } from 'react-icons/fa6'

const productionCatalog = [
    {id: 1, name: 'Строительная продукция'},
    {id: 2, name: 'Железнодорожная продукция'},
    {id: 3, name: 'Листовой и плоский прокат'},
    {id: 4, name: 'Трубная продукция'},
    {id: 5, name: 'Специальные материалы'},
]

export default function NavmMenuElement(props){
    const [dropmenu, setDropmenu] = useState(true)

    function openDropmenu(){
        setDropmenu(!dropmenu);
    }

    return (
        <li className="font-semibold capitalize relative h-full my-auto items-center flex">
            {props.dropdown 
            ? (
                <>
                    <span onClick={openDropmenu} className='flex cursor-pointer select-none h-full items-center'>
                        {props.title}
                        <FaAngleDown className="mt-1.5 ml-0.5 text-orange-500" /> 
                    </span>
                    {dropmenu ? (
                        <div className='absolute bg-orange-500 top-[78px] -left-[60%] p-1.5 rounded-sm text-white w-56'>
                            <ul className=''>
                                {productionCatalog.map((item) => {
                                    return (
                                        <li key={item.id}>
                                            <Link href='#'>{item.name}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    ) : null}
                </>
            )
            : (
                <Link href={props.link} className='flex items-center'>
                    {props.title}
                </Link>
            )}
         </li>
    )
}