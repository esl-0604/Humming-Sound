"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import DOT from "@/public/images/reservation/essential.svg";
import Image from "next/image";
import ProductRow from "./ProductRow";
import { ProductType } from "@/app/utils/atom/productData";

interface Props {
  title: string;
  productList: ProductType[];
}

export default function ProductCard({ title, productList }: Props) {
  return (
    <div className="mt-[5px] flex h-fit w-full flex-col">
      <Image src={BLOCK} alt="block" />

      <div className="relative mb-[30px] mt-[10px] flex h-[30px] w-fit items-center pl-[10px] font-branding text-[30px] font-normal">
        {title}
        {title === "consulting" || title === "how" ? (
          <div className="flex h-full items-start">
            <Image src={DOT} alt="dot" />
          </div>
        ) : null}
      </div>

      <div className="flex h-fit w-full flex-col gap-[15px]">
        {productList.map((product: ProductType, index: number) => {
          return (
            <ProductRow
              key={index}
              card={title}
              RowId={index}
              title={product.title}
              cost={product.cost}
              memo={product.memo}
              byHour={product.byHour}
              byEA={product.byEA}
              gifUrl={product.gifUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
