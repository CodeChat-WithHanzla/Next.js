import { NextResponse } from "next/server";

export const POST = async (request) => {
  const data = await request.json();
  return NextResponse.json({ success: true, data });
};
