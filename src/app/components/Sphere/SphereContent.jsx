import EvrazLine from "../Branding/EvrazLine";

export default function SphereContent(props){
    return (
        <div className="col-span-2 border-[1px] border-[--border-color]">
            <div className="flex h-full">
                <div className="py-8 h-full w-full flex">
                    {props.inversed ? (
                        <>
                            <EvrazLine/>
                            <div className="h-full w-full flex pl-2 pr-8">
                                <p className="font-medium text-xl">{props.description}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="h-full w-full flex pr-2 pl-8">
                                <p className="font-medium text-xl">{props.description}</p>
                            </div>
                            <EvrazLine/>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}