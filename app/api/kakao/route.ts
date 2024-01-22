import { connectDB } from "@/app/utils/database";
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

interface UserInfo {
  id: number;
  connected_at: string;
  kakao_account: {
    email: string;
  };
}

export async function GET(req: NextRequest) {
  const getAccessToken = async () => {
    const authcode = req.headers.get("authCode");
    const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&code=${authcode}`;
    const tokenResponse: TokenResponse = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((res) => res.json());
    return getUserInfo(tokenResponse);
  };
  const getUserInfo = async (tokenResponse: TokenResponse) => {
    const access_token = tokenResponse.access_token;
    const userInfoUrl = `https://kapi.kakao.com/v2/user/me`;
    const userInfoResponse: UserInfo = await fetch(userInfoUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
        Authorization: `Bearer ${access_token}`,
      },
    }).then((res) => res.json());
    return findUser(userInfoResponse);
  };
  const findUser = async (userInfoResponse: UserInfo) => {
    const db = (await connectDB).db("stcl-dev");
    const findUserResponse = await db
      .collection("users")
      .findOne({ id: Number(userInfoResponse.id) });
    if (findUserResponse == null) {
      await db.collection("users").insertOne({
        id: Number(userInfoResponse.id),
        email: userInfoResponse.kakao_account.email,
      });
    }
    return findUserResponse;
  };

  return NextResponse.json(getAccessToken(), { status: 200 });
}
