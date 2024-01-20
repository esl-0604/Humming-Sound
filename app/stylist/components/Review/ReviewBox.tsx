"use client";
import { useRecoilState } from "recoil";
import ReviewCard from "./ReviewCard";
import { useState } from "react";
import {
  reviewType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";

interface Props {
  stylistKey: string;
}

export default function ReviewBox({ stylistKey }: Props) {
  const [open, setOpen] = useState(false);
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey];

  return (
    <div className="flex w-full flex-col px-[30px] py-[10px]">
      {stylist.reviewList.map((review: reviewType, idx: number) => {
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
      })}
    </div>
  );
}
