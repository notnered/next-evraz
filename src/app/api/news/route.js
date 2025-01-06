import { queryAllNews } from "@/database/getQueryOutput";

import { NextResponse } from "next/server";

export async function GET(request, context){
    const newsData = await queryAllNews();
    return NextResponse.json({
        newsData
    });
}