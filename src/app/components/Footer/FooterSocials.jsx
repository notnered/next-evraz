// REACT & REACT LIBS
import { FaVk, FaOdnoklassniki, FaYoutube, FaTelegram } from "react-icons/fa6"
import Link from "next/link"

export default function FooterSocials(){
    return (
        <div>
            <ul className="flex justify-center gap-2 text-3xl py-2">
                <li className="transition-colors duration-200 hover:text-gray-700">
                    <Link href={'//vk.com'} target="_blank">
                        <FaVk />
                    </Link>
                </li>
                <li className="transition-colors duration-200 hover:text-gray-700">
                    <Link href={'//ok.ru'} target="_blank">
                        <FaOdnoklassniki />
                    </Link>
                    </li>
                <li className="transition-colors duration-200 hover:text-gray-700">
                    <Link href={'//youtube.com'} target="_blank">
                        <FaYoutube />
                    </Link>
                    </li>
                <li className="transition-colors duration-200 hover:text-gray-700">
                    <Link href={'//telegram.org'} target="_blank">
                        <FaTelegram />
                    </Link>
                </li>
            </ul>
        </div>
    )
}