"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import TitleBox from "./TitleBox";
import AudioRecorder from "./RecordButton";

export default function Generate() {
  return (
    <div className="flex h-full w-full flex-col items-start bg-transparent px-[30px] pt-[30px]">
      <TitleBox title={"Style of music"} />
      <textarea
        maxLength={80}
        className="mb-[50px] mt-[10px] box-border h-[100px] w-full resize-none overflow-auto rounded-[15px] border-none bg-[#505050] p-[10px] text-[15px] font-normal text-white focus:outline-none"
      />

      <TitleBox title={"Upload Audio"} />
      <div className="mb-[50px] mt-[10px] flex w-full items-center justify-center">
        <AudioRecorder />
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="custom:w-[100px] flex h-[35px] w-[85px] cursor-pointer  items-center justify-center rounded-[15px] bg-[#505050] font-bold text-white transition-all duration-200 ease-in-out">
          Clear
        </div>

        <div className="custom:w-[250px] flex h-[35px] w-[190px] cursor-pointer items-center justify-center rounded-[15px] bg-[#7AD778] font-bold text-white transition-all duration-200 ease-in-out">
          Generate
        </div>
      </div>
    </div>
  );
}
