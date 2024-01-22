"use client";

import Lottie from "lottie-react";
import ESSENTIAL from "@/public/gif/reservation/popup/essential.json";
import NOCONTENTS from "@/public/gif/reservation/popup/nocontents.json";
import OPTIONAL from "@/public/gif/reservation/popup/optional.json";
import { useContext, useEffect, useState } from "react";
import { formatMainText } from "@/app/utils/function/formatMainText";
import { ReservationContext } from "../context";

interface Props {
  type: string;
}

export default function PopUp({ type }: Props) {
  const { popUp, setPopUp } = useContext(ReservationContext);
  const [text, setText] = useState<string[]>([]);

  const essentialText = "선택 되지 않은\n<b>필수 옵션*</b>을 확인해주세요!";
  const optionalText =
    "<b>만족도 높은 선택 옵션들</b>이\n아직 고객님을 기다리고 있어요!";
  const nocontentsText = "준비중입니다.\n<b>더 나은 서비스로</b> 찾아올게요!";

  useEffect(() => {
    if (type === "필수") setText(essentialText.split("\n"));
    else if (type === "옵션") setText(optionalText.split("\n"));
    else setText(nocontentsText.split("\n"));
  }, []);

  return (
    <>
      <div
        className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-transparent"
        onClick={() => setPopUp({ pop: false, type: "필수" })}
      />
      <div className="fixed left-1/2 top-1/2 z-50 flex h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-[48px] bg-[rgba(0,0,0,0.10)] text-[#E8E8E8] shadow-button2 backdrop-blur-[7.5px]">
        <div className="flex h-[140px] w-full items-center justify-center px-[50px] pb-[12px] pt-[28px]">
          <Lottie
            animationData={
              type === "필수"
                ? ESSENTIAL
                : type === "옵션"
                  ? OPTIONAL
                  : NOCONTENTS
            }
          />
        </div>
        <div className="flex h-[59px] w-full flex-col px-[25px] pb-[25px]">
          {text.map((element: string, index: number) => {
            return (
              <span
                key={index}
                className="flex h-[17px] w-full items-center justify-center font-default text-[12px] text-[#E8E8E8]"
              >
                {formatMainText(element)}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}
