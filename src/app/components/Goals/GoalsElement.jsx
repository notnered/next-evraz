export default function GoalsElement(props){
    
    return (
        <div className="border-[1px] border-[--border-color] min-h-[16rem] h-full flex flex-col max-h-[16rem]">
            <div className="flex items-start pt-4">
                <div className="w-2">
                    <div className="h-2.5 bg-[--yellow-color]"></div>
                    <div className="h-2.5 bg-[--orange-color]"></div>
                    <div className="h-2.5 bg-[--red-color]"></div>
                </div>
                <h1 className="ml-2 text-[1.375rem] font-semibold">{props.id}. {props.title}</h1>
            </div>
            <div className="px-4 py-2 flex flex-col h-full">
                <p className="font-medium text-xl">{props.description}</p>
                {/* <div className="mt-auto">
                    <button className="bg-orange-500 px-2 py-1 rounded-md text-white text-base">Подробнее</button>
                </div> */}
            </div>
        </div>
    )
}