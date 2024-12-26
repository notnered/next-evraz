// REACT & REACT LIBS
import { FaXmark } from "react-icons/fa6";
// COMPONENTS
import MainButton from "../Buttons/MainButton";

export default function ContactModal(props){


    return (
        <div className="bg-black/25 fixed flex h-full w-full top-0 left-0 px-4 z-20" onClick={props.closeFunc}>
            <div className="bg-white flex flex-col w-full h-fit modalWindow my-auto max-h-[700px] mx-auto max-w-[600px] overflow-y-scroll lg:overflow-y-hidden rounded-sm z-30" onClick={(e) => e.stopPropagation()}>
                <div className="flex flex-col px-8 py-8 h-full relative gap-y-2">
                    <div className="absolute top-4 right-4">
                        <span onClick={props.closeFunc} className="cursor-pointer text-2xl transition-colors durataion-200 hover:text-[--orange-color]">
                            <FaXmark />
                        </span>
                    </div>
                    <div>
                        <h1 className="font-medium text-2xl">Форма обратной связи</h1>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Ваше имя
                            <input type="text" className="px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-[--border-color] text-lg" required />
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Тема сообщения
                            <input type="text" className="px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-[--border-color] text-lg" required/>
                        </label>
                    </div>
                    <div>
                        <label className="flex flex-col">
                            Ваше сообщение
                            <textarea rows={5} type="text" className="resize-none px-2 py-1 border-[1px] border-[--border-color] rounded-sm outline-[--border-color] text-lg" required/>
                        </label>
                    </div>
                    <div className="py-2">
                        <MainButton text={'Отправить сообщение'} full={true} func={props.sendFunc} />
                    </div>
                </div>
            </div>
        </div>
    )
}