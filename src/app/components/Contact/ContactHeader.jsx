// DATA
const buttons = [
    {id: 0, text: 'Общие вопросы'},
    {id: 1, text: 'Клиентам и покупателям'},
    {id: 2, text: 'Партнерам и поставщикам'},
    {id: 3, text: 'Журналистам и СМИ'},
    {id: 4, text: 'Соискателям'},
]


export default function ContactHeader(props){
    return (
        <>
            <div className="w-full border-b-[1px] border-b-[--border-color]">
                <div className="flex gap-6">
                    {buttons.map((btn) => {
                        return (
                            <button
                                key={btn.id}
                                value={btn.id}
                                className={`${props.currentPage === btn.id ? 'border-b-[--red-color] text-black' : 'text-gray-600 hover:text-[--orange-color] border-transparent'} pb-2 border-b-4 font-medium transition-colors duration-200`}
                                onClick={props.handlePage}
                                >
                                {btn.text}
                            </button>
                        )
                    })}
                </div>
            </div>
        </>
    )
}