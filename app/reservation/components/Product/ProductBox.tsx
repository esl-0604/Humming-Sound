"use client";

import { useContext, useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { ProductData, ServiceType } from "@/app/utils/atom/productData";
import { useSearchParams } from "next/navigation";
import { ReservationContext } from "../../context";

export default function ProductBox() {
  const order = ["consulting", "how", "optional", "shopping"];
  const stylistKey = useSearchParams().get("stylistKey");
  const { productList, firstClick } = useContext(ReservationContext);
  const [serviceList, setServiceList] = useState<ServiceType[]>([]);
  const [essentialOn, setEssentialOn] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

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
        setServiceList(data);
      });
  }, []);

  useEffect(() => {
    const CardList = Object.keys(productList);
    if (CardList.includes("consulting") && CardList.includes("how"))
      setEssentialOn(true);
    else setEssentialOn(false);
  }, [productList]);

  useEffect(() => {
    if (essentialOn) {
      const targetTop = ref?.current?.children[2]?.getBoundingClientRect();
      // console.log(ref?.current?.children[2]);
      // console.log(targetTop?.top);
      window.scrollTo({
        top: targetTop ? window.scrollY + targetTop.top - 218 : 0,
        behavior: "smooth",
      });
    }
  }, [essentialOn]);

  const typeList = [
    ...new Set(ProductData.map((item: ServiceType) => item.product.type)),
  ].sort((a, b) => {
    return order.indexOf(a) - order.indexOf(b);
  });

  return (
    <div
      ref={ref}
      className={`flex h-fit w-full flex-col gap-[15px] pb-[100px]`}
    >
      {/* {typeList.map((type: string, idx: number) => {
        const sortedProductList = ProductData.filter(
          (item: ServiceType) => item.product.type === type,
        ).sort((a, b) => {
          return a.product.order - b.product.order;
        });

        return (
          <ProductCard key={idx} title={type} productList={sortedProductList} />
        );
      })} */}
      {serviceList.length > 0
        ? [
            ...new Set(
              serviceList.map((item: ServiceType) => item.product.type),
            ),
          ]
            .sort((a, b) => {
              return order.indexOf(a) - order.indexOf(b);
            })
            .map((type: string, idx: number) => {
              const sortedProductList = serviceList
                .filter((item: ServiceType) => item.product.type === type)
                .sort((a, b) => {
                  return a.product.order - b.product.order;
                });

              return (
                <div
                  key={idx}
                  className={`${
                    type === "optional" || type === "shopping"
                      ? essentialOn
                        ? "flex"
                        : "hidden"
                      : "flex"
                  }`}
                >
                  <ProductCard title={type} productList={sortedProductList} />
                </div>
              );
            })
        : null}
    </div>
  );
}
