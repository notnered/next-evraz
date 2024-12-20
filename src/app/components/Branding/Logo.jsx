// REACT & REACT LIBS
import Image from 'next/image';
// STATIC
import logo from '../../../../public/logo.svg';

export default function Logo(){

    return (
        <div className='flex w-fit'>
            <Image src={logo.src} alt='ЕВРАЗ-ЗСМК' className='min-w-64 w-72' width={logo.width} height={logo.height} priority={true}/>
        </div>
    )
}