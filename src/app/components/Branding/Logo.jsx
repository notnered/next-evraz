import logo from '../../../../public/logo.svg';

export default function Logo(){
    return (
        <img src={logo.src} alt='ЕВРАЗ-ЗСМК' className={`w-72`} width={72}/>
    )
}