'use client';
import { useEffect, useState } from 'react';
// COMPONENTS
import NewsDate from '../News/NewsDate';
import NewsSection from '../News/NewsSection';
// DATA
import newsData from '../News/newsPosts';
import { queryNews } from '@/database/getQueryOutput';

export default function NewsPage() {

    // const [dateFilter, setDateFilter] = useState(0);

    const queryParamsNews = {
        skip: 0,
        take: 5,
    };

    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [filter, setFilter] = useState(0);

    useEffect(() => {
        const getNews = async () => {
            const data = await fetch('/api/news');
            const jsondata = await data.json();
            setNews([...jsondata]);
        }
        getNews();
    }, [])

    const arrData = Array.from(news);
    // console.log(arrData);

    const filteredArr = arrData.filter((item) => {
        const data = item.createdAt.toLocaleString('ru-ru').split('-');
        const month = parseInt(data[1]);
        if (filter === 0){
            return month;
        } else {
            return month === filter;
        }
    })

    return (
        <div className='my-8 flex flex-col md:flex-row gap-x-10 px-4 lg:px-2'>
            <div className='w-full order-2 md:order-1 md:w-3/4 flex h-fit flex-col gap-y-4 md:gap-y-8'>
                {/* {filteredArr.map((element) => {
                    return (
                        <NewsSection
                            key={element.id}
                            id = {element.id}
                            title={element.title}
                            date={new Date(element.createdAt).toLocaleDateString('ru-ru')}
                            description={element.text}
                            full={true}
                        />
                    );
                })} */}
            </div>
            <div className='w-full order-1 md:order-2 md:w-1/4 flex flex-col'>
                <NewsDate />
            </div>
        </div>
    );
}
