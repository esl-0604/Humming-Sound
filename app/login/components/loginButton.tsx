"use client";

import Link from "next/link";

export default function LoginButton() {
  return (
    <div className="itmes-center absolute bottom-[30px] z-10 flex h-fit w-full justify-center px-[55px]">
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?client_id=992dcbe3b69e70d74e47863a4eaf2471&redirect_uri=http://localhost:3000&response_type=code&scope=talk_message`}
      >
        <img
          src="/images/kakao_login_large_wide.png"
          alt="카카오 로그인 버튼"
        ></img>
      </Link>
    </div>
  );
}
