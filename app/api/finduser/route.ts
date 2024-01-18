import { connectDB } from "../../utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const db = (await connectDB).db("stcl-dev");
    let result = await db.collection("users").find().toArray();
    console.log(result);
    return NextResponse.json({ result }, { status: 200 });
  } catch (error: any) {}
}
