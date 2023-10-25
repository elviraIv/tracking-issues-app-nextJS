import { NextRequest, NextResponse } from "next/server";
import {schema} from './schema'

export const GET = (request:NextRequest) => {
    return NextResponse.json([
        { id: 1, name: 'Book', price: 22.5 },
    { id: 2, name: 'Pencil', price: 3.5 },
    ])
}

export const POST = async (request:NextRequest) => {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if(!validation.success){
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    return NextResponse.json({ id: 10, name: body.name, price: body.price }, { status: 201 })
}