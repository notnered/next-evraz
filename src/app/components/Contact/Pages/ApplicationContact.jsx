// REACT & REACT LIBS
import { FaRegMessage, FaPhone } from 'react-icons/fa6';
import { FaExternalLinkAlt } from "react-icons/fa";
// COMPONENTs
import EvrazLine from "../../Branding/EvrazLine";
import PageBlock from "./pagesComponents/PageBlock";

export default function ApplicationContact(){

    const applicationInfo = [
        {id: 0, title: 'Электронный адрес', subtitle: 'E-mail', text: 'cpp.zsmk@evraz.com', link: 'mailto:cpp.zsmk@evraz.com', icon: <FaRegMessage />},
        {id: 1, title: 'Телефон адрес', subtitle: 'Москва', text: '+7 (800) 222-72-00', link: 'tel:+78002227200', icon: <FaPhone />},
        {id: 2, title: 'hh.ru', subtitle: 'hh.ru', text: 'Перейти по ссылке', link: 'https://novokuznetsk.hh.ru/employer/19989', icon: <FaExternalLinkAlt />},
    ]

    return (
        <div className="w-full">
            <div className="py-4">
                <h1 className="text-3xl font-semibold">
                    Информация для соискателей работы
                </h1>
            </div>
            <div className="py-4">

                <div className='py-4'>
                    <h1 className='text-2xl font-semibold'>Отдел кадров «ЕВРАЗ-ЗСМК»</h1>
                </div>

                <div className="grid grid-cols-1 grid-flow-row gap-y-4 lg:grid-cols-3 gap-x-4">
                    {applicationInfo.map((item) => {
                        return (
                            <PageBlock key={item.id} title={item.title} subtitle={item.subtitle} text={item.text} link={item.link} icon={item.icon} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}