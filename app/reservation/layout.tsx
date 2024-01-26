"use client";

import { useEffect } from "react";
import LocalStorage from "../utils/localstorage";
import { useRecoilState } from "recoil";
import { userData } from "../utils/atom/userData";
import { useRouter, useSearchParams } from "next/navigation";

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. user 정보 fetch ----------------------------------------------
  const userId = LocalStorage.getItem("userId");
  const [user, setUser] = useRecoilState(userData);

  useEffect(() => {
    // console.log(userId);
    if (userId && !user) {
      fetch("/api/user/getUserByUserId?user_id=" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setUser(data);
        })
        .catch((error) => {
          console.log(error);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, []);

  // 1. user 정보 fetch ----------------------------------------------

  // 2. 카카오 로그인 --------------------------------------------------
  const param = useSearchParams();
  const kakaoCode = param.get("code");
  // console.log(kakaoCode);
  const router = useRouter();
  // console.log(LocalStorage.getItem("reservationData"));

  useEffect(() => {
    if (kakaoCode) {
      fetch("/api/kakao", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authCode: kakaoCode,
          redirectUriPath: "reservation",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          LocalStorage.setItem("userId", data);
          const redirectURL = window.location.origin + window.location.pathname;

          // if (LocalStorage.getItem("reservationData")) {
          //   const { step, stylistKey, productList } = JSON.parse(
          //     LocalStorage.getItem("reservationData")
          //       ? LocalStorage.getItem("reservationData")
          //       : "",
          //   );
          // }

          router.replace(redirectURL + "?stylist");
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [kakaoCode]);
  // 2. 카카오 로그인 --------------------------------------------------

  return <>{children}</>;
}
