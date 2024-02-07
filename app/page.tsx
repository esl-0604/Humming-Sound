"use client";

import React, { useEffect, useState } from "react";
import ContentBox from "./components/contentBox";
import FilterBox from "./components/filterBox";
import IntroBox from "./components/introBox";
import LoginButton from "./components/loginButton";
import StylistProfileCard from "./components/stylistProfileCard";
import StylistApplyButton from "./components/stylistApplyButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { stylistData, stylistType } from "./utils/atom/stylistTestData";
import StyleProcessButton from "./components/styleProcessButton";
import { IsLogined } from "./utils/atom/isLogined";
import LocalStorage from "./utils/localstorage";
import { ScrolledStylistButton } from "./utils/atom/scrolledButton";

export default function Home() {
  const isStylistScrolled = useRecoilValue<boolean>(ScrolledStylistButton);
  const [isLogined, setIsLogined] = useRecoilState<boolean>(IsLogined);
  const stylists = useRecoilValue<stylistType>(stylistData);

  const userId = LocalStorage.getItem("userId");
  const [isFullScrolled, setIsFullScrolled] = useState<boolean>(false);
  const [isHalfScrolled, setIsHalfScrolled] = useState<boolean>(false);

  const scrollFullLog = async () => {
    const body = {
      logging_id: "main_scroll_full",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      etc: null,
    };
    await fetch("/api/log/postLogAfterExistCheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };

  const scrollHalfLog = async () => {
    const body = {
      logging_id: "main_scroll_half",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      etc: null,
    };
    await fetch("/api/log/postLogAfterExistCheck", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };

  useEffect(() => {
    if (isFullScrolled) scrollFullLog();
  }, [isFullScrolled]);
  useEffect(() => {
    if (isHalfScrolled) scrollHalfLog();
  }, [isHalfScrolled]);

  useEffect(() => {
    if (userId) setIsLogined(true);
    else setIsLogined(false);
  }, [userId]);
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight - clientHeight <= scrollTop + 120) {
        setIsFullScrolled(true);
      }

      if (scrollHeight <= (scrollTop + clientHeight) * 2) {
        setIsHalfScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#161616] ">
      <IntroBox />
      {/* <FilterBox /> */}
      {Object.keys(stylists).map((key) => (
        <StylistProfileCard
          key={key}
          stylistKey={key}
          stylistName={stylists[key].name}
          stylistComment={stylists[key].comment}
          stylistStyleTags={stylists[key].styleTags}
        />
      ))}
      <ContentBox />
      {isStylistScrolled ? <StylistApplyButton /> : null}
      {isLogined ? <StyleProcessButton /> : <LoginButton />}
    </main>
  );
}
