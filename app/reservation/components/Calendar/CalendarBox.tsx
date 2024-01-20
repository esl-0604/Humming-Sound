"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import WHEN from "@/public/images/reservation/when.svg";
import Image from "next/image";
import { formatMainText } from "@/app/utils/function/formatMainText";
import STCLCalendar from "./STCLCalendar";
import TimeSlot from "./TimeSlot";
import { ReservationContext } from "../../context";
import { useContext, useEffect, useState } from "react";

interface Props {}

export default function CalendarBox({}: Props) {
  const { step, productList, dateList, setDateList } =
    useContext(ReservationContext);
  const [dateSelected, setDateSelected] = useState<boolean>(false);
  const [dateOfWhat, setDateOfWhat] = useState<string>("");

  useEffect(() => {
    if (step.step === "Date1") {
      if (productList["how"]) {
        setDateOfWhat(productList["how"][0].title + " 컨설팅");
      }
    } else {
      if (productList["shopping"]) {
        setDateOfWhat(productList["shopping"][0].title);
      }
    }
  }, [productList, step]);

  return (
    <div className="flex h-fit w-full flex-col pb-[50px] text-[#E8E8E8]">
      <Image src={BLOCK} alt="block" />

      <div className="mb-[15px] mt-[10px] flex h-[30px] w-full items-center px-[10px] ">
        <Image src={WHEN} alt="when" />
      </div>

      <div className="flex min-h-[45px] w-full flex-col font-default text-[15px] leading-[20px]">
        <span>{formatMainText(`선택하신 <b>${dateOfWhat}의</b>`)}</span>
        {formatMainText("날짜와 시간을 정해주세요!")}
      </div>

      <div className="flex h-fit w-full flex-col">
        <div className="flex min-h-[30px] w-full items-end justify-center whitespace-pre font-default text-[10px]">
          {formatMainText("<b>최소</b> 1시간 / <b>최대</b> 3시간")}
        </div>

        <div className="relative flex h-[390px] w-full">
          <div className="absolute left-1/2 top-0 flex h-fit w-full -translate-x-1/2 flex-col items-center">
            <div className="flex h-fit w-full items-center justify-center pt-[10px]">
              <STCLCalendar setDateSelected={setDateSelected} />
            </div>

            <div className="h-[70px] w-full overflow-x-auto py-[20px]">
              {dateSelected ? (
                <div className="flex h-full w-fit items-center gap-[15.12px] px-[10px]">
                  <TimeSlot />
                  <TimeSlot />
                  <TimeSlot />
                  <TimeSlot />
                  <TimeSlot />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
