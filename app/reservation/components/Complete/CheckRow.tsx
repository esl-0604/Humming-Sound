"use client";

import Lottie from "lottie-react";
import React from "react";
import { addCommasToNumber } from "@/app/utils/function/addCommasToNumber";
import { formatMainText } from "@/app/utils/function/formatMainText";
import { insertNewline } from "@/app/utils/function/insertNewline";
import { CheckRowType } from "./CheckBox";
import { getWorkingHours } from "@/app/utils/function/getWorkingHours";

interface Props extends CheckRowType {}

export default function CheckRow({
  title,
  type,
  gif,
  price,
  memo,
  count,
  date,
  timeslots,
}: Props) {
  const memoList = memo.split("\n");
  const titleList = insertNewline(title).split("\n");
  return (
    <div className={`flex h-fit w-full cursor-pointer gap-[30px]`}>
      <div className="ml-[4px] flex w-[50px] flex-col gap-[10px] text-[#E8E8E8] ">
        <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[10px]">
          <Lottie animationData={gif} />
        </div>
        <div
          className={`flex h-[16px] w-full  flex-col items-center justify-center font-default text-[13.15px] leading-[100%]`}
        >
          {titleList.map((list: string, index: number) => {
            // const formatText = formatMainText(list);
            return (
              <span key={index} className="whitespace-nowrap">
                {/* {formatText} */}
                {list}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center font-main">
        <div className="mb-[2px] flex h-[20px] items-center justify-between text-[12px]">
          {/* {price > 0 ? (
            <div className="flex h-full items-center">
              <span className="mr-[7px] flex h-full w-[10px] items-center ">
                ₩
              </span>
              <span className="flex h-full items-center justify-end">
                {type !== "total" ? "+" : null}
                {addCommasToNumber(price)}
              </span>
              {type === "byHour" ? (
                <span className="font-default">/h</span>
              ) : type === "byEA" ? (
                <span className="font-default">/개</span>
              ) : null}
            </div>
          ) : (
            <div className="flex h-full items-center px-[10px]">기본 제공</div>
          )} */}
          {type === "byEA" ? (
            <div className="mr-[10px] flex h-full w-[20px] items-center justify-center rounded-[5px] bg-[rgba(255,255,255,0.01)] font-main shadow-button3">
              {count}장
            </div>
          ) : type === "byHour" ? (
            <div className="mr-[10px] flex h-full items-center justify-center rounded-[5px] bg-[rgba(255,255,255,0.01)] font-main shadow-button3">
              {date.slice(2) +
                " " +
                getWorkingHours(timeslots)[0].replace(/ ~ /g, "~")}{" "}
              &#40;{timeslots.length}시간&#41;
            </div>
          ) : null}
        </div>
        {type === "byEA" ? (
          <div className="font-branding text-[24px]">
            {addCommasToNumber(count * price)}{" "}
            <span className="text-[12px]">&#8361;</span>
          </div>
        ) : type === "byHour" ? (
          <div className="font-branding text-[24px]">
            {addCommasToNumber(timeslots.length * price)}{" "}
            <span className="text-[12px]">&#8361;</span>
          </div>
        ) : null}

        {/* <div className="flex flex-1 flex-col justify-center font-default text-[11px] leading-[16.157px] opacity-75 ">
          {memoList.map((list: string, index: number) => {
            const formatText = formatMainText(list);
            return <span key={index}>{formatText}</span>;
          })}
        </div> */}
      </div>
    </div>
  );
}
