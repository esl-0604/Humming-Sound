"use client";

import { useRecoilState } from "recoil";
import {
  ScrolledButton,
  ScrolledStylistButton,
} from "./utils/atom/scrolledButton";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import ARROW from "@/public/images/toggleClosed.svg";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. 플로팅 버튼 스크롤 감지 ----------------------------------------------
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  const [isStylistScrolled, setIsStylistScrolled] = useRecoilState(
    ScrolledStylistButton,
  );

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      // console.log({
      //   scrollTop: scrollTop,
      //   scrollHeight: scrollHeight,
      //   clientHeight: clientHeight,
      // });
      if (scrollHeight - clientHeight <= scrollTop + 220) {
        setIsStylistScrolled(true);
      } else {
        setIsStylistScrolled(false);
      }

      if (scrollHeight - clientHeight <= scrollTop + 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // 1. 플로팅 버튼 스크롤 감지 ----------------------------------------------

  const router = useRouter();
  const path = usePathname();

  return (
    <>
      {children}
      {path !== "/" ? (
        <div
          className="fixed top-[13px] z-30 cursor-pointer px-[13px]"
          onClick={() => {
            router.back();
          }}
        >
          <Image src={ARROW} alt="arrow" className="rotate-180" />
        </div>
      ) : null}
    </>
  );
}
