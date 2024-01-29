"use client";

import { createContext, useEffect, useRef, useState } from "react";
import ARROW from "@/public/images/toggleClosed.svg";
import StickyBar from "./components/StickyBar";
import ThumbnailBox from "./components/ThumbnailBox";
import IntroduceBox from "./components/IntroduceBox";
import ReviewBox from "./components/Review/ReviewBox";
import ContentsBox from "./components/Contents/ContentsBox";
import ReservationButton from "./components/ReservationButton";
import { usePathname, useSearchParams } from "next/navigation";
import ContentsDetail from "./components/Contents/ContentsDetail";
import { useRecoilState } from "recoil";
import { stylistViewType } from "../utils/atom/stylistViewType";

export default function StylistDetail() {
  const path = usePathname();
  const stylistKey = path ? path.slice(1) : "testStylist";
  // console.log(stylistKey);
  // const stylistKey = useSearchParams().get("stylistKey");
  const contentId = useSearchParams().get("contentId");
  const [viewType, setViewType] = useRecoilState<string>(stylistViewType);
  // const [viewType, setViewType] = useState<string>("소개");

  return (
    <main className="relative flex min-h-screen w-full flex-col bg-[#161616] text-[#E8E8E8]">
      {contentId ? null : <ThumbnailBox stylistKey={stylistKey} />}

      <StickyBar
        viewType={viewType}
        setViewType={setViewType}
        stylistKey={stylistKey}
      />

      {contentId ? (
        <ContentsDetail />
      ) : (
        <>
          {viewType === "소개" ? (
            <IntroduceBox stylistKey={stylistKey} />
          ) : null}
          {viewType === "후기" ? <ReviewBox stylistKey={stylistKey} /> : null}
          {viewType === "컨텐츠" ? (
            <ContentsBox stylistKey={stylistKey} />
          ) : null}
        </>
      )}

      {/* {viewType !== "후기" ? ( */}
      <ReservationButton stylistKey={stylistKey} />
      {/* ) : null} */}
    </main>
  );
}
