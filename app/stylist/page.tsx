"use client";

import { createContext, useEffect, useRef, useState } from "react";
import ARROW from "@/public/images/toggleClosed.svg";
import StickyBar from "./components/stickyBar";
import ThumbnailBox from "./components/thumbnailBox";
import IntroduceBox from "./components/introduceBox";
import ReviewBox from "./components/Review/reviewBox";
import ContentsBox from "./components/Contents/contentsBox";
import ReservationButton from "./components/reservationButton";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ContentContext } from "./context";

export default function StylistDetail() {
  const stylistKey = useSearchParams().get("stylistKey");
  const [viewType, setViewType] = useState<string>("소개");
  const [showScrolledButton, setShowScrolledButton] = useState(false);
  const [showContentDetail, setShowContentDetail] = useState(false);

  const router = useRouter();
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollThreshold = 0.9;
      if (scrollTop + clientHeight >= scrollHeight * scrollThreshold) {
        setShowScrolledButton(true);
      } else {
        setShowScrolledButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    fetch("api/test")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // entry.isIntersecting이 true면 요소가 시야에 들어옴
          if (entry.isIntersecting) {
            console.log("컴포넌트가 시야에 들어왔습니다.");
            // 여기에 시야에 들어왔을 때 수행할 작업을 추가할 수 있습니다.
          }
        });
      },
      { threshold: 0.1 }, // 옵션: 0.5는 요소의 50%가 시야에 들어왔을 때 감지
    );

    // observer에 감지할 대상 요소 등록
    if (ref2.current) {
      observer.observe(ref2.current);
    }

    // 컴포넌트가 언마운트될 때 observer 정리
    return () => {
      if (ref2.current) {
        observer.unobserve(ref2.current);
      }
    };
  }, []);

  return (
    <ContentContext.Provider
      value={{ showContentDetail, setShowContentDetail }}
    >
      <main className="relative flex min-h-screen w-full flex-col bg-[#161616] text-[#E8E8E8]">
        <div
          className="sticky top-[13px] z-40 h-0 w-full cursor-pointer px-[13px]"
          onClick={() => {
            // if (showContentDetail) setShowContentDetail(false);
            // else router.back();
            router.back();
          }}
        >
          <Image src={ARROW} alt="arrow" className="rotate-180" />
        </div>

        <ThumbnailBox stylistKey={stylistKey ? stylistKey : "testStylist"} />
        <StickyBar
          viewType={viewType}
          setViewType={setViewType}
          stylistKey={stylistKey ? stylistKey : "testStylist"}
        />
        {viewType === "소개" ? (
          <IntroduceBox stylistKey={stylistKey ? stylistKey : "testStylist"} />
        ) : null}
        {viewType === "후기" ? (
          <ReviewBox stylistKey={stylistKey ? stylistKey : "testStylist"} />
        ) : null}
        {viewType === "컨텐츠" ? (
          <ContentsBox stylistKey={stylistKey ? stylistKey : "testStylist"} />
        ) : null}
        {/* <div ref={ref1}>
        <IntroduceBox />
      </div>
      <div ref={ref2}>
        <ReviewBox />
      </div>
      <div ref={ref3}>
        <ContentsBox />
      </div> */}

        {viewType !== "후기" ? (
          <ReservationButton isScrolled={showScrolledButton} />
        ) : null}
      </main>
    </ContentContext.Provider>
  );
}
