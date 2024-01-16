"use client";
import { useRouter } from "next/navigation";

export default function ReservationButton() {
  const router = useRouter();
  return (
    <div className="sticky bottom-[30px] z-40 h-[50px] w-full px-[55px]">
      <div
        onClick={() => router.push}
        className="flex h-full w-full items-center justify-center rounded-[48px] bg-[rgba(0,0,0,0.10)] shadow-button2 backdrop-blur-[7.5px]"
      >
        <p className="font-highlight text-[16px] text-[#ffffff] ">
          <span className="font-main">지금&nbsp;</span>
          예약하기 &gt;
        </p>
      </div>
    </div>
  );
}
