// STATIC
import logo from '../../../../public/logo.svg';

export default function Logo(){
    return (
        <div className='flex w-fit'>
            <img src={logo.src} alt='ЕВРАЗ-ЗСМК' className='w-72 ml-8 lg:ml-0' width={72} height={72}/>
        </div>
    )
}