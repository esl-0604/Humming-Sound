"use client";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { useRecoilState } from "recoil";

interface Props {
  viewType: string;
  setViewType: React.Dispatch<React.SetStateAction<string>>;
}

export default function StickyBar({ viewType, setViewType }: Props) {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  return (
    <div className="sticky top-0 z-30 flex w-full flex-col whitespace-nowrap bg-[#161616]">
      <div className="flex h-[65px] w-full justify-between px-[30px] pt-[10px]">
        <div className="flex flex-col">
          <div className="flex h-[15px] items-center text-[15px]">
            <span className="font-highlight">
              {stylists["testStylist"].name}
            </span>

            <span className="font-extralight">&nbsp;스타일리스트</span>
          </div>
          <div className="mt-[5px] flex h-[10px] items-center font-main text-[10px] ">
            {"미니멀한 당신을 위해"}
          </div>
        </div>

        <div className="flex flex-col items-end gap-[1px] pt-[5px] ">
          <div className="flex h-[12px] items-center text-[10px] font-extralight">
            <span className="font-main">
              {stylists["testStylist"].avgGrade} 점
            </span>
            &nbsp;/ 5.0 점
          </div>
          <div className="flex h-[12px] items-center text-[10px] font-extralight">
            <span className="font-main">
              {stylists["testStylist"].consultingAmount} 회
            </span>
            &nbsp;스타일링
          </div>
        </div>
      </div>
      <div className="flex h-[46px] w-full items-center">
        <div
          className={`flex h-full flex-1 cursor-pointer items-center justify-center border-b border-[#E8E8E8] text-[16px]  ${
            viewType === "소개"
              ? "font-highlight"
              : "border-opacity-30 font-extralight "
          }`}
          onClick={() => setViewType("소개")}
        >
          소개
        </div>
        <div
          className={`flex h-full flex-1 cursor-pointer items-center justify-center border-b border-[#E8E8E8] text-[16px]  ${
            viewType === "후기"
              ? "font-highlight"
              : "border-opacity-30 font-extralight "
          }`}
          onClick={() => setViewType("후기")}
        >
          후기
        </div>{" "}
        <div
          className={`flex h-full flex-1 cursor-pointer items-center justify-center border-b border-[#E8E8E8] text-[16px]  ${
            viewType === "컨텐츠"
              ? "font-highlight"
              : "border-opacity-30 font-extralight "
          }`}
          onClick={() => setViewType("컨텐츠")}
        >
          컨텐츠
        </div>
      </div>
    </div>
  );
}
/* nameCard2 */
