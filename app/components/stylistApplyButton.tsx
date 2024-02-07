"use client";
import { useRecoilValue } from "recoil";
import { ScrolledButton } from "../utils/atom/scrolledButton";
import Link from "next/link";
import LocalStorage from "../utils/localstorage";

export default function StylistApplyButton() {
  const isScrolled = useRecoilValue<boolean>(ScrolledButton);
  const userId = LocalStorage.getItem("userId");
  const applyClickLog = async () => {
    const body = {
      logging_id: "main_apply_click",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      etc: null,
    };
    await fetch("/api/log/postLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };
  return (
    <div
      onClick={() => {
        applyClickLog();
      }}
      className="fixed bottom-[94px] z-10 h-[30px] w-full max-w-[480px]"
    >
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
