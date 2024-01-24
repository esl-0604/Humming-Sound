"use client";
import { useRouter, useSearchParams } from "next/navigation";
import IntroBox from "./components/introBox";
import LoginButton from "./components/loginButton";
import { useEffect } from "react";
import LocalStorage from "../utils/localstorage";

export default function LoginPage() {
  const router = useRouter();
  const param = useSearchParams();
  const kakaoCode = param.get("code");
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
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-[#161616]">
      <IntroBox />
      <p className="absolute bottom-[145px] z-30 text-center font-default text-[15px] text-white">
        퍼스널 브랜딩, <br />
        <span className="font-main">여러분의 스타일링</span>에서 시작됩니다.
      </p>
      <LoginButton />
    </main>
  );
}
