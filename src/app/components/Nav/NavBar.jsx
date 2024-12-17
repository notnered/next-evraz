import Link from 'next/link';
import logo from '../../../../public/logo.svg';
import NavMenuElement from './NavMenuElement';

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
                    <NavMenuElement title='Главная' link='/' dropdown={false}/>
                    <NavMenuElement title='Каталог' link='' dropdown={true}/>
                    <NavMenuElement title='Новости' link='/news' dropdown={false}/>
                    <NavMenuElement title='Контакты' link='/contact' dropdown={false}/>
                </ul>
            </div>
        </nav>
    )
}