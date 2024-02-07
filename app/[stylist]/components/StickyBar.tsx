"use client";

import { stylistData, stylistType } from "@/app/utils/atom/stylistTestData";
import LocalStorage from "@/app/utils/localstorage";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useRecoilValue } from "recoil";

interface Props {
  viewType: string;
  setViewType: React.Dispatch<React.SetStateAction<string>>;
  stylistKey: string;
}

export default function StickyBar({
  viewType,
  setViewType,
  stylistKey,
}: Props) {
  const contentId = useSearchParams().get("contentId");
  const router = useRouter();
  const stylists = useRecoilValue<stylistType>(stylistData);
  const stylist = stylists[stylistKey];
  const userId = LocalStorage.getItem("userId");

  const introTabClickLog = async (stylistKey: string) => {
    const body = {
      logging_id: "stylist_intro_tab_click",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      etc: { stylist_key: stylistKey },
    };
    await fetch("/api/log/postLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };
  const reviewTabClickLog = async (stylistKey: string) => {
    const body = {
      logging_id: "stylist_review_tab_click",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      etc: { stylist_key: stylistKey },
    };
    await fetch("/api/log/postLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };
  const contentsTabClickLog = async (stylistKey: string) => {
    const body = {
      logging_id: "stylist_contents_tab_ click",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      etc: { stylist_key: stylistKey },
    };
    await fetch("/api/log/postLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };
  return (
    <div className="sticky top-0 z-30 flex w-full flex-col whitespace-nowrap bg-[#161616]">
      <div className="flex h-[65px] w-full justify-between px-[30px] pt-[10px]">
        <div className="flex flex-col">
          <div className="flex h-[15px] items-center text-[15px]">
            <span className="font-highlight">{stylist.name}</span>

            <span className="whitespace-pre font-extralight">
              {" "}
              스타일리스트
            </span>
          </div>
          <div className="mt-[5px] flex h-[10px] items-center font-main text-[10px] ">
            {stylist.comment}
          </div>
          <div
            className="mt-[5px] flex h-[10px] cursor-pointer items-center font-main text-[10px] "
            onClick={() =>
              router.push(`https://www.instagram.com/${stylist.instagramId}`)
            }
          >
            {"@" + stylist.instagramId}
          </div>
        </div>

        <div className="flex flex-col items-end gap-[1px] pt-[5px] ">
          <div className="flex h-[12px] items-center text-[10px] font-extralight">
            <span className="font-main">{stylist.avgGrade} 점</span>
            &nbsp;/ 5.0 점
          </div>
          <div className="flex h-[12px] items-center text-[10px] font-extralight">
            <span className="font-main">{stylist.consultingAmount} 회</span>
            &nbsp;스타일링
          </div>
        </div>
      </div>

      {contentId ? null : (
        <>
          <div className="flex h-[46px] w-full items-center text-[16px]">
            <div
              className={`flex h-full flex-1 cursor-pointer items-center justify-center  ${
                viewType === "소개" ? "font-highlight" : "font-extralight "
              }`}
              onClick={() => {
                introTabClickLog(stylistKey);
                setViewType("소개");
              }}
            >
              소개
            </div>
            <div
              className={`flex h-full flex-1 cursor-pointer items-center justify-center ${
                viewType === "후기" ? "font-highlight" : "font-extralight "
              }`}
              onClick={() => {
                reviewTabClickLog(stylistKey);
                setViewType("후기");
              }}
            >
              후기
            </div>
            <div
              className={`flex h-full flex-1 cursor-pointer items-center justify-center ${
                viewType === "컨텐츠" ? "font-highlight" : "font-extralight "
              }`}
              onClick={() => {
                contentsTabClickLog(stylistKey);
                setViewType("컨텐츠");
              }}
            >
              컨텐츠
            </div>
          </div>
          <div className="relative flex h-[1px] w-full bg-[rgba(232,232,232,0.3)]">
            <div
              className={`absolute h-full w-1/3 bg-[#E8E8E8] transition-all duration-300 ease-in-out ${
                viewType === "소개"
                  ? "left-0"
                  : viewType === "후기"
                    ? "left-1/3"
                    : "left-2/3"
              }`}
            />
          </div>
        </>
      )}
    </div>
  );
}
