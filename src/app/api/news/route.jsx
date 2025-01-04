import { queryAllNews } from "@/database/getQueryOutput";

import { NextResponse } from "next/server";

export async function GET(request){
    const getNews = await queryAllNews();
    // console.log(getNews);
    return new Response(getNews);
}