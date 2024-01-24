import { connectDB } from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const reqBody = await req.json();

  return NextResponse.json({}, { status: 200 });
}
