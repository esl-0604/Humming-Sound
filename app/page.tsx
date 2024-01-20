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
import { stylistData, stylistType } from "./utils/atom/stylistTestData";
import StyleProcessButton from "./components/styleProcessButton";
import { useRouter } from "next/navigation";
import { IsLogined } from "./utils/atom/isLogined";
import LocalStorage from "./utils/localstorage";

export default function Home() {
  const router = useRouter();
  const [showScrolledLoginButton, setShowScrolledLoginButton] = useState(false);
  const [showScrolledApplyButton, setShowScrolledApplyButton] = useState(false);

  const param = useSearchParams();
  const kakaoCode = param.get("code");
  const [isLogined, setIsLogined] = useRecoilState<boolean>(IsLogined);
  const userId = LocalStorage.getItem("userId");

  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  useEffect(() => {
    const fetchData = async () => {
      if (kakaoCode) {
        try {
          // Get Kakao Token
          const loginResponse = await fetch("/api/kakao", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authCode: kakaoCode,
            },
          });
          const data = await loginResponse.json();

          if (data) {
            LocalStorage.setItem("userId", data.userId);
            router.replace("/");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [kakaoCode]);

  useEffect(() => {
    if (userId) setIsLogined(true);
    else setIsLogined(false);
  }, [userId]);

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
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const scrollThreshold = 0.8;

      if (scrollTop + clientHeight >= scrollHeight * scrollThreshold) {
        setShowScrolledApplyButton(true);
      } else {
        setShowScrolledApplyButton(false);
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
      <FilterBox />
      {Object.keys(stylists).map((key) => (
        <StylistProfileCard
          key={key}
          stylistKey={key}
          stylistName={stylists[key].name}
          stylistComment={stylists[key].comment}
        />
      ))}
      <ContentBox />
      {showScrolledApplyButton ? (
        <StylistApplyButton isScrolled={showScrolledLoginButton} />
      ) : null}
      {isLogined ? (
        <StyleProcessButton isScrolled={showScrolledLoginButton} />
      ) : (
        <LoginButton isScrolled={showScrolledLoginButton} />
      )}
    </main>
  );
}
