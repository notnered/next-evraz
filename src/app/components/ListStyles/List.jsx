export default function List(props){
    return (
        <li className="flex gap-x-4"><div className="h-1 min-w-[1rem] mt-4 bg-[--yellow-color]"></div>{props.text}</li>
    )
}