import Link from 'next/link';
import logo from '../../../../public/logo.svg';
import NavmMenuElement from './NavMenuElement';

export default function NavBar(){
    return (
        <nav className='flex justify-between h-20 z-40'>
            <div>
                <Link href='/' className='flex h-full items-center'>
                    <img 
                        src={logo.src} 
                        alt='ЕВРАЗ-ЗСМК'
                        className='w-72'
                        width={72}
                        />
                    {/* <h1 className='font-bold'>ЕВРАЗ-ЗСМК</h1> */}
                </Link>
            </div>
            <div>
                <ul className='flex gap-4 items-center h-full'>
                    <NavmMenuElement title='Главная' link='#' dropdown={false}/>
                    <NavmMenuElement title='Каталог' link='#' dropdown={true}/>
                    <NavmMenuElement title='Новости' link='#' dropdown={false}/>
                    <NavmMenuElement title='Контакты' link='#' dropdown={false}/>
                </ul>
            </div>
        </nav>
    )
}