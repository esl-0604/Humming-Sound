"use client";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { useRecoilValue } from "recoil";
import Image from "next/image";

interface StylistCardProps {
  stylistKey: string;
}

export default function StylistCard({ stylistKey }: StylistCardProps) {
  const stylists = useRecoilValue<stylistType>(stylistData);
  const stylist = stylists[stylistKey];
  if (!stylist) return null;
  return (
    <div className="flex w-full flex-row items-center justify-start pb-[20px] pt-[10px]">
      <div className="relative h-[60px] w-[60px] overflow-hidden rounded-full bg-[#222222] shadow-lg">
        <Image
          src={stylist.profile}
          alt="profile"
          className="h-full w-full object-cover"
          width={60}
          height={60}
        />
      </div>
      <div className="ml-[20px] flex flex-col items-start justify-center">
        <p className="h-[15px] font-default text-[15px]">
          <span className="font-highlight">{stylist.name}</span> 스타일리스트
        </p>
        <p className="mt-[6px] h-[10px] font-main text-[10px]">
          {stylist.comment}
        </p>
        <p className="mt-[4px] h-[10px] font-main text-[10px]">
          {stylist.instagramId}
        </p>
      </div>
    </div>
  );
}
