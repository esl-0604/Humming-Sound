"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import DONE from "@/public/images/reservation/done.svg";
import FIRE from "@/public/gif/reservation/done/firecracker.json";
import UPQUOTES from "@/public/images/stylistintroduce/upQuotes.svg";
import DOWNQUOTES from "@/public/images/stylistintroduce/downQuotes.svg";
import Image from "next/image";
import Lottie from "lottie-react";

interface Props {}

export default function CompleteBox({}: Props) {
  return (
    <div className="flex h-fit w-full flex-col text-[#E8E8E8]">
      <Image src={BLOCK} alt="block" />

      <div className="mb-[30px] mt-[10px] flex h-[30px] w-full items-center px-[10px] font-branding text-[30px] font-normal">
        <Image src={DONE} alt="done" />
      </div>

      <div className="flex w-full flex-1 flex-col items-center">
        <div className="mb-[30px] h-[100px] w-[100px]">
          <Lottie animationData={FIRE} />
        </div>

        <div className="flex h-[15px] w-full justify-center opacity-30">
          <Image src={UPQUOTES} alt="upquotes" />
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[1.5px] py-[5px] font-default text-[13px]">
          <span className="flex h-[15px] w-full items-center justify-center">
            스타일링이 성공적으로 신청되었어요!
          </span>
          <span className="flex h-[15px] w-full items-center justify-center font-main">
            <span className="whitespace-pre font-branding">STCL </span>
            리포트로 금방 찾아올게요.
          </span>
          <span className="flex h-[15px] w-full items-center justify-center">
            -
          </span>
          <span className="flex h-[15px] w-full items-center justify-center font-main">
            기업은행 97302133301011 안수영
          </span>
          <span className="flex h-[15px] w-full items-center justify-center">
            24시간 시간 내에 입금 확인이 되지 않으면
          </span>
          <span className="flex h-[15px] w-full items-center justify-center font-main">
            예약이 취소됩니다.
          </span>
        </div>

        <div className="mb-[100px] flex h-[15px] w-full justify-center opacity-30">
          <Image src={DOWNQUOTES} alt="downquotes" />
        </div>
      </div>
    </div>
  );
}
