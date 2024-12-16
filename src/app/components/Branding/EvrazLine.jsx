export default function EvrazLine({width, height}){
    if (!height){
        height = '2.5';
    }
    if (!width){
        width = '2.5';
    }
    return (
        <div className={`w-${width}`}>
            <div className={`h-${height} bg-[--yellow-color]`}></div>
            <div className={`h-${height} bg-[--orange-color]`}></div>
            <div className={`h-${height} bg-[--red-color]`}></div>
        </div>
    )
}