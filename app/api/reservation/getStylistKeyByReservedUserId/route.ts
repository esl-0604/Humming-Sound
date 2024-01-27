import { connectDB } from "@/app/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const searchParams = req.nextUrl.searchParams;
  const user_id = searchParams.get(`user_id`) || null;
  if (user_id === null)
    return NextResponse.json(
      { message: "No user_id provided" },
      { status: 404 },
    );
  const getReservationByUserId = async (user_id: string) => {
    const reservationByUserIdResponse = await db
      .collection("Reservation")
      .findOne({ user_id: user_id });
    if (!reservationByUserIdResponse)
      return NextResponse.json(
        { message: "No reservation found" },
        { status: 404 },
      );

    return getStylistkeyByStylistId(reservationByUserIdResponse.stylist_id);
  };
  const getStylistkeyByStylistId = async (stylist_id: string) => {
    const getStylistKeyByStylistIdResponse = await db
      .collection("Stylist")
      .findOne({ _id: new ObjectId(stylist_id) });
    if (!getStylistKeyByStylistIdResponse)
      return NextResponse.json(
        { message: "No stylist found" },
        { status: 404 },
      );

    return getStylistKeyByStylistIdResponse.stylist_key;
  };
  const result = await getReservationByUserId(user_id);
  return NextResponse.json(result, { status: 200 });
}
