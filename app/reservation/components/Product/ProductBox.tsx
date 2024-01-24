"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductData, ServiceType } from "@/app/utils/atom/productData";
import { useSearchParams } from "next/navigation";

export default function ProductBox() {
  const order = ["consulting", "optional", "how", "shopping"];
  const stylistKey = useSearchParams().get("stylistKey");
  const [productList, setProductList] = useState<ServiceType[]>([]);

  useEffect(() => {
    fetch("/api/reservation/getServiceByStylistKey?stylist_key=" + stylistKey, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProductList(data);
      });
  }, []);

  const typeList = [
    ...new Set(ProductData.map((item: ServiceType) => item.product.type)),
  ].sort((a, b) => {
    return order.indexOf(a) - order.indexOf(b);
  });

  return (
    <div className="flex h-fit w-full flex-col gap-[15px] pb-[50px]">
      {/* {typeList.map((type: string, idx: number) => {
        const sortedProductList = ProductData
          .filter((item: ServiceType) => item.product.type === type)
          .sort((a, b) => {
            return a.product.order - b.product.order;
          });

        return (
          <ProductCard key={idx} title={type} productList={sortedProductList} />
        );
      })} */}
      {productList.length > 0
        ? [
            ...new Set(
              productList.map((item: ServiceType) => item.product.type),
            ),
          ]
            .sort((a, b) => {
              return order.indexOf(a) - order.indexOf(b);
            })
            .map((type: string, idx: number) => {
              const sortedProductList = productList
                .filter((item: ServiceType) => item.product.type === type)
                .sort((a, b) => {
                  return a.product.order - b.product.order;
                });

              return (
                <ProductCard
                  key={idx}
                  title={type}
                  productList={sortedProductList}
                />
              );
            })
        : null}
    </div>
  );
}
