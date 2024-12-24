// REACT & REACT LIBS
import { MdError } from "react-icons/md";


export default function ErrorPage(){
    return (
        <div className="text-center flex flex-col justify-center h-[35em] items-center">
            <div className="flex flex-col items-center">
                <MdError className="text-6xl text-[--red-color]" />
                <h1 className="text-[1.75rem] font-medium">Ошибка 404</h1>
            </div>
            <div>
                <span className="max-w-prose block mx-auto font-medium">Похоже страница, которую вы искали не найдена. Попробуйте подождать или проверить правильность ссылки по которой вы перешли</span>
            </div>
        </div>
    )
}