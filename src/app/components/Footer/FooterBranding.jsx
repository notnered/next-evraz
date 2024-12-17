// REACT & REACT LIBS
import Link from "next/link";
// COMPONENTS
import Logo from "../Branding/Logo";

export default function FooterBranding(){
    return (
        <div className="pb-4 border-b-[1px] border-b-[--border-color]">
            <Link href='/' className='flex h-full items-center justify-center'>
                <Logo />
            </Link>
        </div>
    )
}