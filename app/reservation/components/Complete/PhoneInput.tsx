"use client";

import Lottie from "lottie-react";
import ESSENTIAL from "@/public/gif/reservation/popup/essential.json";
import NOCONTENTS from "@/public/gif/reservation/popup/nocontents.json";
import OPTIONAL from "@/public/gif/reservation/popup/optional.json";
import { useContext, useEffect, useState } from "react";
import { formatMainText } from "@/app/utils/function/formatMainText";
import { useRecoilState } from "recoil";
import { popUp } from "@/app/utils/atom/popUp";

interface Props {}

export default function PopUp({}: Props) {
  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 top-0 z-40 bg-black opacity-50 " />
      <div className="fixed left-1/2 top-1/2 z-50 flex h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-[48px] bg-[rgba(0,0,0,0.10)] text-[#E8E8E8] shadow-button2 backdrop-blur-[7.5px]">
        <div className="flex h-full w-full flex-col items-center justify-between px-[25px] pb-[24px] pt-[47px]">
          <div className="flex h-[40px] w-full flex-col items-center justify-center text-[12px]">
            <span className="flex w-full justify-center">예약 진행을 위해</span>
            <span className="flex w-full justify-center">
              {formatMainText("<b>전화번호 입력이</b> 필요합니다!")}
            </span>
          </div>

          <div className="relative flex h-[33px] w-full items-center bg-[rgba(255,255,255,0.01)] pl-[17px] shadow-button3">
            <input />
            <div className="absolute right-0 top-1/2 flex h-full w-[33px] -translate-y-1/2 transform items-center justify-center rounded-full bg-[rgba(255,255,255,0.01)] shadow-button3">
              {">"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
