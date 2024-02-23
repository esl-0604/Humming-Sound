"use client";

import Image from "next/image";
import ProductRow from "./ProductRow";
import { ServiceType, updateServiceType } from "@/app/utils/atom/productData";

import CYCLE from "@/public/gif/reservation/optional/cycle.json";
import PUZZLE from "@/public/gif/reservation/optional/puzzle.json";
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

export default function ProductOptionalBox({ productList, stylistKey }: Props) {
  const makeNewProductList = productList.map((product: ServiceType) => {
    let newProduct: updateServiceType = { ...product };

    // how
    if (product.product.title === "가진 옷 활용") newProduct.gifURL = CYCLE;
    else newProduct.gifURL = PUZZLE;

    return newProduct;
  });

  return (
    <div className="text-custom_white mt-[25px] flex h-fit w-full flex-col items-center">
      <div className="font-branding text-[24px]">
        Step3. <span className="font-main">추가 상품 선택</span>
      </div>
      <div className="mt-[3px] flex h-[60px] w-full items-center pl-[10px] font-main text-[12px]">
        옷장에 잠들어 있는 옷들의 잠재력을 찾아보세요.
        <br />
        기존 스타일을 업그레이드할 수 있는 상세한 피드백을 받아보세요.
      </div>
      <div className="mt-[36px] flex h-[20px] w-full items-center pl-[10px] font-main text-[12px]">
        원하시는 상품을 선택해주세요. (건너뛰기 가능)
      </div>

      <div className="mt-[12px] flex h-fit w-full flex-col gap-[12px] px-[3%]">
        {makeNewProductList.map((item: updateServiceType, idx: number) => {
          return (
            <ProductRow
              key={idx}
              stylistKey={stylistKey}
              card={"optional"}
              service_id={item.service_id}
              stylist_id={item.stylist_id}
              product={item.product}
              price={item.price}
              gifURL={item.gifURL}
            />
          );
        })}
      </div>
    </div>
  );
}
