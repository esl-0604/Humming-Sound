import { connectDB } from "@/app/utils/database";
import { NextRequest, NextResponse } from "next/server";

interface Reservation {
  stylist_id: string;
  user_id: string;
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
  date: string;
  timeslot: string[];
}

export async function POST(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const reqBody = await req.json();
  const reservation: Reservation = reqBody;

  if (
    !reservation.stylist_id ||
    !reservation.user_id ||
    !reservation.services ||
    !validateServices(reservation.services)
  ) {
    return NextResponse.json("fail", { status: 400 });
  }

  console.log(reservation);
  const postReservation = await db
    .collection("Reservation")
    .insertOne(reservation);

  if (!postReservation.insertedId) {
    return NextResponse.json("fail", { status: 400 });
  }
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
