"use client";

import Lottie from "lottie-react";
import React, { useEffect, useRef, useState } from "react";
import { addCommasToNumber } from "@/app/utils/function/addCommasToNumber";
import { formatMainText } from "@/app/utils/function/formatMainText";

interface Props {
  card: string;
  RowId: number;
  title: string;
  cost: number;
  memo: string;
  byHour: boolean;
  gifUrl: object;
}

export default function ProductRow({
  card,
  RowId,
  title,
  cost,
  memo,
  byHour,
  gifUrl,
}: Props) {
  const [select, setSelected] = useState<boolean>(false);
  const resultArray = memo.split("\n");
  const lottieRef = useRef<any>();
  const titleList = title.split("\n");

  useEffect(() => {
    if (!select) lottieRef.current.stop();
    else lottieRef.current.play();
  }, [select]);

  return (
    <div
      className={`flex h-fit w-full gap-[30px] ${select ? "" : "opacity-50"}`}
      onClick={() => setSelected(!select)}
    >
      <div className="ml-[4px] flex w-[50px] flex-col gap-[10px] text-[#E8E8E8] ">
        <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden">
          <Lottie animationData={gifUrl} lottieRef={lottieRef} />
        </div>
        <div
          className={`flex h-[16px] w-full  flex-col items-center justify-center text-[13.15px] leading-[100%] ${select ? "font-highlight" : "font-main"}`}
        >
          {titleList.map((list: string, index: number) => {
            const formatText = formatMainText(list);
            return (
              <span key={index} className="whitespace-nowrap ">
                {formatText}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col font-main ">
        <div className="mb-[2px] flex h-[20px] items-center text-[10px]">
          <span className="flex h-full w-[10px] items-center">₩</span>
          <span className="flex h-full w-[40px] items-center justify-end">
            {byHour ? "+" : null}
            {addCommasToNumber(cost)}
          </span>
          {byHour ? <span className="font-default">/h</span> : null}
        </div>

        <div className="flex flex-1 flex-col justify-center font-default text-[10px] leading-[16.157px] opacity-75 ">
          {resultArray.map((list: string, index: number) => {
            const formatText = formatMainText(list);
            return <span key={index}>{formatText}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
