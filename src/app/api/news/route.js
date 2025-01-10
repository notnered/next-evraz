import { createNews } from "@/database/createNews";
import { queryAllNews } from "@/database/getQueryOutput";
import { NextResponse } from "next/server";

export async function GET(request, context){
    const newsData = await queryAllNews();
    return NextResponse.json(newsData);
};

export async function POST(request){
    const data = await request.json();
    const createdNews = await createNews(data);
    return NextResponse.json(createdNews);
}