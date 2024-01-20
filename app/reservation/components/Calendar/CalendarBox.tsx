"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import WHEN from "@/public/images/reservation/when.svg";
import Image from "next/image";
import { formatMainText } from "@/app/utils/function/formatMainText";
import STCLCalendar from "./STCLCalendar";
import TimeSlot from "./TimeSlot";

interface Props {}

export default function CalendarBox({}: Props) {
  return (
    <div className="flex h-fit w-full flex-col text-[#E8E8E8]">
      <Image src={BLOCK} alt="block" />

      <div className="mb-[15px] mt-[10px] flex h-[30px] w-full items-center px-[10px] ">
        <Image src={WHEN} alt="when" />
      </div>

      <div className="flex min-h-[45px] w-full flex-col font-default text-[15px] leading-[20px]">
        <span>{formatMainText("선택하신 <b>대면 컨설팅의</b>")}</span>
        {formatMainText("날짜와 시간을 정해주세요!")}
      </div>

      <div className="flex h-fit w-full flex-col">
        <div className="flex min-h-[30px] w-full items-end justify-center whitespace-pre font-default text-[10px]">
          {formatMainText("<b>최소</b> 1시간 / <b>최대</b> 3시간")}
        </div>

        <div className="relative flex h-[390px] w-full">
          <div className="absolute left-1/2 top-0 flex h-fit w-full -translate-x-1/2 flex-col items-center">
            <div className="flex h-fit w-full items-center justify-center pt-[10px]">
              <STCLCalendar />
            </div>

            <div className="h-[70px] w-full overflow-x-auto py-[20px]">
              <div className="flex h-full w-[1000px] items-center gap-[15.12px]">
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
                <TimeSlot />
              </div>
            </div>
          </div>
        </div>

        <div className="h-[500px] w-full"></div>
      </div>
    </div>
  );
}
