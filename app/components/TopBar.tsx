"use client";

import React from "react";

export default function TopBar() {
  return (
    <div className="flex h-[54px] w-full flex-row items-center justify-between bg-transparent px-[22px] text-white">
      <div className="flex h-[18px] items-center text-[18px] font-bold">
        Humming Sound
      </div>
      <div className="flex h-[18px] items-center text-[15px] font-normal">
        413 credits
      </div>
    </div>
  );
}
