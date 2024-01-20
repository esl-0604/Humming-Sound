"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import ABOUTME from "@/public/images/stylistintroduce/aboutMe.svg";
import FORWHO from "@/public/images/stylistintroduce/forWho.svg";
import PHILLOSOPHY from "@/public/images/stylistintroduce/stylingPhillosophy.svg";
import UPQUOTES from "@/public/images/stylistintroduce/upQuotes.svg";
import DOWNQUOTES from "@/public/images/stylistintroduce/downQuotes.svg";
import ARROW from "@/public/images/Arrow/smallArrow.svg";
import DONUT from "@/public/images/stylistintroduce/donut.svg";
import Image from "next/image";
import { useRecoilState } from "recoil";
import React from "react";
import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { formatHilightText } from "@/app/utils/function/formatHilightText";

interface Props {
  stylistKey: string;
}

export default function IntroduceBox({ stylistKey }: Props) {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey];
  return (
    <div className="flex w-full flex-col pb-[60px]">
      <div className="flex w-full flex-col px-[30px]">
        <div className="relative flex w-full justify-center pt-[39px]">
          <div className="relative h-[143px] w-[143px] overflow-hidden rounded-full shadow-lg">
            <img
              src={stylist.profile}
              alt="profile"
              className="h-full w-full object-cover"
            />
            <Image
              src={DONUT}
              alt="donut"
              className="absolute left-[0px] top-[0px]"
            />
          </div>

          <Image src={BLOCK} alt="block" className="absolute bottom-0 left-0" />
        </div>

        <div className="flex w-full flex-col pb-[15px] pt-[10px]">
          <div className="flex h-[60px] items-center pb-[5px]">
            <Image src={ABOUTME} alt="aboutme" />
          </div>

          {stylist.aboutMe.map((list: string, idx: number) => {
            return (
              <div
                key={idx}
                className="flex min-h-[30px] w-full items-center text-[15px] font-extralight"
              >
                : {list}
              </div>
            );
          })}
        </div>

        <Image src={BLOCK} alt="block" />

        <div className="flex w-full flex-col pb-[15px] pt-[10px]">
          <div className="flex h-[60px] items-center pb-[5px]">
            <Image src={FORWHO} alt="forwho" />
          </div>

          {stylist.forWho.map((list: string, idx: number) => {
            return (
              <div
                key={idx}
                className="flex min-h-[30px] w-full items-center text-[15px] font-extralight"
              >
                : {list}
              </div>
            );
          })}
        </div>

        <Image src={BLOCK} alt="block" />

        <div className="flex w-full flex-col pb-[15px] pt-[10px]">
          <div className="flex h-[60px] items-center">
            <Image src={PHILLOSOPHY} alt="phillosophy" />
          </div>
          <div className="flex w-full flex-col items-center py-[15px]">
            <div className="flex h-[15px] items-end pb-[5px]">
              <Image src={UPQUOTES} alt="upquotes" />
            </div>

            {stylist.phillosophy.map((list: string, idx: number) => {
              const result = formatHilightText(list);
              return (
                <div
                  key={idx}
                  className="flex min-h-[30px] w-full min-w-[250px] items-center text-[15px] font-extralight"
                >
                  {result}
                </div>
              );
            })}

            <div className="flex h-[15px] items-end pb-[5px]">
              <Image src={DOWNQUOTES} alt="downquotes" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex h-[211px] w-full flex-col items-center px-[21.5px]">
        <div className="mb-[10px] h-[1px] w-[100px] bg-[#E8E8E8]" />
        <Image
          src={ARROW}
          alt="leftarrow"
          className="absolute left-[30px] top-[106.5px] z-20 cursor-pointer"
        />
        <Image
          src={ARROW}
          alt="rightarrow"
          className="absolute right-[30px] top-[106.5px] z-20 rotate-180 cursor-pointer"
        />

        <div className="relative flex h-[200px] w-full gap-[10px] overflow-x-scroll">
          {stylist.personalImageList.map((list: string, idx: number) => {
            return (
              <div
                key={idx}
                className="relative h-full w-[110px] flex-none rounded-[5px]"
              >
                <div className="to-[#161616]-0% absolute top-0 z-10 h-[200px] w-[110px] bg-gradient-to-t from-[#161616]" />
                <img
                  src={list}
                  alt="image"
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
