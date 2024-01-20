"use client";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { useRecoilState } from "recoil";

interface Props {
  stylistKey: string;
}
export default function ThumbnailBox({ stylistKey }: Props) {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey];

  // 이미지 폴더 내의 모든 PNG 파일 가져오기

  return (
    <div className="h-393px relative w-full">
      <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />
      <img
        src={stylist.thumbnail}
        alt="stylistThumbnail"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
