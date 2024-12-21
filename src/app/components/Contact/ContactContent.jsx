// REACT & REACT LIBS
import { FaMapMarkerAlt, FaPhone,  } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
// COMPONENTS
import GeneralContact from "./Pages/GeneralContact";

export default function ContactContent({currentPage, children}){

    return (
        <div className="border-[1px] border-[--border-color] p-4 lg:p-8 md:gap-x-8 gap-y-4 flex flex-col md:flex-row my-8 relative">
            {children}
        </div>
    )
}