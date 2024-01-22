"use client";
import { useRouter } from "next/navigation";
import { ScrolledButton } from "../utils/atom/scrolledButton";
import { useRecoilState } from "recoil";

interface LoginButtonProps {}
export default function LoginButton({}: LoginButtonProps) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  return (
    <div className="fixed bottom-[30px] z-10 h-[50px] w-full max-w-[480px] px-[55px]">
      <div
        onClick={() => router.push(`/login`)}
        className={`flex h-[50px] w-full items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] ${
          isScrolled
            ? "bg-[#E8E8E8] transition duration-500 ease-in-out"
            : "bg-[rgba(0,0,0,0.10)] transition duration-500 ease-in-out"
        }`}
      >
        <p
          className={`text-[16px] ${
            isScrolled ? "text-[#161617]" : "text-[#ffffff]"
          } font-highlight`}
        >
          로그인{" "}
          <span
            className={`font-main ${
              isScrolled ? "text-[#161617]" : "text-[#ffffff]"
            } `}
          >
            하러 가기 &gt;
          </span>
        </p>
      </div>
    </div>
  );
}
