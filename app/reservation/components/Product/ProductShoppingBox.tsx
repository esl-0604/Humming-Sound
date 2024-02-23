"use client";

import Image from "next/image";
import ProductRow from "./ProductRow";
import { ServiceType, updateServiceType } from "@/app/utils/atom/productData";

import BARCODE from "@/public/gif/reservation/add/barcode.json";
import BASKET from "@/public/gif/reservation/add/basket.json";
import SHOPPING from "@/public/gif/reservation/add/shopping.json";
import { useContext, useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { ReservationContext } from "../../context";
import { useRecoilState } from "recoil";
import { stylistIdData } from "@/app/utils/atom/userData";
import CalendarBox from "../Date/CalendarBox";

interface Props {
  productList: ServiceType[];
  stylistKey: string | null;
}

export default function ProductShoppingBox({ productList, stylistKey }: Props) {
  const { selectedProductList } = useContext(ReservationContext);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProductList]);

  const makeNewProductList = productList.map((product: ServiceType) => {
    let newProduct: updateServiceType = { ...product };

    // how
    if (product.product.title === "제품 추천") newProduct.gifURL = BARCODE;
    else if (product.product.title === "온라인 동행 쇼핑") {
      newProduct.gifURL = BASKET;
      newProduct.date = null;
      newProduct.timeslots = [];
    } else {
      newProduct.gifURL = SHOPPING;
      newProduct.date = null;
      newProduct.timeslots = [];
    }

    return newProduct;
  });

  const calendarRef = useRef<HTMLDivElement>(null);
  return (
    <div className="text-custom_white mt-[25px] flex h-fit w-full flex-col items-center">
      <div className="font-branding text-[24px]">
        Step2. <span className="font-main">쇼핑 방법 선택</span>
      </div>
      <div className="mt-[3px] flex h-[60px] w-full items-center pl-[10px] font-main text-[12px]">
        상담 내용을 기반으로 고객님께 최적의 스타일과 제품을
        <br />
        스타일리스트와 함께 찾아갑니다.
      </div>
      <div className="mt-[36px] flex h-[20px] w-full items-center pl-[10px] font-main text-[12px]">
        아래에서 하나를 선택하세요.
      </div>

      <div className="mt-[12px] flex h-fit w-full flex-col gap-[12px] px-[3%]">
        {makeNewProductList.map((item: updateServiceType, idx: number) => {
          return (
            <ProductRow
              key={idx}
              stylistKey={stylistKey}
              card={"shopping"}
              service_id={item.service_id}
              stylist_id={item.stylist_id}
              product={item.product}
              price={item.price}
              gifURL={item.gifURL}
            />
          );
        })}
      </div>
      {selectedProductList.shopping &&
      selectedProductList.shopping[0].title !== "제품 추천" ? (
        <div
          className="flex h-fit w-full flex-col pb-[100px] pt-[40px]"
          ref={calendarRef}
        >
          <CalendarBox type={"shopping"} />
        </div>
      ) : null}
    </div>
  );
}
