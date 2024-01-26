"use client";

import Link from "next/link";
import { useRouter } from "next/router";
interface AskButtonProps {
  status: number;
}
export default function AskButton({ status }: AskButtonProps) {
  const router = useRouter();
  return (
    <div className="fixed bottom-[30px] z-10 h-[50px] w-full max-w-[480px] px-[55px]">
      {status == 0 || 1 ? (
        <Link
          href="http://pf.kakao.com/_nLIiG/chat"
          className={`flex h-[50px] w-full items-center justify-center rounded-[48px] bg-[rgba(0,0,0,0.10)] shadow-button2 
            backdrop-blur-[7.5px]`}
        >
          {" "}
          <p className={`font-main text-[16px] text-[#ffffff]`}>
            문의하기 &gt;
          </p>
        </Link>
      ) : status == 2 ? (
        <Link
          href="http://pf.kakao.com/_nLIiG/chat"
          className={`flex h-[50px] w-full items-center justify-center rounded-[48px] bg-[rgba(0,0,0,0.10)] shadow-button2 
          backdrop-blur-[7.5px]`}
        >
          {" "}
          <p className={`font-main text-[16px] text-[#ffffff]`}>
            리포트 다운받기 &gt;
          </p>
        </Link>
      ) : (
        <div
          onClick={() => router.push(`/`)}
          className={`flex h-[50px] w-full items-center justify-center rounded-[48px] bg-[rgba(0,0,0,0.10)] shadow-button2 
            backdrop-blur-[7.5px]`}
        >
          {" "}
          <p className={`font-main text-[16px] text-[#ffffff]`}>
            스타일링 신청하기 &gt;
          </p>
        </div>
      )}
    </div>
  );
}
