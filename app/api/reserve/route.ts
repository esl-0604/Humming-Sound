import { connectDB } from "../../utils/database";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const id = req.headers.get("id");
  const stylist_key = req.headers.get("stylist_key");
  const date = req.headers.get("date");
  const time = req.headers.get("time");

  const stylingReserveResponse = await db.collection("reservations").insertOne({
    user_id: Number(id),
    stylist_key: stylist_key,
    reserved: { date: date, time: time },
  });
  const reserved_id = stylingReserveResponse.insertedId;

  const stylistUpdateResponse = await db.collection("stylists").updateOne(
    { stylist_key: stylist_key },
    {
      $push: {
        reserved: {
          reserved_id: { $oid: reserved_id },
          date: date,
          time: time,
        },
      },
    },
  );
  return NextResponse.json(
    { stylingReserveResponse, stylistUpdateResponse },
    { status: 200 },
  );
}
