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
    profile: {
      nickname: string;
    };
  };
}

export async function GET(req: NextRequest) {
  const getAccessToken = async () => {
    const authcode = req.headers.get("authCode");
    const redirect_uri_path = req.headers.get("redirectUriPath");
    const tokenUrl = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}/${redirect_uri_path}&code=${authcode}`;
    const tokenResponse: TokenResponse = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
      },
    }).then((res) => res.json());
    return tokenResponse;
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
    // console.log(userInfoResponse);
    return userInfoResponse;
  };
  const findUser = async () => {
    const tokenResponse: TokenResponse = await getAccessToken();
    const userInfoResponse: UserInfo = await getUserInfo(tokenResponse);
    const db = (await connectDB).db("stcl-dev");
    const findUserResponse = await db
      .collection("User")
      .findOne({ id: Number(userInfoResponse.id) });
    // console.log(findUserResponse);
    if (findUserResponse == null) {
      const insertUserResponse = await db.collection("User").insertOne({
        id: Number(userInfoResponse.id),
        email: userInfoResponse.kakao_account.email,
        nickname: userInfoResponse.kakao_account.profile.nickname,
      });
      return String(insertUserResponse.insertedId);
    }
    // console.log(findUserResponse._id);
    return String(findUserResponse._id);
  };

  const result = await findUser();
  return NextResponse.json(result, { status: 200 });
}
