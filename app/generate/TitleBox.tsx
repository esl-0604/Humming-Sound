"use client";

import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

interface TitleBoxProps {
  title: string;
}

export default function TitleBox({ title }: TitleBoxProps) {
  return (
    <div className="flex h-[24px] items-center text-[15px] font-bold text-white">
      {title}
    </div>
  );
}
