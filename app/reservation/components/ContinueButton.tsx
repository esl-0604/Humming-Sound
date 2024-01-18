"use client";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useRecoilState } from "recoil";
import { ReservationContext } from "../context";

interface Props {}

export default function ContinueButton({}: Props) {
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  const { showCalendar, setShowCalendar } = useContext(ReservationContext);
  const router = useRouter();
  return (
    <div className="sticky bottom-[30px] z-20 h-[50px] w-full cursor-pointer px-[25px]">
      <div
        onClick={() => {
          setShowCalendar(!showCalendar);
        }}
        className={`flex h-[50px] w-full items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] ${
          isScrolled
            ? "bg-[#E8E8E8] text-[#161617] transition duration-500 ease-in-out"
            : "bg-[rgba(0,0,0,0.10)] text-[#E8E8E8] transition duration-500 ease-in-out"
        }`}
      >
        <p className="font-highlight text-[16px]">
          <span className="whitespace-pre font-main">지금 </span>
          예약하기 &gt;
        </p>
      </div>
    </div>
  );
}
