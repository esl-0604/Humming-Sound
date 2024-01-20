"use client";

import ContentsDetailCard from "./ContentsDetailCard";
import { contentsType } from "@/app/utils/atom/stylistTestData";

interface Props extends contentsType {}

export default function ContentsDetail() {
  return (
    <div className="relative flex h-full w-full flex-col bg-[#161616] text-[#E8E8E8]">
      <div className="flex flex-1 flex-col px-[30px]">
        <ContentsDetailCard title={true} />
      </div>
    </div>
  );
}
