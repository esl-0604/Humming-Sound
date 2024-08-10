"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import LocalStorage from "./utils/localstorage";
import TopBar from "./components/TopBar";
import Generate from "./generate/page";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[#161616] ">
      <TopBar />
      <Generate />
    </main>
  );
}
