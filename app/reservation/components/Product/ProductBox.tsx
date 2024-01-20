"use client";

import ProductCard from "./ProductCard";
import { ProductCategoryType, productData } from "@/app/utils/atom/productData";

export default function ProductBox() {
  const categoryList = Object.keys(productData);
  console.log(categoryList);

  return (
    <div className="flex h-fit w-full flex-col gap-[15px] pb-[50px]">
      {categoryList.map((category: string, index: number) => {
        // console.log(category);
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
