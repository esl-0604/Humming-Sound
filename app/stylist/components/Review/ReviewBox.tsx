"use client";
import { useRecoilState, useRecoilValue } from "recoil";
import ReviewCard from "./ReviewCard";
import { useEffect, useRef, useState } from "react";
import {
  reviewType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";

interface Props {
  stylistKey: string;
}

export default function ReviewBox({ stylistKey }: Props) {
  const stylists = useRecoilValue<stylistType>(stylistData);
  const stylist = stylists[stylistKey];
  const [openCard, setOpenCard] = useState<number>(-1);
  const ref = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (openCard) {
  //     const targetElement = ref.current?.children[openCard];
  //     if (targetElement) {
  //       console.log(targetElement);
  //       targetElement.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   }
  // }, [openCard]);

  return (
    <div
      ref={ref}
      className="flex w-full flex-col px-[30px] pb-[110px] pt-[10px] text-[#E8E8E8] "
    >
      {stylist.reviewList.length === 0 ? (
        <div className="flex w-full flex-col items-center justify-center py-[25px]">
          <span className="font-highlight text-[18.33px]">
            이런! 아직 작성된 후기가 없어요.
          </span>
          <span className="font-default text-[12.22px]">
            첫 후기, 직접 적어주시겠어요? 기다릴게요!
          </span>
        </div>
      ) : (
        stylist.reviewList.map((review: reviewType, idx: number) => {
          return (
            <div
              key={idx}
              onClick={() => {
                if (openCard === idx) setOpenCard(-1);
                else setOpenCard(idx);
              }}
            >
              <ReviewCard
                open={openCard === idx}
                reviewer={review.reviewer}
                date={review.date}
                grade={review.grade}
                comment={review.comment}
                imageList={review.imageList}
              />
            </div>
          );
        })
      )}
    </div>
  );
}
