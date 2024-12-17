// COMPONENTS
import LongEvrazLine from "../Branding/LongEvrazLine";
import MainButton from "../Buttons/MainButton";
// DATA
const postsCount = [
    {month: 'Декабрь', count: 2},
    {month: 'Ноябрь', count: 7},
    {month: 'Октябрь', count: 1},
    {month: 'Сентябрь', count: 2},
    {month: 'Август', count: 2},
    {month: 'Июль', count: 3},
    {month: 'Июнь', count: 6},
    {month: 'Май', count: 3},
    {month: 'Апрель', count: 1},
    {month: 'Март', count: 3},
    {month: 'Февраль', count: 4},
    {month: 'Январь', count: 5},
]

export default function NewsDate(){
    return (
        <div className="flex flex-col">
            <div className="border-[1px] border-[--border-color] h-fit">
                <LongEvrazLine />
                <div className="px-2 py-2">
                    <ul className="flex flex-col gap-y-0.5">
                        {postsCount.map((post, index) => {
                            return (
                                <li className="text-xl font-medium transition-colors hover:text-[--orange-color] cursor-pointer w-fit select-none" key={index}>{post.month} ({post.count})</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className="py-2.5">
                <MainButton text={'Сбросить фильтры'} full={true}/>
            </div>
        </div>
    )
}