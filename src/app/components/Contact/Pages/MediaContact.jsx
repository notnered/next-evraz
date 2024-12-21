// REACT & REACT LIBS
import Link from 'next/link';
import { FaRegMessage, FaPhone } from 'react-icons/fa6';
import { FaExternalLinkAlt } from "react-icons/fa";
// COMPONENTs
import EvrazLine from "../../Branding/EvrazLine";
import PageBlock from './pagesComponents/PageBlock';

export default function MediaContact(){

    const mediaInfo = [
        {id: 0, title: 'Электронный адрес', subtitle: 'E-mail', text: 'media@evraz.com', link: 'mailto:media@evraz.com', icon: <FaRegMessage />},
        {id: 1, title: 'Телефон', subtitle: 'Москва', text: '+7 (495) 937-68-71', link: 'tel:+74959376871', icon: <FaPhone />},
        {id: 2, title: 'Новостной блок', subtitle: 'Блок', text: 'Перейти на страницу', link: '/news', icon: <FaExternalLinkAlt />, linkNext: true},
    ]

    return (
        <div className="w-full">
            <div className="py-4">
                <h1 className="text-3xl font-semibold">
                    Информация для СМИ
                </h1>
            </div>
            <div className="py-4">
                <div className="grid grid-cols-1 grid-flow-row gap-y-4 lg:grid-cols-3 gap-x-4">
                    {mediaInfo.map((item) => {
                        return (
                            <PageBlock key={item.id} title={item.title} subtitle={item.subtitle} text={item.text} link={item.link} icon={item.icon} linkNext={item?.linkNext} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}