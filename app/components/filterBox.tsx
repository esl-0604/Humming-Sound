"use client";

export default function FilterBox() {
  return (
    <div className="relative mb-[30px] flex h-[30px] w-full flex-row items-center justify-between bg-[#161616]">
      <div className="shadow-button1 absolute left-[20px] z-10 flex h-[30px] w-[69px] flex-row items-center justify-between rounded-[15px] bg-[#161616] pl-[14px] pr-[10px]">
        <p className="font-main flex items-center justify-center text-[10px] text-[#E8E8E8]">
          인기순
        </p>
        <img className="z-20 h-[10px] w-[7px]" src="/images/toggleClosed.svg" />
      </div>
      <div className="shadow-button1 absolute right-[20px] z-10 flex h-[30px] w-[185px] flex-row items-center justify-between rounded-[15px] bg-[#161616] px-[10px]">
        <p className="font-main right-[20px] z-20 flex h-[20px] w-[45px] items-center justify-center rounded-[15px] border-[0.71px] border-[#E8E8E8] text-[10px] text-[#E8E8E8]">
          따듯한
        </p>
        <p className="font-main right-[20px] z-20 flex h-[20px] w-[45px] items-center justify-center rounded-[15px] border-[0.71px] border-[#E8E8E8] text-[10px] text-[#E8E8E8]">
          귀여운
        </p>
        <p className="font-main right-[20px] z-20 flex h-[20px] w-[45px] items-center justify-center rounded-[15px] border-[0.71px] border-[#E8E8E8] text-[10px] text-[#E8E8E8]">
          포근한
        </p>
        <img className="z-20 h-[10px] w-[7px]" src="/images/toggleClosed.svg" />
      </div>
    </div>
  );
}
