"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import AudioBox from "./AudioBox";
import AudioPlayer from "./AudioPlayer";

export default function Archive() {
  return (
    <div className="relative flex h-full w-full flex-col items-start gap-[50px] bg-transparent px-[30px] py-[50px]">
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioBox />
      <AudioPlayer />
    </div>
  );
}
