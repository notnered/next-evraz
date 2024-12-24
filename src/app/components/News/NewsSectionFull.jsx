'use client'
import Link from "next/link";
// COMPONENTS
import EvrazLine from "../Branding/EvrazLine";
import MainButton from "../Buttons/MainButton";

export default function NewsSectionFull(props){
    return (
        <div className="border-[1px] border-[--border-color] min-h-[16rem] h-full w-full min-w-fit flex flex-col">
            <div className="flex items-center pt-4">
                <EvrazLine />
                <span className="text-gray-600 ml-2 text-base font-semibold">{props.date}</span>
            </div>
            <div className="px-4 py-2 flex flex-col h-full">
                <p className="font-semibold text-2xl line-clamp-6">{props.title}</p>
                <div className="py-1.5">
                    <p className="text-ellipsis overflow-hidden">{props.description}</p>
                </div>
                <div className="py-1.5">
                    <Link href="/news">
                        <MainButton text={'Вернуться назад'}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}