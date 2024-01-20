"use client";

import { useRecoilState } from "recoil";
import Image from "next/image";
import StickyBarV2 from "./StickyBar_v2";
import ContentsDetailCard from "./ContentsDetailCard";
import { contentsType } from "@/app/utils/atom/stylistTestData";

interface Props extends contentsType {}

export default function ContentsDetail() {
  return (
    <div className="absolute left-0 top-0 z-30 h-fit min-h-screen w-full max-w-[480px]">
      <div className="relative flex h-full w-full flex-col bg-[#161616] text-[#E8E8E8]">
        <StickyBarV2 />

        <div className="flex flex-1 flex-col px-[30px]">
          <ContentsDetailCard title={true} />
          <ContentsDetailCard />
          <ContentsDetailCard />
          <ContentsDetailCard />
          <ContentsDetailCard />
          <ContentsDetailCard />
          <ContentsDetailCard />
          <ContentsDetailCard />
        </div>
      </div>
    </div>
  );
}
