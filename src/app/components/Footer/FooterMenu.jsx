import Link from "next/link";

export default function FooterMenu(props){
    return (
        <Link className="text-gray-800 font-medium" href={props.link}>{props.title}</Link>
    )
}