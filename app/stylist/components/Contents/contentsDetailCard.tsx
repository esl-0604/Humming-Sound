import Image from "next/image";
import BLOCK from "@/public/images/stylistintroduce/block.svg";
import { useRecoilState } from "recoil";
import { ShowContentsDetail } from "@/app/utils/atom/showContentsDetail";
import {
  contentsType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";
import { formatText } from "@/app/utils/function/formatText";

interface Props {
  title?: boolean;
}

export default function ContentsDetailCard({ title }: Props) {
  const [showContentData, setShowContentData] =
    useRecoilState(ShowContentsDetail);
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  console.log(stylists);
  console.log(showContentData);
  const showContent: contentsType[] = stylists[
    showContentData.stylistId
  ].contentsList.filter((content: contentsType) => {
    return content.id === showContentData.contentId;
  });
  return (
    <div className="mt-[10px] flex w-full min-w-[280px] flex-col gap-[10px]">
      <div className="relative h-[200px] w-full cursor-pointer">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[5px]">
          <img
            src={showContent[0].image}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>

        {title ? (
          <>
            <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-b from-[#161616]" />
            <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />

            <div className="absolute left-[10px] top-[10px] z-20 h-[12px] whitespace-nowrap font-highlight text-[15px]">
              #{showContentData.contentId + 1}
            </div>
            <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
              <div className="flex h-[24.91px] w-full flex-nowrap items-center justify-center font-main text-[18.327px]">
                {formatText(showContent[0].title)}
              </div>
              <div className="flex h-[20px] w-full items-center justify-center text-[12.22px] font-extralight">
                {showContent[0].text}
              </div>
            </div>
          </>
        ) : null}
      </div>

      <Image src={BLOCK} alt="block" />

      <div className="flex w-full flex-col gap-[5px]">
        <div className="font-highlight text-[30px] ">소제목</div>
        <div className=" w-full text-[10px] font-extralight ">
          본문 텍스트 블럭은 유동적으로.... 블럭 사이사이 간격만 잘 지키면 막
          적어도 이쁠 것 같습니다.
        </div>
      </div>
    </div>
  );
}
