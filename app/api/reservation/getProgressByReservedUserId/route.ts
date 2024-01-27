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
    return getProgressByReservationId(String(reservationByUserIdResponse._id));
  };
  const getProgressByReservationId = async (reservation_id: string) => {
    const getStatusByReservationIdResponse = await db
      .collection("StylingProgress")
      .findOne({ reservation_id: reservation_id });
    if (!getStatusByReservationIdResponse)
      return NextResponse.json(
        { message: "No Progress found" },
        { status: 404 },
      );

    return getStatusByReservationIdResponse.progress;
  };
  const result = await getReservationByUserId(user_id);
  return NextResponse.json(result, { status: 200 });
}
