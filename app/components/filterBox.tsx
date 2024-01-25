"use client";

import Image from "next/image";

export default function FilterBox() {
  return (
    <div className="relative mb-[30px] flex h-[30px] w-full flex-row items-center justify-between bg-[#161616]">
      <div className="absolute left-[20px] z-10 flex h-[30px] w-[69px] flex-row items-center justify-between rounded-[15px] bg-[#161616] pl-[14px] pr-[10px] shadow-button1">
        <p className="flex items-center justify-center font-main text-[10px] text-[#E8E8E8]">
          인기순
        </p>
        <Image
          className="z-20"
          src="/images/toggleClosed.svg"
          alt="toggleClosed"
          width={7}
          height={10}
        />
      </div>
      <div className="absolute right-[20px] z-10 flex h-[30px] w-[185px] flex-row items-center justify-between rounded-[15px] bg-[#161616] px-[10px] shadow-button1">
        <p className="right-[20px] z-20 flex h-[20px] w-[45px] items-center justify-center rounded-[15px] border-[0.71px] border-[#E8E8E8] font-main text-[10px] text-[#E8E8E8]">
          따듯한
        </p>
        <p className="right-[20px] z-20 flex h-[20px] w-[45px] items-center justify-center rounded-[15px] border-[0.71px] border-[#E8E8E8] font-main text-[10px] text-[#E8E8E8]">
          귀여운
        </p>
        <p className="right-[20px] z-20 flex h-[20px] w-[45px] items-center justify-center rounded-[15px] border-[0.71px] border-[#E8E8E8] font-main text-[10px] text-[#E8E8E8]">
          포근한
        </p>
        <Image
          className="z-20"
          src="/images/toggleClosed.svg"
          alt="toggleClosed"
          width={7}
          height={10}
        />
      </div>
    </div>
  );
}
