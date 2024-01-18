import { NextRequest, NextResponse } from "next/server";

interface TokenResponse {
  token_type: string;
  access_token: string;
  refresh_token: string;
  id_token: string;
  expires_in: number;
  refresh_token_expires_in: string;
  scope: string;
}

export async function POST(req: NextRequest) {
  const authcode = req.headers.get("authCode");
  console.log(authcode);
  const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=992dcbe3b69e70d74e47863a4eaf2471&redirect_uri=http://localhost:3000&code=${authcode}`;
  const response: TokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
  console.log(response);
  return NextResponse.json(response, { status: 200 });
}
