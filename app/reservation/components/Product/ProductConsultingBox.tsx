"use client";

import Image from "next/image";
import ProductRow from "./ProductRow";
import { ServiceType, updateServiceType } from "@/app/utils/atom/productData";

import REPORT from "@/public/gif/reservation/how/report.json";
import ONLINE from "@/public/gif/reservation/how/online.json";
import OFFLINE from "@/public/gif/reservation/how/offline.json";
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

export default function ProductConsultingBox({
  productList,
  stylistKey,
}: Props) {
  const { selectedProductList } = useContext(ReservationContext);

  useEffect(() => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedProductList]);

  const makeNewProductList = productList.map((product: ServiceType) => {
    let newProduct: updateServiceType = { ...product };

    // how

    if (product.product.title === "설문지") newProduct.gifURL = REPORT;
    else if (product.product.title === "온라인") {
      newProduct.gifURL = ONLINE;
      newProduct.date = null;
      newProduct.timeslots = [];
    } else {
      newProduct.gifURL = OFFLINE;
      newProduct.date = null;
      newProduct.timeslots = [];
    }

    return newProduct;
  });

  const calendarRef = useRef<HTMLDivElement>(null);
  return (
    <div className="text-custom_white mt-[25px] flex h-fit w-full flex-col items-center">
      <div className="font-branding text-[24px]">
        Step1. <span className="font-main">상담 방법 선택</span>
      </div>
      <div className="mt-[3px] flex h-[60px] w-full items-center pl-[10px] font-main text-[12px]">
        스타일리스트에게 고객님을 알려주세요.
        <br />
        스타일리스트가 고객님만을 위한 스타일링을 준비할 수 있습니다.
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
              card={"how"}
              service_id={item.service_id}
              stylist_id={item.stylist_id}
              product={item.product}
              price={item.price}
              gifURL={item.gifURL}
            />
          );
        })}
      </div>
      {selectedProductList.how &&
      selectedProductList.how[0].title !== "설문지" ? (
        <div
          className="flex h-fit w-full flex-col pb-[200px]"
          ref={calendarRef}
        >
          <CalendarBox type={"how"} />
        </div>
      ) : null}
    </div>
  );
}
