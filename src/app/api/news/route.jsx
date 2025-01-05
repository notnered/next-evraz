import { queryAllNews } from "@/database/getQueryOutput";

import { NextResponse } from "next/server";

export async function GET(request){
    const getNews = await queryAllNews();
    return new Response(JSON.stringify(getNews), {
        headers: { "Content-Type": "application/json" },
    });
    
}