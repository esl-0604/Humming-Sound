"use client";

export default function ContentBox() {
  return (
    <div className="relative z-0 mb-[110px] flex h-[200px] w-full flex-col items-center justify-center bg-[#161616] px-[21.5px]">
      <img className="z-10 h-[200px] w-[full]" src="/images/contentImage.svg" />
      <div className="to-[#161616]-0% absolute left-[21.5px] right-[21.5px] top-0 z-20 h-full w-[full] bg-gradient-to-t from-[#151515]" />
      <div className="to-[#161616]-0% absolute left-[21.5px] right-[21.5px] top-0 z-20 h-full w-[full] bg-gradient-to-b from-[#151515]" />
      <div className="absolute z-30 flex h-[full] w-[full] flex-col">
        <p className="w-full text-center font-highlight text-[15px] text-white">
          잠깐,{" "}
          <span className="font-main">아직 스타일링을 안 받아봤다면?</span>
        </p>
        <p className="text-center font-default text-[15px] text-white">
          00 님을 위한 추천 컨텐츠를 확인해보세요!
        </p>
      </div>
    </div>
  );
}
