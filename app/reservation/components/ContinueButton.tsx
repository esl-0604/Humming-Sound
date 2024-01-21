"use client";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useRecoilState } from "recoil";
import { ReservationContext } from "../context";
import { addCommasToNumber } from "@/app/utils/function/addCommasToNumber";
import PopUp from "./PopUp";

interface Props {}

export default function ContinueButton({}: Props) {
  const router = useRouter();
  const stylistKey = useSearchParams().get("stylistKey");

  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  const { step, setStep, totalCost, productList, popUp, setPopUp } =
    useContext(ReservationContext);

  const ContinueClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (step.step === "Product") {
      const CardList = Object.keys(productList);
      if (!CardList.includes("consulting") || !CardList.includes("how")) {
        console.log("필수 상품을 선택해주세요!");
        setPopUp({ pop: true, type: "필수" });
      } else {
        if (productList["how"][0].title === "설문지")
          router.push(`/reservation?stylistKey=${stylistKey}&step=Done`);
        else router.push(`/reservation?stylistKey=${stylistKey}&step=Date1`);
      }
    } else if (step.step === "Date1") {
      if (productList["shopping"]) {
        if (productList["shopping"][0].title !== "제품 추천")
          router.push(`/reservation?stylistKey=${stylistKey}&step=Date2`);
        else router.push(`/reservation?stylistKey=${stylistKey}&step=Done`);
      } else router.push(`/reservation?stylistKey=${stylistKey}&step=Done`);
    } else if (step.step === "Date2")
      router.push(`/reservation?stylistKey=${stylistKey}&step=Done`);
    else router.push("/");
  };

  return (
    <div className="fixed bottom-[30px] z-10 h-[50px] w-full max-w-[480px] px-[55px]">
      <div
        className={`flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] transition duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#E8E8E8] text-[#161617]"
            : "bg-[rgba(0,0,0,0.10)] text-[#E8E8E8]"
        }`}
        onClick={ContinueClick}
      >
        {step.step === "Done" ? (
          <p
            className={` text-[16px] ${
              isScrolled ? "font-main" : "font-default"
            }`}
          >
            처음으로
            <span
              className={`whitespace-pre ${
                isScrolled ? "font-highlight" : "font-main"
              }`}
            >
              {" "}
              돌아가기
            </span>{" "}
            &gt;
          </p>
        ) : (
          <div className="flex h-full w-full items-center justify-between px-[25px]">
            <p className={` "font-main" text-[16px]`}>
              ₩{addCommasToNumber(totalCost)}~
            </p>
            <p
              className={` whitespace-nowrap text-[16px] ${
                isScrolled ? "font-main" : "font-default"
              }`}
            >
              계속
              <span
                className={`whitespace-pre ${
                  isScrolled ? "font-highlight" : "font-main"
                }`}
              >
                {" "}
                진행하기
              </span>{" "}
              &gt;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
