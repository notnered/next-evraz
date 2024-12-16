export default function NewsSection(props){

    return (
        <div className="border-[1px] border-[#505050] min-h-[16rem]">
            <div className="flex items-center pt-4">
                <div className="w-2">
                    <div className="h-2.5 bg-[#FBB92F]"></div>
                    <div className="h-2.5 bg-[#EE7918]"></div>
                    <div className="h-2.5 bg-[#E42213]"></div>
                </div>
                <span className="text-gray-600 ml-2 text-base font-semibold">{props.date}</span>
            </div>
            <div className="px-4 pt-2 pb-4">
                <p className="font-semibold text-2xl">{props.title}</p>
            </div>
        </div>
    )
}