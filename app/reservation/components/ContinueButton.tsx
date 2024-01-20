"use client";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useRecoilState } from "recoil";
import { ReservationContext } from "../context";

interface Props {}

export default function ContinueButton({}: Props) {
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  const { step, setStep } = useContext(ReservationContext);
  const router = useRouter();
  const ContinueClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (step.step === "Product") setStep({ step: "Date" });
    else if (step.step === "Date") setStep({ step: "Done" });
    else router.push("/");
  };
  return (
    <div className="fixed bottom-[30px] z-10 h-[50px] w-full max-w-[480px] px-[55px]">
      <div
        className={`flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] ${
          isScrolled
            ? "bg-[#E8E8E8] text-[#161617] transition duration-500 ease-in-out"
            : "bg-[rgba(0,0,0,0.10)] text-[#E8E8E8] transition duration-500 ease-in-out"
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
          <p
            className={` text-[16px] ${
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
        )}
      </div>
    </div>
  );
}
