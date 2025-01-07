'use client';
// COMPONENTS
import { FaChevronCircleRight } from 'react-icons/fa';
import LongEvrazLine from '../Branding/LongEvrazLine';
import MainButton from '../Buttons/MainButton';
// DATA
import { queryNews } from '@/database/getQueryOutput';
import { useState, useEffect } from 'react';
// import newsPosts from "./newsPosts";
const monthsList = [
    'Январь',
    'Февраль',
    'Март', 
    'Апрель', 
    'Май', 
    'Июнь', 
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь', 
    'Ноябрь',
    'Декабрь',
];

export default function NewsDate() {
    // const dates = [];
    // const datesObjects = [];

    const [news, setNews] = useState([]);
    
        useEffect(() => {
            const getNews = async () => {
                const data = await fetch('/api/news');
                const jsondata = await data.json();
                setNews([...jsondata]);
            }
            getNews();
        }, [])

        console.log(news);

        // console.log(dates);
    // function getNews(){
    //     let newsdata;
    //     const response = fetch('/api/news', {
    //         method: 'GET',
    //     });
    //     response.then((data) => {
    //         const jsondata = data.json();
    //         return jsondata;
    //     })
    // }
    
    // const data = getNews();
    // console.log(data);

    // dates.forEach((item) => {
    //     const date = new Date(item.createdAt).toLocaleDateString('ru-ru').split('.');
    //     const month = parseInt(date[1]);
    //     dates.push(month);
    // })
    // function updateCount() {
    //     for (let i = 0; i < dates.length; i++) {
    //         const monthIndex = dates[i];
    //         const existingObj = datesObjects.find(obj => {
    //             return obj.month === monthsList[monthIndex - 1]
    //         });
    //         if (existingObj) {
    //             existingObj.count++;
    //         } else {
    //             const dateObj = {
    //                 month: monthsList[monthIndex - 1],
    //                 count: 1,
    //             };
    //             datesObjects.push(dateObj);
    //         }
    //     }
    // }

    // updateCount();

    return (
        <div className='flex flex-col'>
            <div className='border-[1px] border-[--border-color] h-fit'>
                <LongEvrazLine />
                <div className='px-2 py-2'>
                    <h1 className='text-xl font-medium'>Новости за 2024 год</h1>
                    <ul className='flex flex-col gap-y-0.5'>
                        {/* {datesObjects.map((post, index) => {
                            return (
                                <li
                                    className='text-xl font-medium transition-colors hover:text-[--orange-color] cursor-pointer w-fit select-none'
                                    key={index}
                                >
                                    {post.month} ({post.count})
                                </li>
                            );
                        })} */}
                    </ul>
                </div>
            </div>
            <div className='pt-4 pb-8 md:py-4'>
                <MainButton text={'Сбросить фильтры'} full={true} />
            </div>
        </div>
    );
}
