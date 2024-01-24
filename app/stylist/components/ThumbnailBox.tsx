"use client";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import Image from "next/image";
import { useRecoilValue } from "recoil";

interface Props {
  stylistKey: string;
}
export default function ThumbnailBox({ stylistKey }: Props) {
  const stylists = useRecoilValue<stylistType>(stylistData);
  const stylist = stylists[stylistKey];

  return (
    <div className="relative flex max-h-[450px] w-full items-start overflow-hidden">
      <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />
      <Image
        src={stylist.thumbnail}
        alt="stylistThumbnail"
        className="h-full w-full object-cover"
        width={480}
        height={450}
      />
    </div>
  );
}
