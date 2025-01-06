import { queryOneNews } from "@/database/getQueryOutput";

import { NextResponse } from "next/server";

export async function GET(request, context){
    const { params } = context;
    const newsdata = await queryOneNews(params.newsId);
    return NextResponse.json({
        newsdata,
    })
}