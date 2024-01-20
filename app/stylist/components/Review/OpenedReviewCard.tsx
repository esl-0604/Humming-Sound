import { reviewType } from "@/app/utils/atom/stylistTestData";

export default function OpenedReviewCard({
  reviewer,
  date,
  grade,
  comment,
  imageList,
}: reviewType) {
  return (
    <div className="flex h-fit max-h-[10000px] w-full cursor-pointer flex-col pt-[10px] shadow-md">
      <div className="flex h-[50px] w-full pb-[20px]">
        <div className="flex h-full flex-1 flex-col">
          <div className="mb-[5px] flex h-[15px] w-full items-center font-highlight text-[15px]">
            {reviewer}
          </div>
          <div className="flex h-[10px] w-full items-center font-main text-[10px] opacity-[0.75]">
            {date}
          </div>
        </div>

        <div className="flex h-[15px] w-[60px] items-start justify-end whitespace-nowrap pt-[5px] text-[10px] font-extralight">
          <span className="whitespace-pre font-main">{grade} 점 </span>/ 5.0 점
        </div>
      </div>

      <div className="flex w-full items-start pb-[5px] font-main text-[10px] opacity-[0.75]">
        {comment}
      </div>

      <div className="flex w-full flex-col items-center gap-[5px]">
        {imageList.map((list: string, idx: number) => {
          return (
            <div
              key={idx}
              className="flex h-[222px] w-full items-center justify-center overflow-hidden rounded-[5px]"
            >
              <img
                src={list}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
