import Image from "next/image";
import { useState } from "react";
import OpenedReviewCard from "./openedReviewCard";
import { reviewType } from "@/app/utils/atom/stylistTestData";

export default function ReviewCard({
  reviewer,
  date,
  grade,
  comment,
  imageList,
}: reviewType) {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setOpen(!open);
      }}
    >
      {open ? (
        <OpenedReviewCard
          reviewer={reviewer}
          date={date}
          grade={grade}
          comment={comment}
          imageList={imageList}
        />
      ) : (
        <div className="flex h-[95px] max-h-[95px] w-full cursor-pointer pt-[10px] shadow-md">
          <div className="flex h-full flex-1 flex-col">
            <div className="mb-[5px] flex h-[15px] w-full items-center font-highlight text-[15px]">
              {reviewer}
            </div>
            <div className="mb-[20px] flex h-[10px] w-full items-center font-main text-[10px] opacity-[0.75]">
              {date}
            </div>
            <div
              className="flex h-[30px] w-full items-center pr-[23px] font-main text-[10px] opacity-[0.75]"
              style={{
                overflow: "hidden",
                whiteSpace: "normal",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {comment}
            </div>
          </div>

          <div className="flex h-full w-[60px] flex-col whitespace-nowrap pt-[5px]">
            <div className="flex h-[15px] w-full items-start  justify-end text-[10px] font-extralight">
              <span className="whitespace-pre font-main ">{grade} 점 </span>/
              5.0 점
            </div>
            <div className="flex h-[60px] w-full items-center justify-center overflow-hidden rounded-[5px] bg-white">
              <img
                className="h-full w-full object-cover"
                src={imageList[0]}
                alt="image"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
