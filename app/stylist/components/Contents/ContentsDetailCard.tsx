import Image from "next/image";
import BLOCK from "@/public/images/stylistintroduce/block.svg";
import { useRecoilState } from "recoil";

import {
  contentType,
  contentsType,
  stylistData,
  stylistType,
} from "@/app/utils/atom/stylistTestData";
import { formatHilightText } from "@/app/utils/function/formatHilightText";
import { useSearchParams } from "next/navigation";

interface Props extends contentType {}

export default function ContentsDetailCard({
  subTitle,
  content,
  images,
}: Props) {
  return (
    <div className="mt-[100px] flex w-full min-w-[280px] flex-col gap-[10px]">
      <Image src={BLOCK} alt="block" />

      <div className="flex w-full flex-col gap-[5px]">
        <div className="font-highlight text-[30px] ">{subTitle}</div>
        <div className=" w-full text-[12px] font-extralight ">{content}</div>
      </div>

      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[5px]">
        <img
          src={images[0]}
          alt="image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
