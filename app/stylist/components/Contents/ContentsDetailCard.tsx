import Image from "next/image";
import BLOCK from "@/public/images/stylistintroduce/block.svg";

import { contentType } from "@/app/utils/atom/stylistTestData";

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

      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[5px] bg-[#222222]">
        <Image
          src={images[0]}
          alt="image"
          className="h-full w-full object-cover"
          width={480}
          height={1500}
        />
      </div>
    </div>
  );
}
