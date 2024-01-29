"use client";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";
import { userData } from "@/app/utils/atom/userData";
import LocalStorage from "@/app/utils/localstorage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface Props {
  stylistKey: string;
}

export default function ReservationButton({ stylistKey }: Props) {
  const router = useRouter();
  const isScrolled = useRecoilValue(ScrolledButton);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    fetch("/api/reservation/getServiceByStylistKey?stylist_key=" + stylistKey, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.length === 0) setDisabled(true);
        else setDisabled(false);
      });
  }, []);

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
          console.log(data);
          if (data.is_reserved) setDisabled(true);
          // setUser(data);
        })
        .catch((error) => {
          console.log(error);
          // setUser(null);
        });
    } else {
      setUser(null);
    }
  }, [userId]);

  return (
    <div className="fixed bottom-[30px] z-10 h-[50px] w-full max-w-[480px] px-[55px]">
      <div
        onClick={() => {
          if (!disabled)
            router.push(`/reservation?stylistKey=${stylistKey}&step=Product`);
        }}
        className={`flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] transition duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#E8E8E8] text-[#161617]"
            : "bg-[rgba(0,0,0,0.10)] text-[#E8E8E8]"
        }`}
      >
        {disabled ? (
          <p
            className={` text-[16px] ${
              isScrolled ? "font-main" : "font-default"
            }`}
          >
            현재 예약이 불가 합니다.
          </p>
        ) : (
          <p
            className={` text-[16px] ${
              isScrolled ? "font-main" : "font-default"
            }`}
          >
            지금
            <span
              className={`whitespace-pre ${
                isScrolled ? "font-highlight" : "font-main"
              }`}
            >
              {" "}
              예약하기
            </span>{" "}
            &gt;
          </p>
        )}
      </div>
    </div>
  );
}
