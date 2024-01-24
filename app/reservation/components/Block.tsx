"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import Image from "next/image";

export default function Block() {
  return (
    <div className="h-fit w-fit">
      <Image src={BLOCK} alt="block" />
    </div>
  );
}
