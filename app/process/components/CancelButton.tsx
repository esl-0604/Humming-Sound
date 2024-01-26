"use client";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";

export default function CancelButton() {
  const router = useRouter();

  return (
    <div className="fixed bottom-[94px] z-10 h-[30px] w-full max-w-[480px]">
      <div
        onClick={() => router.push(`/cancel`)}
        className="flex h-[30px] w-full items-center justify-center"
      >
        <p
          className={`font-default text-[15px]  underline decoration-from-font underline-offset-4`}
        >
          취소 요청하기 &gt;
        </p>
      </div>
    </div>
  );
}
