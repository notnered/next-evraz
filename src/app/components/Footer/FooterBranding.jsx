import Link from "next/link";
import logo from "../../../../public/logo.svg";

export default function FooterBranding(){
    return (
        <div className="pb-4 border-b-[1px] border-b-[--border-color]">
            <Link href='/' className='flex h-full items-center justify-center'>
                 <img 
                    src={logo.src} 
                    alt='ЕВРАЗ-ЗСМК'
                    className='ml-5 w-80'
                    width={80}
                    />
            </Link>
        </div>
    )
}