// REACT & REACT LIBS
import { FaXmark } from "react-icons/fa6";
// COMPONENTS
import MainButton from "../Buttons/MainButton";

export default function ContactModal(props){


    return (
        <div className="bg-black/25 fixed flex h-full w-full top-0 left-0" onClick={props.closeFunc}>
            <div className="bg-white flex flex-col w-full h-full my-auto max-h-[700px] mx-auto max-w-[600px] rounded-sm z-30" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col px-8 py-8 h-full relative gap-y-2">
                    <div className="absolute top-4 right-4">
                        <span onClick={props.closeFunc} className="cursor-pointer text-2xl transition-colors durataion-200 hover:text-[--orange-color]">
                            <FaXmark />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-medium text-2xl">Отправить сообщение</h1>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Ваше имя
                            <input type="text" className="px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-none text-lg" />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Тема сообщения
                            <input type="text" className="px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-none text-lg"/>
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Ваше сообщение
                            <textarea type="text" className="resize-none px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-none text-lg" />
                        </label>
                    </div>
                    <div>
                        <MainButton text={'Отправить сообщение'} full={true} func={props.sendFunc} />
                    </div>
                </div>
            </div>
        </div>
    )
}