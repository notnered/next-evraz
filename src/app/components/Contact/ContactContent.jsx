// REACT & REACT LIBS
import { FaMapMarkerAlt, FaPhone,  } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
// COMPONENTS
import GeneralContact from "./Pages/GeneralContact";


// const componentsObj = [
//     {id: 0, component: GeneralContact},
// ]

const array = [GeneralContact, ]

export default function ContactContent({currentPage, children}){

    return (
        <div className="border-[1px] border-[--border-color] p-8 gap-x-8 flex my-8">
            {children}
        </div>
    )
}