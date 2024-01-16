"use client";

import { ShowContentsDetail } from "@/app/utils/atom/showContentsDetail";
import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { useRecoilState } from "recoil";

interface Props {}

export default function StickyBarV2({}: Props) {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const [showContentData, setShowContentData] =
    useRecoilState(ShowContentsDetail);
  return (
    <div className="sticky top-0 z-30 flex w-full flex-col whitespace-nowrap bg-[#161616]">
      <div className="flex h-[50px] w-full justify-between px-[30px] py-[10px]">
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
    </div>
  );
}
/* nameCard2 */
