"use client";

import { useState } from "react";
import "./Calendar.css";

export default function TimeSlot() {
  const [selected, setSelected] = useState(false);
  return (
    <div
      className={`flex h-[32px] w-[92px] items-center justify-center rounded-[50px] bg-gradient-to-r from-transparent to-[rgba(232,232,232,0.5)]`}
      onClick={() => setSelected(!selected)}
    >
      <div
        className={`flex h-[30px] w-[90px] items-center justify-center rounded-[50px]  text-[15px]  ${
          selected
            ? "bg-[#E8E8E8] font-main text-[#161616]"
            : "bg-[#161616] font-default text-[#E8E8E8]"
        }`}
      >
        14:00
      </div>
    </div>
  );
}
