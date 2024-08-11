"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export default function AudioBox() {
  return (
    <div className="flex h-[80px] w-full cursor-pointer flex-row items-start justify-start bg-transparent">
      <div className="mr-[15px] flex h-full w-[70px] rounded-[7px] bg-white" />
      <div className="flex h-full w-full flex-col items-start justify-start">
        <div className="mb-[5px] flex items-center text-[15px] font-bold text-white">
          Untitled
        </div>

        <div className="flex items-center whitespace-pre-wrap pr-[50px] text-[10px] font-normal text-white">
          Make a jazzy song. Repeat same melody every 5 seconds. Key: Major C
          chord
        </div>
      </div>
    </div>
  );
}
