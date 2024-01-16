"use client";

export default function IntroBox() {
  return (
    <div className="relative z-0 flex h-fit w-full flex-col items-center justify-center">
      <img src="/images/mainImage.svg" className="w-full" />
      <img
        className="absolute left-1/2 top-[40px] z-20 translate-x-[-50%]"
        src="/images/mainLogo.svg"
      />
      <div className="to-[#161616]-0% absolute top-0 z-10 h-full w-full bg-gradient-to-t from-[#161616]" />
      <p className="absolute bottom-[35px] z-30 text-center font-default text-[15px] text-white">
        퍼스널 브랜딩, <br />
        <span className="font-main">여러분의 스타일링</span>에서 시작됩니다.
      </p>
    </div>
  );
}
