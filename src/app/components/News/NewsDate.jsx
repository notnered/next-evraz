'use client';
// COMPONENTS
import LongEvrazLine from '../Branding/LongEvrazLine';
import MainButton from '../Buttons/MainButton';
import { useState, useEffect } from 'react';
import { PulseLoader } from 'react-spinners';
// DATA
const monthsList = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 
    'Июль','Август','Сентябрь','Октябрь', 'Ноябрь','Декабрь',
];

export default function NewsDate(props) {
    const tempDatesObjects = [];
    const [dates, setDates] = useState([]);
    const [datesObjects, setDatesObjects] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const getNews = async () => {
            const data = await fetch('/api/news');
            const jsondata = await data.json();
            setNews([...jsondata]);
        }
        getNews();
    }, [])

    // console.log('news', news);

    useEffect(() => {
        if (news.length === 0) return;
        const loopDates = [];
        news.forEach((item) => {
            const date = new Date(item.createdAt).toLocaleDateString('ru-ru').split('.');
            const month = parseInt(date[1]);
            loopDates.push(month);
        });
        setDates(loopDates);
    }, [news]);

    // console.log(dates);

    useEffect(() => {
        if (dates.length === 0) return;
        function updateCount() {
            for (let i = 0; i < dates.length; i++) {
                const monthIndex = dates[i];
                const existingObj = tempDatesObjects.find(obj => {
                    return obj.month === monthsList[monthIndex - 1]
                });
                if (existingObj) {
                    existingObj.count++;
                } else {
                    const dateObj = {
                        month: monthsList[monthIndex - 1],
                        monthIndex: monthIndex,
                        count: 1,
                    };
                    tempDatesObjects.push(dateObj);
                }
            }
        }
        updateCount();

        setDatesObjects([...tempDatesObjects]);

        setLoading(false);
    }, [dates])

    // console.log(datesObjects);

    const activeButton = {
        color: 'var(--orange-color)',
        fontWeight: '600',
    }

    // console.log(props.currentFilter);

    return (
        <>
            <div className='flex flex-col'>
                <div className='border-[1px] border-[--border-color] h-fit'>
                    <LongEvrazLine />
                    <div className='px-2 py-2'>
                        <h1 className='text-xl font-medium'>Новости за 2024 год</h1>
                        <ul className='flex flex-col gap-y-0.5'>
                            {loading ? (
                                <div className='my-2'>
                                    <PulseLoader
                                        color='#F0862F'
                                        size={12}
                                        loading={loading}
                                    />
                                </div>
                            ) : (
                                datesObjects.map((post, index) => {
                                    return (
                                        <li
                                            className='text-xl font-medium transition-colors hover:text-[--orange-color] cursor-pointer w-fit select-none'
                                            key={index}
                                            style={props.currentFilter === post.monthIndex ? activeButton : null}
                                            onClick={() => props.clickFilter(post.monthIndex)}
                                        >
                                            {post.month} ({post.count})
                                        </li>
                                    );
                                })
                            )}
                        </ul>
                    </div>
                </div>
                <div className='my-2'>
                    <div className='md:pt-2 md:pb-2'>
                        <MainButton text={'Сбросить фильтры'} full={true} func={() => props.clickFilter(0)} />
                    </div>
                    <div className='md:pt-2 md:pb-2'>
                        <MainButton text={'Добавить новость'} full={true} func={() => props.modalFunc()} />
                    </div>
                </div>
            </div>
        </>
    );
}
