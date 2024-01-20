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

      <div className="mb-[30px] mt-[10px] flex h-[30px] w-full items-center px-[10px]">
        <Image src={DONE} alt="when" />
      </div>

      <div className="flex w-full flex-1 flex-col items-center">
        <div className="mb-[30px] h-[100px] w-[100px]">
          <Lottie animationData={FIRE} />
        </div>

        <div className="flex h-[15px] w-full justify-center opacity-30">
          <Image src={UPQUOTES} alt="upquotes" />
        </div>

        <div className="flex w-full flex-col items-center justify-center font-default text-[13px]">
          <span className="flex h-[15px] w-full items-center justify-center">
            스타일링이 성공적으로 신청되었어요!
          </span>
          <span className="flex h-[15px] w-full items-center justify-center">
            아래 버튼을 누르고
            <span className="font-main">진행중인 과정을 확인해보세요.</span>
          </span>
          <span className="flex h-[15px] w-full items-center justify-center">
            -
          </span>
          <span className="flex h-[15px] w-full items-center justify-center">
            최대 24시간 내에 입금 확인 후 최종 일정이 확정됩니다!
          </span>
          <span className="flex h-[15px] w-full items-center justify-center font-main">
            맞춤형 리포트로 금방 찾아올게요.
          </span>
          <span className="flex h-[15px] w-full items-center justify-center">
            감사합니다!
          </span>
        </div>

        <div className="mb-[100px] flex h-[15px] w-full justify-center opacity-30">
          <Image src={DOWNQUOTES} alt="downquotes" />
        </div>

        <div className="flex w-full flex-col items-center justify-center pb-[74px] font-default text-[13px]">
          <span className="flex h-[15px] w-full items-center justify-center font-main">
            고려은행 123-456-7890 박진수
          </span>
          <span className="flex h-[15px] w-full items-center justify-center">
            24시간 시간 내에 입금 확인이 되지 않으면
          </span>
          <span className="flex h-[15px] w-full items-center justify-center font-main">
            예약이 취소됩니다.
          </span>
        </div>
      </div>
    </div>
  );
}
