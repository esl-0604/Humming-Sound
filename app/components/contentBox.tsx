"use client";
import Image from "next/image";
import LocalStorage from "../utils/localstorage";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { stylistData, stylistType } from "../utils/atom/stylistTestData";
import { useRouter } from "next/navigation";
import { stylistViewType } from "../utils/atom/stylistViewType";
export default function ContentBox() {
  const userId = LocalStorage.getItem("userId");
  const [nickname, setNickname] = useState<string>("고객");
  const stylists = useRecoilValue<stylistType>(stylistData);
  const router = useRouter();
  const [viewType, setViewType] = useRecoilState<string>(stylistViewType);
  useEffect(() => {
    fetch("/api/user/getUserByUserId?user_id=" + userId, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setNickname(data.nickname);
        if (data == "Invalid User Id" || data == "닉네임을 등록해주세요")
          setNickname("고객");
      });
  }, [userId]);

  const RandomContentsLink = () => {
    const Keys = Object.keys(stylists);
    const randomIndex = Math.floor(Math.random() * Keys.length);
    console.log(Keys[randomIndex]);
    router.push(`/${Keys[randomIndex]}`);
    setViewType("컨텐츠");
  };

  return (
    <div
      className="relative z-0 mb-[110px] flex h-[200px] w-full cursor-pointer flex-col items-center justify-center bg-[#161616] px-[21.5px]"
      onClick={RandomContentsLink}
    >
      <Image
        className="z-10 h-[200px] w-[full]"
        src="/images/contentImage.svg"
        alt="컨텐츠 이미지"
        width={500}
        height={200}
        priority={true}
      />
      <div className="to-[#161616]-0% absolute left-[21.5px] right-[21.5px] top-0 z-20 h-full w-[full] bg-gradient-to-t from-[#151515]" />
      <div className="to-[#161616]-0% absolute left-[21.5px] right-[21.5px] top-0 z-20 h-full w-[full] bg-gradient-to-b from-[#151515]" />
      <div className="absolute z-30 flex h-[full] w-[full] flex-col">
        <p className="w-full text-center font-highlight text-[15px] text-white">
          잠깐,{" "}
          <span className="font-main">아직 스타일링을 안 받아봤다면?</span>
        </p>
        <p className="text-center font-default text-[15px] text-white">
          {nickname} 님을 위한 추천 컨텐츠를 확인해보세요!
        </p>
      </div>
    </div>
  );
}
