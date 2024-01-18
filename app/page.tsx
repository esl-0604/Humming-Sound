"use client";

import React, { useState, useEffect } from "react";
import ContentBox from "./components/contentBox";
import FilterBox from "./components/filterBox";
import IntroBox from "./components/introBox";
import LoginButton from "./components/loginButton";
import StylistProfileCard from "./components/stylistProfileCard";
import StylistApplyButton from "./components/stylistApplyButton";
import { useSearchParams } from "next/navigation";
import { useRecoilState } from "recoil";
import { ScrolledButton } from "./utils/atom/scrolledButton";
import { stylistData, stylistType } from "./utils/atom/stylistTestData";

export default function Home() {
  const [showScrolledLoginButton, setShowScrolledLoginButton] = useState(false);
  const param = useSearchParams();
  const kakaoCode = param.get("code");
  const [stData, setStData] = useRecoilState<stylistType>(stylistData);
  useEffect(() => {
    if (kakaoCode) {
      fetch("/api/kakao/getToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authCode: kakaoCode,
        },
      }).then((res) => res.json());
    }
  }, [kakaoCode]);
  
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const scrollThreshold = 0.9;

      if (scrollTop + clientHeight >= scrollHeight * scrollThreshold) {
        setShowScrolledLoginButton(true);
        setIsScrolled(true);
      } else {
        setShowScrolledLoginButton(false);
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#161616]">
      <IntroBox />
      <FilterBox />
      {Object.keys(stData).map((key) => (
        <StylistProfileCard
          key={key}
          stylistKey={key}
          stylistName={stData[key].name}
          stylistComment={stData[key].comment}
        />
      ))}
      <ContentBox />
      <StylistApplyButton isScrolled={showScrolledLoginButton} />
      <LoginButton isScrolled={showScrolledLoginButton} />
    </main>
  );
}
