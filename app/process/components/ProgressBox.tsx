"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import Block from "./Block";
import PENDING from "@/public/gif/process/pending.json";
import SURVEYING from "@/public/gif/process/surveying.json";
import PROCESSING from "@/public/gif/process/processing.json";
import CLOSING from "@/public/gif/process/closing.json";
import DONE from "@/public/gif/process/done.json";
import PendingMessage from "./PendingMessage";
import ProcessingMessage from "./ProcessingMessage";
import NonAppliedMessage from "./NonAppliedMessage";
import { useEffect, useRef } from "react";
import SurveyingMessage from "./SurveyingMessage";
import ClosingMessage from "./ClosingMessage";
import DoneMessage from "./DoneMessage";
interface ProgressBoxProps {
  progress: number;
}
export default function ProgressBox({ progress }: ProgressBoxProps) {
  const lottieRef1 = useRef<any>();
  const lottieRef2 = useRef<any>();
  const lottieRef3 = useRef<any>();
  const lottieRef4 = useRef<any>();
  const lottieRef5 = useRef<any>();

  useEffect(() => {
    if (progress != 0) lottieRef1.current.stop();
    else lottieRef1.current.play();
    if (progress != 1) lottieRef2.current.stop();
    else lottieRef2.current.play();
    if (progress != 2) lottieRef3.current.stop();
    else lottieRef3.current.play();
    if (progress != 3) lottieRef4.current.stop();
    else lottieRef4.current.play();
    if (progress != 4) lottieRef5.current.stop();
    else lottieRef5.current.play();
  }, [progress]);

  return (
    <div className="flex w-full flex-col px-[30px]">
      <Block />
      <div className="mt-[10px] flex w-full flex-col font-branding text-[30px] leading-[100%]">
        {progress == 0
          ? "pending!"
          : progress == 1
            ? "surveying!"
            : progress == 2
              ? "processing!"
              : progress == 3
                ? "closing!"
                : progress == 4
                  ? "done!"
                  : "non applied!"}
      </div>
      <div className="mt-[30px] flex w-full flex-row items-center justify-between">
        <div
          className={`flex w-[30px] flex-col ${progress == 0 ? "" : "opacity-50"}`}
        >
          <div className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={PENDING} lottieRef={lottieRef1} />
          </div>
          <div
            className={`flex h-[16px] w-full  flex-col items-center justify-center font-branding text-[12px] leading-[100%]  text-[#E8E8E8]`}
          >
            pending
          </div>
        </div>
        <div className="flex h-[46px] flex-col justify-center">
          <Image
            src="/images/Arrow/smallRightArrow.svg"
            alt="smallRightArrow"
            height={5}
            width={3}
          />
        </div>
        <div
          className={`flex w-[30px] flex-col ${progress == 1 ? "" : "opacity-50"}`}
        >
          <div className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={SURVEYING} lottieRef={lottieRef2} />
          </div>
          <div
            className={`flex h-[16px] w-full flex-col  items-center justify-center font-branding text-[12px] leading-[100%] text-[#E8E8E8]`}
          >
            surveying
          </div>
        </div>
        <div className="flex h-[46px] flex-col justify-center">
          <Image
            src="/images/Arrow/smallRightArrow.svg"
            alt="smallRightArrow"
            height={5}
            width={3}
          />
        </div>
        <div
          className={`flex w-[30px] flex-col ${progress == 2 ? "" : "opacity-50"}`}
        >
          <div className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={PROCESSING} lottieRef={lottieRef3} />
          </div>
          <div
            className={`flex h-[16px] w-full  flex-col items-center justify-center font-branding text-[12px] leading-[100%] text-[#E8E8E8]`}
          >
            processing
          </div>
        </div>
        <div className="flex h-[46px] flex-col justify-center">
          <Image
            src="/images/Arrow/smallRightArrow.svg"
            alt="smallRightArrow"
            height={5}
            width={3}
          />
        </div>
        <div
          className={`flex w-[30px] flex-col ${progress == 3 ? "" : "opacity-50"}`}
        >
          <div className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={CLOSING} lottieRef={lottieRef4} />
          </div>
          <div
            className={`flex h-[16px] w-full  flex-col items-center justify-center font-branding text-[12px] leading-[100%] text-[#E8E8E8]`}
          >
            closing
          </div>
        </div>
        <div className="flex h-[46px] flex-col justify-center">
          <Image
            src="/images/Arrow/smallRightArrow.svg"
            alt="smallRightArrow"
            height={5}
            width={3}
          />
        </div>
        <div
          className={`flex w-[30px] flex-col ${progress == 4 ? "" : "opacity-50"}`}
        >
          <div className="flex h-[30px] w-[30px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={DONE} lottieRef={lottieRef5} />
          </div>
          <div
            className={`flex h-[16px] w-full  flex-col items-center justify-center font-branding text-[12px] leading-[100%] text-[#E8E8E8]`}
          >
            done
          </div>
        </div>
      </div>
      {progress == 0 ? (
        <PendingMessage />
      ) : progress == 1 ? (
        <SurveyingMessage />
      ) : progress == 2 ? (
        <ProcessingMessage />
      ) : progress == 3 ? (
        <ClosingMessage />
      ) : progress == 4 ? (
        <DoneMessage />
      ) : (
        <NonAppliedMessage />
      )}
    </div>
  );
}
