// COMPONENTS
import Link from "next/link";
import EvrazLine from "../Branding/EvrazLine";
import MainButton from "../Buttons/MainButton";

export default function NewsSection(props){
    return (
        <div className="border-[1px] border-[--border-color] min-h-[16rem] h-full w-full min-w-fit flex flex-col">
            <div className="flex items-center pt-4">
                <EvrazLine />
                <span className="text-gray-600 ml-2 text-base font-semibold">{props.date}</span>
            </div>
            <div className="px-4 pt-2 pb-4 flex flex-col h-full">
                <p className="font-semibold text-2xl line-clamp-6">{props.title}</p>
                {props.full ? (
                    (
                        <>
                            <div className="py-1.5">
                                <p className="max-h-72 text-ellipsis overflow-hidden line-clamp-[8]">{props.description}</p>
                            </div>
                        </>
                    )
                ) : null}
                <div className="mt-auto pt-2.5">
                    <Link href={`/news/${props.id}`}>
                        <MainButton text={'Подробнее'} />
                    </Link>
                </div>
            </div>
        </div>
    )
}