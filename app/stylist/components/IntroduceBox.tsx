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
import React, { useEffect, useRef, useState } from "react";
import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import { formatHilightText } from "@/app/utils/function/formatHilightText";

interface Props {
  stylistKey: string;
}

export default function IntroduceBox({ stylistKey }: Props) {
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey];
  const [open, setOpen] = useState<boolean>(false);
  const [focusedDiv, setFocusedDiv] = useState<number>(0);
  const [overFlowed, setOverFlowed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      const targetElement = ref.current?.children[focusedDiv];
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    } else {
      // console.log(ref.current?.offsetWidth);
      // console.log(ref.current?.scrollWidth);
      if (ref.current?.offsetWidth && ref.current?.scrollWidth)
        if (ref.current?.offsetWidth < ref.current?.scrollWidth)
          setOverFlowed(true);
        else setOverFlowed(false);
    }
  }, [open]);

  return (
    <div className="flex w-full flex-col pb-[60px]">
      <div className="flex w-full flex-col px-[30px]">
        <div className="relative flex w-full justify-center pt-[39px]">
          <div className="relative h-[143px] w-[143px] overflow-hidden rounded-full bg-[#222222] shadow-lg">
            <Image
              src={stylist.profile}
              alt="profile"
              className="h-full w-full object-cover"
              width={143}
              height={143}
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

      <div
        className="relative flex w-full flex-col items-center px-[21.5px]"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div className="mb-[10px] h-[1px] w-[100px] bg-[#E8E8E8]" />
        {open ? null : (
          <>
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
          </>
        )}

        <div
          ref={ref}
          className={`relative flex w-full items-center gap-[10px] ${
            open
              ? "flex-col"
              : `h-[200px]  ${
                  overFlowed
                    ? "justify-start overflow-x-scroll"
                    : "justify-center"
                }`
          }`}
        >
          {stylist.personalImageList.map((list: string, idx: number) => {
            return (
              <div
                key={idx}
                onClick={() => setFocusedDiv(idx)}
                className={`relative flex-none overflow-hidden rounded-[5px] bg-[#222222]  ${
                  open ? "w-full" : "h-full w-[110px]"
                }`}
              >
                {open ? null : (
                  <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />
                )}

                <Image
                  src={list}
                  alt="image"
                  className="h-full w-full object-cover"
                  width={480}
                  height={800}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
