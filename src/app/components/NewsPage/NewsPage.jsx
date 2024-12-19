'use client';
// REACT & REACT LIBS
import { useEffect } from "react";
// COMPONENTS
import NewsDate from "../News/NewsDate";
import NewsSection from "../News/NewsSection";
import NewsAd from "../News/NewsAd";
// DATA
import newsData from "../News/newsPosts";


export default function NewsPage(){

    // useEffect(async () => {
    //     const data = await newsData;
    // }, [])

    return (
        <div className="my-8 flex flex-col md:flex-row gap-x-10 px-4">
            <div className="w-full order-2 md:order-1 md:w-3/4 flex h-fit flex-col gap-y-4 md:gap-y-8">
                {newsData.map((element) => {
                    return (
                        <NewsSection key={element.id} title={element.title} date={element.date} description={element.description} full={true}/>
                    )
                })}
            </div>
            <div className="w-full order-1 md:order-2 md:w-1/4 flex flex-col">
                <NewsDate />
                {/* <NewsAd /> */}
            </div>
        </div>
    )
}