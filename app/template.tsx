"use client";

import { useRecoilState } from "recoil";
import {
  ScrolledButton,
  ScrolledStylistButton,
} from "./utils/atom/scrolledButton";
import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
  const params = useSearchParams();
  const stylistKey = params.get("stylistKey");
  const step = params.get("step");
  const contentsId = params.get("contentId");

  const Back = () => {
    // 로그인 페이지 -> 메인 페이지
    if (path === "login") {
      router.replace(`/`);
    }

    // 스타일링 현황 페이지 -> 메인 페이지
    else if (path === "/process") {
      router.replace(`/`);
    }

    // 예약 페이지
    else if (path === "/reservation") {
      // 예약페이지/Check -> 예약페이지/Product
      if (step === "Check")
        router.replace(`/reservation?stylistKey=${stylistKey}&step=Product`);
      // 예약페이지 나머지 -> router.back()
      else router.back();
    }

    // 스타일리스트 상세 페이지
    else {
      // 스타일리스트 상세 페이지/컨텐츠 상세 페이지 -> 스타일리스트 상세 페이지(컨텐츠탭)
      if (contentsId) router.replace(`${path}`);
      // 스타일리스트 상세페이지 -> 메인 페이지
      else router.replace(`/`);
    }
  };

  return (
    <>
      {children}
      {path !== "/" ? (
        <div
          className="fixed top-[13px] z-30 cursor-pointer px-[13px]"
          onClick={Back}
        >
          <Image
            src={ARROW}
            alt="arrow"
            className="rotate-180"
            priority={true}
          />
        </div>
      ) : null}
    </>
  );
}
