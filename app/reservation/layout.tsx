"use client";

import { useEffect } from "react";
import LocalStorage from "../utils/localstorage";
import { useRecoilState } from "recoil";
import { userData } from "../utils/atom/userData";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ReservationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. user 정보 fetch ----------------------------------------------
  const userId = LocalStorage.getItem("userId");
  const [user, setUser] = useRecoilState(userData);
  const path = usePathname();

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
          // console.log(path);
          if (data.is_reserved && path === "/reservation") {
            router.replace(`/process`);
          }
        })
        .catch((error) => {
          console.log(error);
          setUser(null);
        });
    } else {
      setUser(null);
    }
  }, [userId]);

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
          // console.log(data);
          LocalStorage.setItem("userId", data);

          const redirectURL = window.location.origin + window.location.pathname;
          const reservationData = LocalStorage.getItem("reservationData");

          if (reservationData !== null) {
            const { stylistKey, productListCache } =
              JSON.parse(reservationData);
            // console.log({
            //   stylistKey: stylistKey,
            //   productListCache: productList,
            // });
            router.replace(
              `${redirectURL}?stylistKey=${stylistKey}&step=Check`,
            );
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [kakaoCode]);
  // 2. 카카오 로그인 --------------------------------------------------

  return <>{children}</>;
}
