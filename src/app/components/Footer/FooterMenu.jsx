// REACT & REACT LIBS
import Link from "next/link";

export default function FooterMenu(props){
    return (
        <Link className="text-gray-700 font-semibold transition-colors duration-200 hover:text-[--orange-color]" href={props.link}>{props.title}</Link>
    )
}