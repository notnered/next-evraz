// COMPONENTS
import NewsSection from "./NewsSection";
// DATA
import newsData from "./newsPosts";

const slicedNews = newsData.slice(0, 3)

export default function NewsBlock(){
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-2 gap-[2.5rem] my-[30px]">
            {slicedNews.map((news) => {
                return (
                    <NewsSection key={news.id} title={news.title} date={news.date} full={false} />
                )
            })}
        </div>
    )
}