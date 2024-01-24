"use client";

import Link from "next/link";

export default function LoginButton() {
  return (
    <div className="itmes-center absolute bottom-[30px] z-10 flex h-fit w-full justify-center px-[55px]">
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL}&response_type=code&scope=profile_nickname,account_email`}
      >
        <img
          src="/images/kakao_login_large_wide.png"
          alt="카카오 로그인 버튼"
        ></img>
      </Link>
    </div>
  );
}
