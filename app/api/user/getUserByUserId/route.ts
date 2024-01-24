import { connectDB } from "@/app/utils/database";
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const searchParams = req.nextUrl.searchParams;
  const user_id = searchParams.get("user_id") || "null";

  if (!user_id || user_id.length !== 24) {
    return NextResponse.json("Invalid User Id", { status: 400 });
  }

  const getUserInfoByUserIdResponse = await db
    .collection("User")
    .findOne({ _id: new ObjectId(user_id) });
  if (!getUserInfoByUserIdResponse) {
    return NextResponse.json("No User Found", { status: 404 });
  }

  const getIsReservedByUserIdResponse = await db
    .collection("Reservation")
    .findOne({ user_id: user_id });

  if (getIsReservedByUserIdResponse == null) {
    return NextResponse.json(
      {
        user_id: user_id,
        kakao_id: getUserInfoByUserIdResponse.id,
        email: getUserInfoByUserIdResponse.email,
        is_reserved: false,
      },
      { status: 200 },
    );
  } else
    return NextResponse.json(
      {
        user_id: user_id,
        kakao_id: getUserInfoByUserIdResponse.id,
        email: getUserInfoByUserIdResponse.email,
        is_reserved: true,
      },
      { status: 200 },
    );
}
