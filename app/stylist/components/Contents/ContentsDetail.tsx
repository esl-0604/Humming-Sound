"use client";

import { useSearchParams } from "next/navigation";
import ContentsDetailCard from "./ContentsDetailCard";
import {
  contentType,
  contentsType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";
import { useRecoilState } from "recoil";
import ContentsDetailTitleCard from "./ContentsDetailTitle.Card";

interface Props extends contentsType {}

export default function ContentsDetail() {
  const stylistKey = useSearchParams().get("stylistKey");
  const contentId = useSearchParams().get("contentId");
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const StylistContent = stylists[
    stylistKey ? stylistKey : "testStylist"
  ].contentsList.find((contents) => contents.id === Number(contentId));
  // console.log(StylistContent);

  return (
    <div className="relative flex h-full w-full flex-col bg-[#161616] pb-[60px] text-[#E8E8E8]">
      <div className="flex flex-1 flex-col px-[30px]">
        <ContentsDetailTitleCard
          id={StylistContent?.id}
          image={StylistContent?.image}
          title={StylistContent?.title}
          text={StylistContent?.text}
          type={StylistContent?.type}
        />
        {StylistContent?.content?.map((content: contentType, index: number) => {
          return (
            <ContentsDetailCard
              subTitle={content.subTitle}
              content={content.content}
              images={content.images}
            />
          );
        })}
      </div>
    </div>
  );
}
