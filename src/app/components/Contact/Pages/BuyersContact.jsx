// REACT & REACT LIBS
import { useState } from "react";
// COMPONENTS
import ContactModal from "../ContactModal";
import EvrazLine from "../../Branding/EvrazLine";
import List from "../../ListStyles/List";


export default function BuyersContact(){

    const marketPlaceFacts = [
        {id: 0, text: 'Количество пользователей более 1500'},
        {id: 1, text: 'ЕВРАЗ Маркетплейс работает с июня 2020 года'},
        {id: 2, text: 'Количество заказов более 6000 в месяц'},
        {id: 3, text: 'География присутствия – 3 региона, 8 городов'},
        {id: 4, text: 'С нами уже работают 15 партнеров более чем по 20 категориям ТМЦ!'},
    ]

    const [modal, setModal] = useState(false);

    function switchModal(){
        setModal(!modal);
    }

    function sendMessage(){
        switchModal();
    }
    
    return (
        <>
            {modal ? (
                <ContactModal closeFunc={switchModal} sendFunc={sendMessage} />
                ) : null}
            <div className="w-full">
                <div className="py-4">
                    <span className="absolute left-0"><EvrazLine /></span>
                    <h1 className="text-2xl font-semibold">ЕВРАЗ Маркетплейс — это первый в металлургии корпоративный интернет-магазин для внутреннего заказчика. Мы предлагаем уникальный опыт работы с интернет-магазином для промышленного предприятия.</h1>
                </div>
                <div className="py-4">
                    <h2>ЕВРАЗ Маркетплейс — это инструмент прямой связи поставщика и заказчика</h2>
                    <a href="#" onClick={switchModal} className="underline hover:no-underline cursor-pointer">Стать поставщиком ЕВРАЗ Маркетплейс</a>
                </div>
                <div className="py-4">
                    <h3 className="text-xl font-semibold">Приглашаем всех поставщиков к сотрудничеству.</h3>
                </div>
                <div className="py-4">
                    <h3 className="text-xl font-semibold">Мы свяжемся с Вами в течение 5 дней.</h3>
                </div>
                <div className="py-4">
                    <ul>
                        {marketPlaceFacts.map((fact) => {
                            return (
                                <List key={fact.id} text={fact.text} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}