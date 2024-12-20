'use client';
// REACT & REACT LIBS
import Link from 'next/link';
import { FaBars, FaAngleDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
// COMPONENTS
import NavMenuElement from './NavMenuElement';
import Logo from '../Branding/Logo';
import FooterSocials from '../Footer/FooterSocials';
import NavMenuCatalog from './NavMenuCatalog';

export default function NavBar(){

    const [winWidth, setWinWidth] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [expandCatalog, setExpandCatalog] = useState(false);

    function toggleMenu(){
        setMobileMenu(!mobileMenu);
        setExpandCatalog(false);
    }

    function expandMobCatalog(){
        setExpandCatalog(!expandCatalog);
    }

    useEffect(() => {
        document.addEventListener('DOMContentLoaded', () => {
            setWinWidth(window.innerWidth);
        })

        window.addEventListener('resize', () => {
            setWinWidth(window.innerWidth);
            if (winWidth >= 768){
                setMobileMenu(false);
                setExpandCatalog(false);
            }
        })
    }, [winWidth])

    return (
        <>
            <nav className='bg-white w-full max-w-[1440px] mx-auto flex justify-between h-20 z-40 px-2.5'>
                <div>
                    <Link href='/' className='flex h-full items-center'>
                        <Logo />
                    </Link>
                </div>
                <div className='h-full flex'>
                    <ul className='md:flex gap-4 items-center h-full hidden'>
                        <NavMenuElement title='Главная' link='/' dropdown={false}/>
                        <NavMenuElement title='Каталог' link='' dropdown={true}/>
                        <NavMenuElement title='Новости' link='/news' dropdown={false}/>
                        <NavMenuElement title='Контакты' link='/contact' dropdown={false}/>
                    </ul>
                    <span onClick={toggleMenu} className='text-3xl flex md:hidden items-center transition-colors duration-200 hover:text-[--orange-color]'>
                        <FaBars />
                    </span>
                </div>
            </nav>
            {mobileMenu ? (
                <div className='flex fixed z-50 justify-end top-0 h-full w-full bg-black/25' onClick={toggleMenu}>
                    <div className='bg-white sideMenu w-10/12 max-w-[320px] h-full' onClick={(e) => e.stopPropagation()}>
                        <div className='border-b-[1px] border-[--border-color] h-20 items-center mx-2 flex justify-center'>
                            <span className='translate-x-4'>
                                <Logo />
                            </span>
                            <span onClick={toggleMenu} className='text-3xl z-50 mr-0.5 flex items-center transition-colors duration-200 hover:text-[--orange-color]'>
                                <FaBars />
                            </span>
                        </div>
                        <div className='border-b-[1px] border-[--border-color] py-2 text-[1.375rem] mx-2 flex flex-col justify-center'>
                            <NavMenuElement title='Главная' link='/' dropdown={false}/>
                            <NavMenuCatalog catalogState={expandCatalog} func={expandMobCatalog} />
                            <NavMenuElement title='Новости' link='/news' dropdown={false}/>
                            <NavMenuElement title='Контакты' link='/contact' dropdown={false}/>
                        </div>
                        <div className='border-b-[1px] border-[--border-color] items-center py-1.5 text-[1.25rem] mx-2 flex flex-col justify-center'>
                            <FooterSocials />
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    )
}