// STATIC
import logo from '../../../../public/logo.svg';

export default function Logo(){
    return (
        <div className='flex w-fit'>
            <img src={logo.src} alt='ЕВРАЗ-ЗСМК' className='min-w-64 w-72' width={72} height={72}/>
        </div>
    )
}