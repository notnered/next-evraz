export default function SphereHeader(props){
    const styleParams = `bg-[${props.color}] py-4 text-white px-4 text-3xl h-fit break-words w-full font-bold`;

    return (
        <div className="relative order-1 md:order-1 w-full h-full">
            <div className="absolute flex w-full h-full items-center">
                <h1 className={styleParams}>{props.title}</h1>
            </div>
            <img src={props.imageSrc.src} className="w-full min-h-[20rem] object-cover flex border-[1px] border-[--border-color]" alt="SphereActivity" />
        </div>
    )
}