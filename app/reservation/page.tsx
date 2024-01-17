"use client";

import { useRecoilState } from "recoil";
import ReservationButton from "../stylist/components/reservationButton";
import ProductList from "./components/Product/productList";
import Block from "./components/block";
import { ScrolledButton } from "../utils/atom/scrolledButton";

export default function Reservation() {
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  return (
    <main className="relative flex min-h-screen w-full flex-col gap-[10px] bg-[#161616] px-[30px] text-[#E8E8E8]">
      <div className="h-[50px] w-full pt-[10px] font-highlight text-[15px]">
        <span>예약하기</span>
      </div>

      <div className="flex w-full flex-col gap-[10px]">
        <Block />
        <div className="flex h-[60px] w-full flex-col font-default text-[30px] leading-[100%]">
          <div className="flex h-[30px] items-center">
            <span className="flex h-full items-center font-highlight">
              박진수&nbsp;
            </span>
            <span className="flex h-full items-center">스타일리스트</span>
          </div>
          <span className="flex h-[30px] items-center">
            예약을 도와드릴게요.
          </span>
        </div>

        <div className="flex h-[45px] w-full flex-col font-default text-[15px] leading-[20px]">
          <span>무엇을 원하시든 맞춰드릴게요.</span>
          <span>자유롭게 골라주세요!</span>
        </div>
      </div>

      <div className="w-full">
        <ProductList />
      </div>
      <ReservationButton isScrolled={isScrolled} />
    </main>
  );
}
