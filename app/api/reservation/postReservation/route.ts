import { connectDB } from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface Reservation {
  stylist_id: string;
  user_id: string;
  user_phone_number: string;
  user_name: string;
  services: {
    consulting: Consulting[];
    optional: Optional[];
    how: How[];
    shopping: Shopping[];
  };
}

interface Consulting {
  service_id: string;
  title: string;
  type: string;
  price: number;
}

interface Optional {
  service_id: string;
  title: string;
  type: string;
  price: number;
  count: number;
}

interface How {
  service_id: string;
  title: string;
  type: string;
  price: number;
  date: string;
  timeslot: string[];
}

interface Shopping {
  service_id: string;
  title: string;
  type: string;
  price: number;
  date?: string;
  timeslot?: string[];
  count?: number;
}

export async function POST(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const reqBody = await req.json();
  const reservation: Reservation = reqBody;

  if (
    !reservation.stylist_id ||
    !reservation.user_id ||
    !reservation.user_phone_number ||
    !reservation.user_name ||
    !reservation.services ||
    !validateServices(reservation.services)
  ) {
    return NextResponse.json("fail", { status: 400 });
  }

  // insertOne 메서드를 사용하여 예약을 MongoDB에 삽입하기 전에
  // created_at 필드를 추가하고 서버 삽입 시점의 시간을 설정
  const postReservation = await db.collection("Reservation").insertOne({
    ...reservation,
    created_at: new Date().toLocaleString("kr-KO"), // 서버 삽입 시점의 시간
  });
  if (!postReservation.insertedId) {
    return NextResponse.json("fail", { status: 400 });
  }
  db.collection("StylingProgress").insertOne({
    progress: 0,
    reservation_id: String(postReservation.insertedId),
    created_at: new Date().toLocaleString("kr-KO"),
    updated_at: new Date().toLocaleString("kr-KO"),
  });
  return NextResponse.json("success", { status: 200 });
}

function validateServices(services: Reservation["services"]): boolean {
  return (
    services &&
    services.consulting &&
    services.optional &&
    services.how &&
    services.shopping &&
    true
  );
}
