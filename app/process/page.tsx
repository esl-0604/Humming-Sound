"use client";

import Block from "./components/Block";
import ProgressBox from "./components/ProgressBox";
import CancelButton from "./components/CancelButton";
import AskButton from "./components/AskButton";
import LocalStorage from "../utils/localstorage";
import { useEffect, useState } from "react";
import StylistCard from "./components/StylistCard";

export default function Process() {
  const userId = LocalStorage.getItem("userId");
  const [userNickname, setUserNickname] = useState<string>("고객");
  const [progress, setProgress] = useState<number>(-1);
  const [stylistKey, setStylistKey] = useState<string>("");
  useEffect(() => {
    fetch(`/api/user/getUserByUserId?user_id=${userId}`).then((res) =>
      res.json().then((data) => setUserNickname(data.nickname)),
    );
  }, []);

  useEffect(() => {
    fetch(
      `/api/reservation/getStylistKeyByReservedUserId?user_id=${userId}`,
    ).then((res) => res.json().then((data) => setStylistKey(data)));
  }, []);

  useEffect(() => {
    fetch(
      `/api/reservation/getProgressByReservedUserId?user_id=${userId}`,
    ).then((res) => res.json().then((data) => setProgress(data)));
  }, []);
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#161616] pb-[60px] text-[#E8E8E8]">
      <div className="relative flex h-full w-full flex-col px-[30px]">
        <div className="sticky top-0 z-30 h-fit w-full bg-[#161616]">
          <div className="mb-[35px] mt-[11px] flex h-[15px] w-full items-center font-highlight text-[15px]">
            마이페이지
          </div>
          <div className="flex w-full flex-col gap-[10px]">
            <Block />
            <div className="flex min-h-[60px] w-full flex-col font-default text-[30px] leading-[100%]">
              <div className="flex min-h-[30px] flex-wrap items-center">
                <span className="flex h-full items-center whitespace-pre font-highlight">
                  {userNickname}{" "}
                </span>
                <span className="flex h-full items-center whitespace-nowrap">
                  님
                </span>
              </div>
              <span className="flex min-h-[30px] items-center">
                환영합니다.
              </span>
            </div>

            <div className="flex min-h-[45px] w-full flex-col font-default text-[15px] leading-[20px]">
              <span>진행 중인 스타일링 정보를</span>
              <span>아래에서 확인해보세요!</span>
            </div>
          </div>
          {progress == -1 ? null : <StylistCard stylistKey={stylistKey} />}
        </div>
        <ProgressBox progress={progress} />
      </div>
      {/* {progress != -1 ? <CancelButton /> : null} */}
      <AskButton progress={progress} />
    </main>
  );
}
