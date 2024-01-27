import Image from "next/image";
import BLOCK from "@/public/images/stylistintroduce/block.svg";
import ARROW from "@/public/images/Arrow/smallArrow.svg";
import { contentType } from "@/app/utils/atom/stylistTestData";

interface Props extends contentType {}

export default function ContentsDetailCard({
  subTitle,
  content,
  images,
}: Props) {
  return (
    <div
      className={`relative  flex w-full min-w-[280px] flex-col gap-[10px] ${
        subTitle ? "mt-[70px]" : "mt-[20px]"
      }`}
    >
      {subTitle ? <Image src={BLOCK} alt="block" /> : null}

      <div className="flex w-full flex-col gap-[5px]">
        <div className="font-highlight text-[30px] ">{subTitle}</div>
        <div className=" w-full text-[12px] font-extralight ">{content}</div>
      </div>

      <div className="flex h-full w-full items-center justify-start gap-[5px] overflow-x-scroll">
        {images.length > 0
          ? images.map((img: string, idx: number) => {
              return (
                <div
                  key={idx}
                  className={`flex flex-none overflow-hidden rounded-[5px] bg-[#222222]
                  ${images.length > 1 ? "w-[calc(100%-30px)]" : "w-full"}`}
                >
                  <Image
                    src={img}
                    alt="image"
                    className="h-full w-full object-cover"
                    width={480}
                    height={1500}
                  />
                </div>
              );
            })
          : null}
        {/* 
        {images.length > 1 ? (
          <>
            <Image
              src={ARROW}
              alt="leftarrow"
              className="absolute left-[10px] top-1/2 z-10 cursor-pointer"
            />
            <Image
              src={ARROW}
              alt="rightarrow"
              className="absolute right-[10px] top-1/2 z-10 rotate-180 cursor-pointer"
            />
          </>
        ) : null} */}

        {/* <Image
          src={images[0]}
          alt="image"
          className="h-full w-full object-cover"
          width={480}
          height={1500}
        /> */}
      </div>
    </div>
  );
}
