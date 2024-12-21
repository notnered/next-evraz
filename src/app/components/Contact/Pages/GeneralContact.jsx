// REACT & REACT LIBS
import { FaMapMarkerAlt, FaPhone,  } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { useState } from "react";
// COMPONENTS
import ContactMap from "../ContactMap";
import MainButton from "../../Buttons/MainButton";
import ContactModal from "../ContactModal";

export default function GeneralContact(){

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
            <div className="w-full order-2 md:order-1 md:w-3/6 flex flex-col">
                <ContactMap />
            </div>
            <div className="w-full order-1 md:order-2 md:w-3/6 flex flex-col">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-black">ООО «ЕВРАЗ-ЗСМК»</h1>
                </div>
                <div className="flex w-full flex-col gap-y-1 py-1">
                    <div className="w-full flex items-center text-gray-800 text-lg transition-colors duration-200 hover:text-[--orange-color]">
                        <div className="w-7">
                            <FaMapMarkerAlt />
                        </div>
                        <a href="https://yandex.ru/maps/-/CHEDZDPy" target="_blank">654042 Кемеровская область, г. Новокузнецк, Космическое шоссе, 16</a>
                    </div>
                    <div className="w-full flex items-center text-gray-800 text-lg transition-colors duration-200 hover:text-[--orange-color]">
                        <div className="w-7">
                            <FaPhone />
                        </div>
                        <a href='tel:+73843595908'>+7 (3843) 59-59-08</a>
                    </div>
                    <div className="w-full flex items-center text-gray-800 text-lg transition-colors duration-200 hover:text-[--orange-color]">
                        <div className="w-7">
                            <FaRegMessage />
                        </div>
                        <a href="mailto:zsmk@evraz.com" className="">zsmk@evraz.com</a>
                    </div>
                    <div className="py-1">
                        <MainButton text={'Отправить сообщение'} func={switchModal}/>
                    </div>
                </div>
            </div>
        </>
    )
}