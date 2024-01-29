import Image from "next/image";
import { useRecoilValue } from "recoil";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { formatHilightText } from "@/app/utils/function/formatHilightText";
import { useSearchParams } from "next/navigation";

interface Props {
  id: number | undefined;
  image: string | undefined;
  title: string | undefined;
  text: string | undefined;
  type: string | undefined;
}

export default function ContentsDetailTitleCard({
  id,
  image,
  title,
  text,
  type,
}: Props) {
  return (
    <div className="mt-[10px] flex w-full min-w-[280px] flex-col gap-[10px]">
      <div className="relative h-[200px] w-full cursor-pointer">
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[5px] bg-[#222222]">
          <Image
            src={image ? image : ""}
            alt="image"
            className="h-full w-full object-cover"
            width={480}
            height={200}
          />
        </div>

        <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-b from-[#161616]" />
        <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />

        <div className="absolute left-[10px] top-[10px] z-20 h-[12px] whitespace-nowrap font-highlight text-[15px]">
          #{id ? id + 1 : 0 + 1}
        </div>
        <div className="absolute left-0 top-0 z-20 flex h-full w-full flex-col items-center justify-center">
          <div className="flex h-[24.91px] w-full flex-nowrap items-center justify-center font-main text-[18.327px]">
            {formatHilightText(title ? title : "")}
          </div>
          <div className="flex h-[20px] w-full items-center justify-center text-[12.22px] font-extralight">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
}
