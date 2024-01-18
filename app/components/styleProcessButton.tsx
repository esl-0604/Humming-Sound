"use client";
import { useRouter } from "next/navigation";

interface StyleProcessButtonProps {
  isScrolled?: boolean;
}
export default function StyleProcessButton({
  isScrolled,
}: StyleProcessButtonProps) {
  const router = useRouter();
  return (
    <div className="sticky bottom-[30px] z-10 h-[50px] w-full px-[55px]">
      <div
        onClick={() => router.push(`/process`)}
        className={`flex h-[50px] w-full items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] ${
          isScrolled
            ? "bg-[#E8E8E8] transition duration-500 ease-in-out"
            : "bg-[rgba(0,0,0,0.10)] transition duration-500 ease-in-out"
        }`}
      >
        <p
          className={`text-[16px] ${
            isScrolled ? "text-[#161617]" : "text-[#ffffff]"
          } `}
        >
          스타일링 현황 바로가기 &gt;
        </p>
      </div>
    </div>
  );
}
