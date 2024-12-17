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
        <div className="my-[30px] flex gap-x-10">
            <div className="w-3/4 flex h-fit flex-col gap-y-[30px]">
                {newsData.map((element) => {
                    return (
                        <NewsSection key={element.id} title={element.title} date={element.date} description={element.description} full={true}/>
                    )
                })}
            </div>
            <div className="w-1/4 flex flex-col">
                <NewsDate />
                {/* <NewsAd /> */}
            </div>
        </div>
    )
}