import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/utils/database";

interface Log {
  logging_id: string;
  session_id: string;
  user_id: string | null;
  etc: string | null;
}

export async function POST(req: NextRequest) {
  const db = (await connectDB).db("stcl-dev");
  const reqBody = await req.json();
  const log: Log = reqBody;
  const postLog = await db.collection("EventLog").insertOne({
    ...log,
    created_at: new Date().toLocaleString("kr-KO"), // 서버 삽입 시점의 시간
  });
  if (!postLog.insertedId) {
    return NextResponse.json("fail", {
      status: 400,
      statusText: "Log Insertion Fail",
    });
  }
  return NextResponse.json("success", { status: 200 });
}
