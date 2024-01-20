import { connectDB } from "../../utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const stylist_key = req.headers.get("stylist_key");

  const timeslotByStylistResponse = await db
    .collection("stylists")
    .findOne({ stylist_key: stylist_key });

  return NextResponse.json({ timeslotByStylistResponse }, { status: 200 });
}
