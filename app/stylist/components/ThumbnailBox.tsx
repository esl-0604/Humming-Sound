"use client";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { useRecoilState } from "recoil";

export default function ThumbnailBox() {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  return (
    <div className="h-393px relative w-full">
      <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />
      <img
        src={stylists["testStylist"].thumbnail}
        alt="stylistThumbnail"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
