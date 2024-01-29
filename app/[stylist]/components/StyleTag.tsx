"use client";

interface Props {
  tagTitle: string;
}
export default function StyleTag({ tagTitle }: Props) {
  return (
    <div
      className={`flex h-fit w-fit items-center justify-center rounded-[71.43px] bg-gradient-to-r from-transparent to-[rgba(232,232,232,0.5)] p-[1px]`}
    >
      <div
        className={`flex h-[18px] items-center justify-center whitespace-nowrap rounded-[71.43px] bg-[#161616] px-[8px] py-[5px] font-main text-[8px] text-[#E8E8E8]
       `}
      >
        {tagTitle}
      </div>
    </div>
  );
}
