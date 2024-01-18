"use client";
import { useRecoilState } from "recoil";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import {
  reviewType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";

export default function ReviewBox() {
  const [open, setOpen] = useState(false);
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);

  return (
    <div className="flex w-full flex-col px-[30px] py-[10px]">
      {stylists["testStylist"].reviewList.map(
        (review: reviewType, idx: number) => {
          return (
            <ReviewCard
              key={idx}
              reviewer={review.reviewer}
              date={review.date}
              grade={review.grade}
              comment={review.comment}
              imageList={review.imageList}
            />
          );
        },
      )}
    </div>
  );
}
