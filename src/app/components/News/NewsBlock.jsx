// COMPONENTS
import NewsSection from "./NewsSection";
// DATA
import { queryNews } from '../../../database/getQueryOutput';

export default async function NewsBlock(){

    const data = await queryNews();
    const news = Array.from(data).slice(0, 3);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-2 gap-y-[1.25rem] gap-x-[2.5rem] my-8">
            {news.map((news) => {
                return (
                    <NewsSection key={news.id} title={news.title} date={news.createdAt.toLocaleDateString('ru-ru')} full={false} />
                )
            })}
        </div>
    )
}