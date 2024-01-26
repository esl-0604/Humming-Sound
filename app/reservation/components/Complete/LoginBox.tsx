"use client";
import { useRouter, useSearchParams } from "next/navigation";

import { useContext, useEffect } from "react";
import LocalStorage from "@/app/utils/localstorage";
import Image from "next/image";
import ReservationLoginButton from "./LoginButton";
import { ReservationContext } from "../../context";

export default function LoginBox() {
  const param = useSearchParams();

  const { productList } = useContext(ReservationContext);
  const stylistKey = param.get("stylistKey");
  const step = param.get("step");

  console.log({
    stylistKey: stylistKey,
    step: step,
    productList: productList,
  });

  const reservationData = JSON.stringify({
    stylistKey: stylistKey,
    step: step,
    productList: productList,
  });

  LocalStorage.setItem("reservationData", reservationData);

  return (
    <div className="fixed bottom-0 top-0 z-40 flex w-full max-w-[480px] flex-col items-center bg-[#161616]">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        <Image
          src="/images/mainImage.svg"
          className="h-full w-full object-cover"
          alt="mainImage"
          width={1000}
          height={1000}
        />

        <Image
          className="absolute left-1/2 top-[42px] z-10 translate-x-[-50%]"
          src="/images/mainLogo.svg"
          alt="mainLogo"
          width={121}
          height={35}
        />

        <div className="to-[#161616]-0% absolute top-0 h-full w-full bg-gradient-to-t from-[#161616] " />
      </div>
      <p className="absolute bottom-[85px] text-center font-default text-[15px] text-[#E8E8E8]">
        진행 상태는 저장됩니다. <br />
        <span className="font-main">로그인하고 예약을 확정하세요!</span>
      </p>
      <ReservationLoginButton />
    </div>
  );
}
