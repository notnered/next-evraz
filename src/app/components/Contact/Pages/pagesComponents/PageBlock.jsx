// COMPONENTS
import Link from "next/link";
import EvrazLine from "../../../Branding/EvrazLine";

export default function PageBlock(props){
    return (
        <div className="border-[1px] relative border-[--border-color] p-4 xl:p-8">
            <div className="flex gap-x-2 items-center py-2">
                <span className='absolute left-0'><EvrazLine className="absolute" /></span>
                <h2 className="text-2xl font-semibold">{props.title}</h2>
            </div>
            <div className="flex flex-col sm:flex-row">
                <span className='flex items-center text-gray-700'>
                    <span className="mr-2 text-gray-500 hidden sm:flex">{props.icon}</span>
                    {props.subtitle}:
                </span>
                {props.linkNext ? (
                    <Link href={props.link} className='md:ml-2 underline hover:no-underline text-black'>
                        {props.text}
                    </Link>
                ) : (
                    <a href={props.link} target='_blank' className='md:ml-2 underline hover:no-underline text-black'>
                        {props.text}
                    </a>
                )}
            </div>
        </div>
    )
}