'use client';
import { useState, useEffect } from 'react';
// COMPONENTS
import NewsSection from "./NewsSection";
import { PulseLoader } from 'react-spinners';
// DATA

export default function NewsBlock(){
    const queryOptions = {
        skip: 0,
        take: 3,
    };

    const [news, setNews] = useState([]);
    const placeholderNews = Array.from(Array(queryOptions.take).keys());
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        async function getNews(){
            setLoading(true);
            const data = await fetch(`/api/news`);
            const jsondata = await data.json();
            setNews(jsondata);
        }
        getNews();

        setLoading(false);
    }, []);

    console.log(news);


    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 px-4 lg:px-2 gap-y-[1.25rem] gap-x-[2.5rem] my-8">
            { loading ? (
                placeholderNews.map((item, index) => {
                    return (
                        <div className='flex justify-center'  key={index}>
                            <PulseLoader
                                color='#F0862F'
                                size={16}
                                loading={loading}
                            />
                        </div>
                    )
                })
            ) : (
                news.slice(queryOptions.skip, queryOptions.take).map((news) => {
                    return (
                        <NewsSection key={news.id} id={news.id} title={news.title} date={new Date(news.createdAt).toLocaleDateString('ru-ru')} full={false} />
                    )
                })
            )}
        </div>
    )
}