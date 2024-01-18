import { useContext, useState } from "react";
import ContentsDetail from "./contentsDetail";
import { useRecoilState } from "recoil";

import { useRouter } from "next/navigation";
import { contentsType } from "@/app/utils/atom/stylistTestData";
import { ShowContentsDetail } from "@/app/utils/atom/showContentsDetail";
import { formatHilightText } from "@/app/utils/function/formatHilightText";
import { ContentContext } from "../../context";

interface Props extends contentsType {}

export default function ContentsCard({ id, title, text, image }: Props) {
  const { showContentDetail, setShowContentDetail } =
    useContext(ContentContext);
  const [showContentData, setShowContentData] =
    useRecoilState(ShowContentsDetail);

  const router = useRouter();
  return (
    <>
      {showContentDetail ? <ContentsDetail /> : null}
      <div
        className="relative mt-[20px] h-[200px] w-full min-w-[280px] cursor-pointer"
        onClick={() => {
          // setShowContentDetail(true);
          setShowContentData({
            stylistId: "testStylist",
            contentId: id,
          });
          // router.push("./stylist/Contents");
        }}
      >
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[5px]">
          <img src={image} alt="image" className="h-full w-full object-cover" />
        </div>

        <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-b from-[#161616]" />
        <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />

        <div className="absolute left-[10px] top-[10px] z-20 h-[12px] whitespace-nowrap font-highlight text-[15px]">
          #{id + 1}
        </div>
        <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-[24.91px] w-full flex-nowrap items-center justify-center font-main text-[18.327px]">
            {formatHilightText(title)}
          </div>
          <div className="flex h-[20px] w-full items-center justify-center text-[12.22px] font-extralight">
            {text}
          </div>
        </div>
      </div>
    </>
  );
}
