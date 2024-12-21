// REACT & REACT LIBS
import Link from 'next/link';
import { FaRegMessage, FaPhone } from 'react-icons/fa6';
import { FaExternalLinkAlt } from "react-icons/fa";
// COMPONENTs
import EvrazLine from "../../Branding/EvrazLine";

export default function MediaContact(){
    return (
        <div className="w-full">
            <div className="py-4">
                <h1 className="text-3xl font-semibold">
                    Информация для СМИ
                </h1>
            </div>
            <div className="py-4">
                <div className="grid grid-cols-1 grid-flow-row gap-y-4 lg:grid-cols-3 gap-x-4">

                    <div className="border-[1px] relative border-[--border-color] p-4 xl:p-8">
                        <div className="flex gap-x-2 items-center py-2">
                            <span className='absolute left-0'><EvrazLine className="absolute" /></span>
                            <h2 className="text-2xl font-semibold">Электронный адрес</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <span className='flex items-center text-gray-700'>
                                <FaRegMessage className='mr-2 text-gray-500 hidden sm:flex' />
                                E-mail:
                            </span>
                            <a href="mailto:media@evraz.com" className='md:ml-2 underline hover:no-underline text-black'>
                                media@evraz.com
                            </a>
                        </div>
                    </div>

                    <div className="border-[1px] relative border-[--border-color] p-4 xl:p-8">
                        <div className="flex gap-x-2 items-center py-2">
                            <span className='absolute left-0'><EvrazLine className="absolute" /></span>
                            <h2 className="text-2xl font-semibold">Телефон</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <span className='flex items-center text-gray-700'>
                                <FaPhone className='mr-2 text-gray-500 hidden sm:flex' />
                                Москва:
                            </span>
                            <a href="tel:+74959376871" className='md:ml-2 underline hover:no-underline text-black'>
                                +7 (495) 937-68-71
                            </a>
                        </div>
                    </div>

                    <div className="border-[1px] relative border-[--border-color] p-4 xl:p-8">
                        <div className="flex gap-x-2 items-center py-2">
                            <span className='absolute left-0'><EvrazLine className="absolute" /></span>
                            <h2 className="text-2xl font-semibold">Новостной блок</h2>
                        </div>
                        <div className="flex flex-col sm:flex-row">
                            <span className='flex items-center text-gray-700'>
                                <FaExternalLinkAlt className='mr-2 text-gray-500 hidden sm:flex' />
                                Блок:
                            </span>
                            <Link href="/news" className='md:ml-2 underline hover:no-underline text-black'>
                                Новостной блок
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}