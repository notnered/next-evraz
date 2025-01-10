'use client';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
// COMPONENTS
import NewsDate from '../News/NewsDate';
import NewsSection from '../News/NewsSection';
import AddNewsModal from '../News/AddNewsModal';

export default function NewsPage() {

    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [filter, setFilter] = useState(0);
    const [loading, setLoading] = useState(true);
    const [filtering, setFiltering] = useState(false);
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState(false);

    const queryParamsNews = {
        skip: 0,
        take: 5,
    };

    useEffect(() => {
        const getNews = async () => {
            const data = await fetch('/api/news');
            const jsondata = await data.json();
            setNews([...jsondata]);
            setLoading(false);
        }

        getNews();
    }, [])

    const arrData = Array.from(news);

    useEffect(() => {
        setFiltering(true);

        const filteredData = arrData.filter((item) => {
            const data = item.createdAt.toLocaleString('ru-ru').split('-');
            const month = parseInt(data[1]);
            if (filter === 0){
                return month;
            } else {
                return month === filter;
            }
        });

        setFilteredNews(filteredData);
        setFiltering(false);
    }, [news, filter])


    function filterNews(month){
        setFilter(parseInt(month));
    }

    function toggleModal(){
        setModal(!modal);
    }

    return (
        <>
            { modal ? <AddNewsModal toggleFunc={toggleModal} /> : null } 
            <div className='my-8 flex flex-col md:flex-row gap-x-10 px-4 lg:px-2'>
                <div className='w-full order-2 md:order-1 md:w-3/4 flex h-fit flex-col gap-y-4 md:gap-y-8'>
                    {loading || filtering ? (
                        <div className='my-16 flex justify-center'>
                            <PulseLoader
                                color='#F0862F'
                                size={16}
                                loading={loading}
                            />
                        </div>
                    ) : filteredNews.length > 0 ? (
                        filteredNews.map((element) => (
                            <NewsSection
                                key={element.id}
                                id={element.id}
                                title={element.title}
                                date={new Date(element.createdAt).toLocaleDateString('ru-ru')}
                                description={element.text}
                                full={true}
                            />
                    ))
                    ) : (
                        <div className="text-center py-4 text-black font-medium">Новостей нет</div>
                    )}
                </div>
                <div className='w-full order-1 md:order-2 md:w-1/4 flex flex-col'>
                    <NewsDate clickFilter={filterNews} currentFilter={filter} modalFunc={toggleModal}/>
                </div>
            </div>
        </>
    );
}
