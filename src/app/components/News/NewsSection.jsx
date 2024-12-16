import EvrazLine from "../Branding/EvrazLine";

export default function NewsSection(props){

    return (
        <div className="border-[1px] border-[--border-color] min-h-[16rem] h-full flex flex-col">
            <div className="flex items-center pt-4">
                <EvrazLine width={2} />
                <span className="text-gray-600 ml-2 text-base font-semibold">{props.date}</span>
            </div>
            <div className="px-4 py-2 flex flex-col h-full">
                <p className="font-semibold text-2xl">{props.title}</p>
                {/* <div className="mt-auto">
                    <button className="bg-orange-500 px-2 py-1 rounded-md text-white text-base">Подробнее</button>
                </div> */}
            </div>
        </div>
    )
}