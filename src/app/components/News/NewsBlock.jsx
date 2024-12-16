import NewsSection from "./NewsSection";

const newsBlock = [
    {id: 1, title: 'ЕВРАЗ направит около 1 миллиарда рублей на развитие инженерного образования будущего', date: '04.12.2024'},
    {id: 2, title: 'ЕВРАЗ – лидер корпоративной благотворительности', date: '29.11.2024'},
    {id: 3, title: 'ЕВРАЗ увеличит финансирование основных социальных программ в 2025 году', date: '21.11.2024'},
]

export default function NewsBlock(){
    return (
        <div className="grid grid-cols-3 gap-[2rem] px-2 my-[2rem]">
            {newsBlock.map((news) => {
                return (
                    <NewsSection key={news.id} title={news.title} date={news.date} />
                )
            })}
        </div>
    )
}