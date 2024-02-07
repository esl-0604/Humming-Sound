"use client";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { ScrolledButton } from "../utils/atom/scrolledButton";
import LocalStorage from "../utils/localstorage";

export default function StyleProcessButton() {
  const router = useRouter();
  const isScrolled = useRecoilValue<boolean>(ScrolledButton);
  const userId = LocalStorage.getItem("userId");
  const processClickLog = async () => {
    const body = {
      logging_id: "main_process_click",
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
    <div className="sticky bottom-[30px] z-10 h-[50px] w-full px-[55px]">
      <div
        onClick={() => {
          router.push(`/process`);
          processClickLog();
        }}
        className={`flex h-[50px] w-full items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] ${
          isScrolled
            ? "bg-[#E8E8E8] transition duration-500 ease-in-out"
            : "bg-[rgba(0,0,0,0.10)] transition duration-500 ease-in-out"
        }`}
      >
        <p
          className={`text-[16px] ${
            isScrolled ? "text-[#161617]" : "text-[#ffffff]"
          } `}
        >
          스타일링 현황 바로가기 &gt;
        </p>
      </div>
    </div>
  );
}
