import { NextRequest, NextResponse } from "next/server";
import { schema } from "../products/schema";


export const GET = (request: NextRequest) => {
  return NextResponse.json([
    { id: 1, name: "Elvira" },
    { id: 2, name: "Lvra" },
  ]);
};

export const POST = async(request:NextRequest)=> {
    const body = await request.json()

    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors, {
            status:400
        })
    }

    return NextResponse.json({id:1, name: body.name}, {status:201})
}
