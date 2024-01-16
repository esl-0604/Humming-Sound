"use client";

import React, { useState, useEffect } from "react";
import ContentBox from "./components/contentBox";
import FilterBox from "./components/filterBox";
import IntroBox from "./components/introBox";
import LoginButton from "./components/loginButton";
import StylistProfileCard from "./components/stylistProfileCard";
import StylistApplyButton from "./components/stylistApplyButton";

export default function Home() {
  const [showScrolledLoginButton, setShowScrolledLoginButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const scrollThreshold = 0.9;

      if (scrollTop + clientHeight >= scrollHeight * scrollThreshold) {
        setShowScrolledLoginButton(true);
      } else {
        setShowScrolledLoginButton(false);
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
      <StylistProfileCard />
      <StylistProfileCard />
      <StylistProfileCard />
      <ContentBox />
      <StylistApplyButton isScrolled={showScrolledLoginButton} />
      <LoginButton isScrolled={showScrolledLoginButton} />
    </main>
  );
}
