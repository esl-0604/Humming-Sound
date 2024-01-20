"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import WHAT from "@/public/images/reservation/what.svg";
import HOW from "@/public/images/reservation/how.svg";
import ADD from "@/public/images/reservation/add.svg";
import Image from "next/image";
import ProductRow from "./ProductRow";
import { ProductType } from "@/app/utils/atom/productData";

interface Props {
  title: string;
  productList: ProductType[];
}

export default function ProductCard({ title, productList }: Props) {
  return (
    <div className="flex h-fit w-full flex-col">
      <Image src={BLOCK} alt="block" />

      <div className="mb-[30px] mt-[10px] flex h-[30px] w-full items-center px-[10px]">
        <Image
          src={title === "what" ? WHAT : title === "how" ? HOW : ADD}
          alt="title"
        />
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
              gifUrl={product.gifUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
