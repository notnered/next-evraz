// COMPONENTS
import NewsSection from "./NewsSection";
// DATA
import { queryNews } from "@/database/getQueryOutput";

export default async function NewsBlock(){
    const queryOptions = {
        skip: 0,
        take: 3,
    };

    const news = await queryNews(queryOptions);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-2 gap-y-[1.25rem] gap-x-[2.5rem] my-8">
            {news.map((news) => {
                return (
                    <NewsSection 
                        key={news.id} 
                        id={news.id} 
                        title={news.title} 
                        date={new Date(news.createdAt).toLocaleDateString('ru-ru')} 
                        full={false} 
                    />
                )
            })}
        </div>
    )
}