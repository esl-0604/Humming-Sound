"use client";
import { useRecoilValue } from "recoil";
import { ScrolledButton } from "../utils/atom/scrolledButton";
import Link from "next/link";

export default function StylistApplyButton() {
  const isScrolled = useRecoilValue<boolean>(ScrolledButton);
  return (
    <div className="fixed bottom-[94px] z-10 h-[30px] w-full max-w-[480px]">
      <Link
        className="flex h-[30px] w-full items-center justify-center"
        href="https://pf.kakao.com/_nLIiG/chat"
      >
        <p
          className={`font-default text-[15px]  underline decoration-from-font underline-offset-4 ${
            isScrolled
              ? "text-[#E8E8E8] transition duration-700 ease-in-out"
              : "text-transparent transition duration-700 ease-in-out"
          }`}
        >
          스타일리스트 지원하러 가기 &gt;
        </p>
      </Link>
    </div>
  );
}
