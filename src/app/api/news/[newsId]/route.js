import { queryOneNews } from "@/database/getQueryOutput";
import { NextResponse } from "next/server";

export async function GET(request, context){
    const { newsId } = await context.params;
    const newsdata = await queryOneNews(newsId);
    return NextResponse.json({
        newsdata,
    });
};