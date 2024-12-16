'use client'
import { useState } from 'react'
import Link from "next/link"
import { FaAngleDown } from 'react-icons/fa6'

export default function NavmMenuElement(props){
    const [dropdown, setDropdown] = useState(false)

    function openDropdown(){
        setDropdown(!dropdown);
    }

    return (
        <li className="font-semibold capitalize">
            {props.dropdown 
            ? (
                <span onClick={openDropdown} className='flex cursor-pointer'>
                    {props.title}
                    <FaAngleDown className="mt-1.5 ml-0.5 text-orange-500" /> 
                </span>
            )
            : (
                <Link href={props.link} className='flex'>
                    {props.title}
                </Link>
            )}
         </li>
    )
}