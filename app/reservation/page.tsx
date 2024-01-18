"use client";

import { useRecoilState } from "recoil";
import ProductList from "./components/Product/productList";
import Block from "./components/block";
import { ScrolledButton } from "../utils/atom/scrolledButton";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ARROW from "@/public/images/toggleClosed.svg";
import ContinueButton from "./components/continueButton";
import { ReservationContext } from "./context";
import { useState } from "react";
import CalendarCard from "./components/Calendar/CalendarCard";

export default function Reservation() {
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  const [what, setWhat] = useState();
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const router = useRouter();
  return (
    <ReservationContext.Provider value={{ showCalendar, setShowCalendar }}>
      <main className="relative flex min-h-screen w-full flex-col bg-[#161616] text-[#E8E8E8]">
        <div
          className="sticky top-[14px] z-40 h-0 w-full cursor-pointer px-[13px]"
          onClick={() => {
            router.back();
          }}
        >
          <Image src={ARROW} alt="arrow" className="rotate-180" />
        </div>
        <div className="relative flex h-full w-full flex-col px-[30px]">
          <div className="sticky top-0 z-30 bg-[#161616]">
            <div className="h-[50px] w-full pt-[10px] font-highlight text-[15px] leading-[21.542px]">
              예약하기
            </div>

            <div className="my-[10px] flex w-full flex-col gap-[10px]">
              <Block />
              <div className="flex min-h-[60px] w-full flex-col font-default text-[30px] leading-[100%]">
                <div className="flex min-h-[30px] flex-wrap items-center">
                  <span className="flex h-full items-center whitespace-pre font-highlight">
                    박진수{" "}
                  </span>
                  <span className="flex h-full items-center whitespace-nowrap">
                    스타일리스트
                  </span>
                </div>
                <span className="flex min-h-[30px] items-center">
                  예약을 도와드릴게요.
                </span>
              </div>

              <div className="flex min-h-[45px] w-full flex-col font-default text-[15px] leading-[20px]">
                <span>무엇을 원하시든 맞춰드릴게요.</span>
                <span>자유롭게 골라주세요!</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            {showCalendar ? <CalendarCard /> : <ProductList />}
          </div>
          <ContinueButton />
        </div>
      </main>
    </ReservationContext.Provider>
  );
}
