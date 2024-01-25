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

  useEffect(() => {
    console.log(param);
    if (!param) {
      const targetElement = ref.current?.children[focusContentId];
      if (targetElement) {
        console.log(targetElement);
        targetElement.scrollIntoView({
          behavior: "instant",
          block: "start",
        });
      }
    }
  }, []);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col items-center overflow-scroll px-[30px] pb-[60px]"
    >
      {stylist?.contentsList.map((content: contentsType, idx: number) => {
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
      })}
    </div>
  );
}
