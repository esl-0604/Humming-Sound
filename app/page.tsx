"use client";

import React, { useEffect } from "react";
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

  useEffect(() => {
    if (userId) setIsLogined(true);
    else setIsLogined(false);
  }, [userId]);

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
