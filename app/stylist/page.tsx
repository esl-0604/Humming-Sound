"use client";

import { createContext, useEffect, useRef, useState } from "react";
import ARROW from "@/public/images/toggleClosed.svg";
import StickyBar from "./components/StickyBar";
import ThumbnailBox from "./components/ThumbnailBox";
import IntroduceBox from "./components/IntroduceBox";
import ReviewBox from "./components/Review/ReviewBox";
import ContentsBox from "./components/Contents/ContentsBox";
import ReservationButton from "./components/ReservationButton";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { ContentContext } from "./context";
import { useRecoilState } from "recoil";
import { ScrolledButton } from "../utils/atom/scrolledButton";

export default function StylistDetail() {
  const stylistKey = useSearchParams().get("stylistKey");
  const [viewType, setViewType] = useState<string>("소개");
  const [showContentDetail, setShowContentDetail] = useState(false);

  return (
    <ContentContext.Provider
      value={{ showContentDetail, setShowContentDetail }}
    >
      <main className="relative flex min-h-screen w-full flex-col bg-[#161616] text-[#E8E8E8]">
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
          <ReservationButton
            stylistKey={stylistKey ? stylistKey : "testStylist"}
          />
        ) : null}
      </main>
    </ContentContext.Provider>
  );
}
