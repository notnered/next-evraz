import { queryCategory } from "@/database/getQueryOutput";
import { NextResponse } from "next/server";

export async function GET(request){
    const data = await queryCategory();
    return NextResponse.json(data);
}