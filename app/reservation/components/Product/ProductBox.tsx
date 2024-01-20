"use client";

import ProductCard from "./ProductCard";
import { ProductCategoryType, productData } from "@/app/utils/atom/productData";

export default function ProductBox() {
  const cardList = Object.keys(productData);

  return (
    <div className="flex h-fit w-full flex-col gap-[15px] pb-[50px]">
      {cardList.map((category: string, index: number) => {
        return (
          <ProductCard
            key={index}
            title={category}
            productList={productData[category].product}
          />
        );
      })}
    </div>
  );
}
