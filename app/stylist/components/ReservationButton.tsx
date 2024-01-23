"use client";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

interface Props {
  stylistKey: string;
}

export default function ReservationButton({ stylistKey }: Props) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/reservation/getServiceByStylistKey?stylist_key=" + stylistKey, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length === 0) setDisabled(true);
        else setDisabled(false);
      });
  }, []);

  return (
    <div className="sticky bottom-[30px] z-20 h-[50px] w-full px-[55px]">
      <div
        onClick={() => {
          if (!disabled)
            router.push(`/reservation?stylistKey=${stylistKey}&step=Product`);
        }}
        className={`flex h-[50px] w-full items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] ${
          isScrolled
            ? "bg-[#E8E8E8] text-[#161617] transition duration-500 ease-in-out"
            : "bg-[rgba(0,0,0,0.10)] text-[#E8E8E8] transition duration-500 ease-in-out"
        }`}
      >
        {disabled ? (
          <p
            className={` text-[16px] ${
              isScrolled ? "font-main" : "font-default"
            }`}
          >
            현재 예약이 불가 합니다.
          </p>
        ) : (
          <p
            className={` text-[16px] ${
              isScrolled ? "font-main" : "font-default"
            }`}
          >
            지금
            <span
              className={`whitespace-pre ${
                isScrolled ? "font-highlight" : "font-main"
              }`}
            >
              {" "}
              예약하기
            </span>{" "}
            &gt;
          </p>
        )}
      </div>
    </div>
  );
}
