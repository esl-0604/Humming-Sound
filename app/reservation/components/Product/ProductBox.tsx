"use client";

import ProductCard from "./ProductCard";
import {
  ServiceType,
  newProductData,
  productData,
} from "@/app/utils/atom/productData";

export default function ProductBox() {
  const order = ["consulting", "optional", "how", "shopping"];
  const typeList = [
    ...new Set(newProductData.map((item: ServiceType) => item.product.type)),
  ].sort((a, b) => {
    return order.indexOf(a) - order.indexOf(b);
  });

  // console.log(newProductData);
  // console.log(typeList);

  return (
    <div className="flex h-fit w-full flex-col gap-[15px] pb-[50px]">
      {/* {cardList.map((category: string, index: number) => {
        return (
          <ProductCard
            key={index}
            title={category}
            productList={productData[category].product}
          />
        );
      })} */}
      {typeList.map((type: string, idx: number) => {
        const productList = newProductData.filter(
          (item: ServiceType) => item.product.type === type,
        );
        return <ProductCard key={idx} title={type} productList={productList} />;
      })}
    </div>
  );
}
