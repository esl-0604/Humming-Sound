import SPINNER from "@/public/images/reservation/spinner.svg";
import Image from "next/image";

interface SpinnerBoxProps {
  type: string;
}

export default function Spinner({ type }: SpinnerBoxProps) {
  return (
    <div
      className={`fixed top-0 z-50 flex h-screen w-full max-w-[480px] flex-col items-center justify-center bg-[#161616] ${
        type === "half" ? "opacity-50" : "opacity-100"
      }`}
    >
      <Image src={SPINNER} alt="spinner" className="z-50" />
    </div>
  );
}
