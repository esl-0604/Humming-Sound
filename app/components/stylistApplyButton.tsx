"use client";
import { useRouter } from "next/navigation";

interface StylistApplyButtonProps {
  isScrolled?: boolean;
}
export default function StylistApplyButton({
  isScrolled,
}: StylistApplyButtonProps) {
  const router = useRouter();
  return (
    <div className="fixed bottom-[94px] z-10 h-[30px] w-full max-w-[480px]">
      <div
        onClick={() => router.push(`/stylistapply`)}
        className="flex h-[30px] w-full items-center justify-center"
      >
        <p
          className={`font-default text-[15px]  underline decoration-from-font underline-offset-4 ${
            isScrolled
              ? "text-[#E8E8E8] transition duration-700 ease-in-out"
              : "text-transparent transition duration-700 ease-in-out"
          }`}
        >
          스타일리스트 지원하러 가기 &gt;
        </p>
      </div>
    </div>
  );
}
