import { createMessage } from "@/database/createMessage";

import { NextResponse } from "next/server";

export async function POST(request){
    const data = await request.json();
    const createMessageResult = await createMessage(data);
    return NextResponse.json({
        success: true,
    });
}