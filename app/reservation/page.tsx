"use client";

import { useRecoilState } from "recoil";
import Block from "./components/Block";
import { useSearchParams } from "next/navigation";
import ContinueButton from "./components/ContinueButton";
import { ReservationContext, StepType } from "./context";
import { useEffect, useState } from "react";
import ProductBox from "./components/Product/ProductBox";
import CalendarBox from "./components/Calendar/CalendarBox";
import CompleteBox from "./components/Complete/CompleteBox";
import { stylistData, stylistType } from "../utils/atom/stylistTestData";

export default function Reservation() {
  const stylistKey = useSearchParams().get("stylistKey");

  const [step, setStep] = useState<StepType>({ step: "Product" });
  const [productList, setProductList] = useState<object>({});
  const [dateList, setDateList] = useState();

  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey ? stylistKey : "testStylist"];

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  return (
    <ReservationContext.Provider
      value={{
        step,
        setStep,
        productList,
        setProductList,
        dateList,
        setDateList,
      }}
    >
      <main className="flex min-h-screen w-full flex-col bg-[#161616] pb-[60px] text-[#E8E8E8]">
        <div className="relative flex h-full w-full flex-col px-[30px]">
          <div className="sticky top-0 z-30 h-fit w-full bg-[#161616]">
            <div className="mb-[35px] mt-[11px] flex h-[15px] w-full items-center font-highlight text-[15px]">
              예약하기
            </div>

            <div className="flex w-full flex-col gap-[10px] pb-[27px]">
              <Block />
              <div className="flex min-h-[60px] w-full flex-col font-default text-[30px] leading-[100%]">
                <div className="flex min-h-[30px] flex-wrap items-center">
                  <span className="flex h-full items-center whitespace-pre font-highlight">
                    {stylist.name}{" "}
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
            {step.step === "Product" ? (
              <ProductBox />
            ) : step.step === "Date" ? (
              <CalendarBox />
            ) : (
              <CompleteBox />
            )}
          </div>
        </div>
        <ContinueButton />
      </main>
    </ReservationContext.Provider>
  );
}
