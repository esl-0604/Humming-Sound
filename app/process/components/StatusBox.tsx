"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import Block from "./Block";
import CHECK from "@/public/gif/process/check.json";
import CLOCK from "@/public/gif/process/clock.json";
import DOCS from "@/public/gif/process/docs.json";
import PendingMessage from "./PendingMessage";
import ProcessingMessage from "./ProcessingMessage";
import PublishingMessage from "./PublishingMessage";
import NonAppliedMessage from "./NonAppliedMessage";
interface StatusBoxProps {
  status: number;
}
export default function StatusBox({ status }: StatusBoxProps) {
  return (
    <div className="flex w-full flex-col gap-[10px]">
      <Block />
      <div className="flex w-full flex-col font-branding text-[30px] leading-[100%]">
        {status == 0
          ? "pending"
          : status == 1
            ? "processing"
            : status == 2
              ? "publishing"
              : "non applied"}
      </div>
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex w-[50px] flex-col gap-[10px]">
          <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={CHECK} />
          </div>
          <div
            className={`flex h-[16px] w-full  flex-col items-center justify-center font-branding text-[13.15px] leading-[100%]`}
          >
            pending
          </div>
        </div>
        <div className="flex h-[76px] flex-col justify-end pb-1">
          <Image
            src="/images/toggleClosed.svg"
            alt="smallArrow"
            width={7}
            height={10}
          />
        </div>
        <div className="flex w-[50px] flex-col gap-[10px]">
          <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={DOCS} />
          </div>
          <div
            className={`flex h-[16px] w-full  flex-col items-center justify-center font-branding text-[13.15px] leading-[100%]`}
          >
            processing
          </div>
        </div>
        <div className="flex h-[76px] flex-col justify-end pb-1">
          <Image
            src="/images/toggleClosed.svg"
            alt="smallArrow"
            width={7}
            height={10}
          />
        </div>
        <div className="flex w-[50px] flex-col gap-[10px]">
          <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[10px]">
            <Lottie animationData={CLOCK} />
          </div>
          <div
            className={`flex h-[16px] w-full  flex-col items-center justify-center font-branding text-[13.15px] leading-[100%]`}
          >
            publishing
          </div>
        </div>
      </div>
      {status == 0 ? (
        <PendingMessage />
      ) : status == 1 ? (
        <ProcessingMessage />
      ) : status == 2 ? (
        <PublishingMessage />
      ) : (
        <NonAppliedMessage />
      )}
    </div>
  );
}
