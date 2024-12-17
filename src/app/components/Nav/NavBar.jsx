// REACT & REACT LIBS
import Link from 'next/link';
// COMPONENTS
import NavMenuElement from './NavMenuElement';
import Logo from '../Branding/Logo';

export default function NavBar(){
    return (
        <nav className='bg-white w-full max-w-[1440px] mx-auto flex justify-between h-20 z-40'>
            <div>
                <Link href='/' className='flex h-full items-center'>
                    <Logo />
                </Link>
            </div>
            <div>
                <ul className='flex gap-4 items-center h-full'>
                    <NavMenuElement title='Главная' link='/' dropdown={false}/>
                    <NavMenuElement title='Каталог' link='' dropdown={true}/>
                    <NavMenuElement title='Новости' link='/news' dropdown={false}/>
                    <NavMenuElement title='Контакты' link='/contact' dropdown={false}/>
                </ul>
            </div>
        </nav>
    )
}