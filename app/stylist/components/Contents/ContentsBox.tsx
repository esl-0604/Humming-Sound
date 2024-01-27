import {
  contentsType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";
import ContentsCard from "./ContentsCard";
import { useRecoilValue } from "recoil";
import { useEffect, useRef } from "react";
import { ContentId } from "@/app/utils/atom/contentId";
import { useSearchParams } from "next/navigation";

interface Props {
  stylistKey: string;
}

export default function ContentsBox({ stylistKey }: Props) {
  const stylists = useRecoilValue<stylistType>(stylistData);
  const stylist = stylists[stylistKey];
  const param = useSearchParams().get("contentId");

  const focusContentId = useRecoilValue(ContentId);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const targetElement = ref.current?.children[focusContentId];
  //   if (targetElement) {
  //     console.log(targetElement);
  //     targetElement.scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //     });
  //   }
  // }, []);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center overflow-scroll px-[30px] pb-[110px] pt-[10px] text-[#E8E8E8] "
    >
      {stylist?.contentsList.length === 0 ? (
        // <div className="relative flex h-[200px] w-full flex-col items-center justify-center px-[10px]">
        //   <div className="absolute left-[10px] top-[10px] flex h-[12px] items-center justify-center whitespace-nowrap font-branding text-[15px] font-normal">
        //     STCL
        //   </div>
        //   <span className="font-highlight text-[18.33px]">
        //     이런! 아직 발행된 컨텐츠가 없어요.
        //   </span>
        //   <span className="font-default text-[12.22px]">
        //     다른 컨텐츠에 더 좋은 정보가 있을지도 몰라요.
        //   </span>
        // </div>
        <div className="flex w-full flex-col items-center justify-center py-[25px]">
          <span className="font-highlight text-[18.33px]">
            이런! 아직 발행된 컨텐츠가 없어요.
          </span>
          <span className="font-default text-[12.22px]">
            다른 컨텐츠에 더 좋은 정보가 있을지도 몰라요.
          </span>
        </div>
      ) : (
        stylist?.contentsList.map((content: contentsType, idx: number) => {
          return (
            <ContentsCard
              key={idx}
              id={content.id}
              title={content.title}
              text={content.text}
              type={content.type}
              image={content.image}
              link={content.link}
            />
          );
        })
      )}
    </div>
  );
}
