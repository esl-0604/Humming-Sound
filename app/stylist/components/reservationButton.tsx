"use client";
import { useRouter } from "next/navigation";

interface Props {
  isScrolled: boolean;
}

export default function ReservationButton({ isScrolled }: Props) {
  const router = useRouter();
  return (
    <div className="sticky bottom-[30px] z-10 h-[50px] w-full px-[55px]">
      <div
        onClick={() => router.push(`/reservation`)}
        className={`flex h-[50px] w-full items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] ${
          isScrolled
            ? "bg-[#E8E8E8] text-[#161617] transition duration-500 ease-in-out"
            : "bg-[rgba(0,0,0,0.10)] text-[#E8E8E8] transition duration-500 ease-in-out"
        }`}
      >
        <p className="font-highlight text-[16px]">
          <span className="font-main">지금&nbsp;</span>
          예약하기 &gt;
        </p>
      </div>
    </div>
  );
}
