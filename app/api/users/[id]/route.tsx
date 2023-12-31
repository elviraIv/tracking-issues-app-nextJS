import { NextRequest, NextResponse } from "next/server";
import { schema } from "../../products/schema";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: "Elvira" });
};

export const PUT = async (
  request: NextRequest,
  {
    params,
  }: {
    params: { id: number };
  }
) => {
  const body = await request.json();

  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, {
      status: 400,
    });
  }

  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ id: 1, name: body.name });
};

export const DELETE = (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  if (params.id > 10) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({});
};
