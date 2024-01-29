"use client";

import Image from "next/image";
import Link from "next/link";

export default function ReservationLoginButton() {
  const redirectURL = window.location.origin + window.location.pathname;
  // console.log(redirectURL);

  return (
    <div className="itmes-center absolute bottom-[30px] z-10 flex h-fit w-full justify-center px-[55px]">
      <Link
        href={`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${redirectURL}&response_type=code&scope=profile_nickname,account_email`}
      >
        <Image
          src="/images/kakao_login_large_wide.png"
          alt="카카오 로그인 버튼"
          className="object-fit h-full w-full"
          width={480}
          height={50}
          priority={true}
        />
      </Link>
    </div>
  );
}
