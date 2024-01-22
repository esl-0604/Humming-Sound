"use client";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { useRecoilState } from "recoil";

interface Props {
  stylistKey: string;
}
export default function ThumbnailBox({ stylistKey }: Props) {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey];

  return (
    <div className="relative flex w-full items-start overflow-hidden">
      <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />
      <img
        src={stylist.thumbnail}
        alt="stylistThumbnail"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
