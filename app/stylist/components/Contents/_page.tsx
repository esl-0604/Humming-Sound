"use client";

import { useRecoilState } from "recoil";
import Image from "next/image";
import StickyBarV2 from "./stickyBar_v2";
import ContentsDetailCard from "./contentsDetailCard";
import { useRouter } from "next/navigation";
import ARROW from "@/public/images/Arrow/bigArrow.svg";
import { contentsType } from "@/app/utils/atom/stylistTestData";

interface Props extends contentsType {}

export default function ContentsDetail() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#161616] text-[#E8E8E8]">
      <div
        className="sticky top-[13px] z-40 h-0 w-full cursor-pointer bg-blue-600 px-[13px]"
        onClick={() => {
          // if (showContentDetail) setShowContentDetail(false);
          // else router.back();
          router.back();
        }}
      >
        <Image src={ARROW} alt="arrow" className="" />
      </div>
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
  );
}
