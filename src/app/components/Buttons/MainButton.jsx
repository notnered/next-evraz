export default function MainButton(props){

    return (
        <>
            {props.full ? (
                <button onClick={props.func} className="bg-[--orange-color] text-white px-3 py-1.5 font-medium rounded-sm text-lg transition-colors hover:bg-[--orange-hover-color] select-none w-full">{props.text}</button>
            ) : (
                <button onClick={props.func} className="bg-[--orange-color] text-white px-3 py-1.5 font-medium rounded-sm text-lg transition-colors hover:bg-[--orange-hover-color] select-none">{props.text}</button>
            )}
        </>
    )
}