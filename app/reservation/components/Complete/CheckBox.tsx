"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import CHECK from "@/public/images/reservation/check.svg";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ReservationContext } from "../../context";
import CheckRow from "./CheckRow";
import PhoneInput from "./PhoneInput";
import LocalStorage from "@/app/utils/localstorage";

interface Props {}

export interface CheckRowType {
  title: string;
  type: string;
  gif: object;
  price: number;
  memo: string;
  count: number;
  date: string;
  timeslots: string[];
}

export default function CheckBox({}: Props) {
  const {
    setSelectedProductList,
    selectedProductList,
    inputPhoneNum,
    setInputPhoneNum,
    totalCost,
  } = useContext(ReservationContext);
  const [checkList, setCheckList] = useState<CheckRowType[]>([]);

  useEffect(() => {
    const keys = Object.keys(selectedProductList);
    if (keys.length > 0) {
      const resultList: CheckRowType[] = [];
      for (const key of keys) {
        selectedProductList[key].forEach((item: any) => {
          const itemElement = {
            title: item.title,
            type: item.type,
            gif: item.gifURL,
            price: item.price,
            memo: item.memo,
            count: item.count ? item.count : 0,
            date: item.date ? item.date : "",
            timeslots: item.timeslots ? item.timeslots : [],
          };

          resultList.push(itemElement);
        });
      }
      setCheckList(resultList);
    } else {
      const reservationData = LocalStorage.getItem("reservationData");
      if (reservationData !== null) {
        const { stylistKey, productListCache } = JSON.parse(reservationData);
        console.log({
          stylistKey: stylistKey,
          productListCache: productListCache,
        });
        setSelectedProductList(productListCache);
        LocalStorage.removeItem("reservationData");
        const keys = Object.keys(productListCache);
        const resultList: CheckRowType[] = [];
        for (const key of keys) {
          productListCache[key].forEach((item: any) => {
            const itemElement = {
              title: item.title,
              type: item.type,
              gif: item.gifURL,
              price: item.price,
              memo: item.memo,
              count: item.count ? item.count : 0,
              date: item.date ? item.date : "",
              timeslots: item.timeslots ? item.timeslots : [],
            };

            resultList.push(itemElement);
          });
        }
        setCheckList(resultList);
      }
    }
  }, []);

  return (
    <div className="text-custom_white mt-[25px] flex h-fit w-full flex-col items-center">
      <div className="font-branding text-[24px]">
        Step4. <span className="font-main">예약 확정</span>
      </div>
      <div className="mt-[3px] flex h-[60px] w-full items-center pl-[10px] font-main text-[12px]">
        최종 선택하신 상품들을 확인해주세요.
        <br />
        확인 후 다음 단계 진행 시 결제 화면으로 넘어갑니다.
      </div>
      {inputPhoneNum ? <PhoneInput /> : null}

      <div className="mt-[12px] flex h-fit w-full flex-col gap-[23px] px-[3%]">
        {checkList.map((item: CheckRowType, idx: number) => {
          return (
            <CheckRow
              key={idx}
              title={item.title}
              type={item.type}
              gif={item.gif}
              price={item.price}
              memo={item.memo}
              count={item.count}
              date={item.date}
              timeslots={item.timeslots}
            />
          );
        })}
      </div>
      <div className="mt-[23px] w-full px-[3%]">
        <div className="bg-custom_grey h-[4px] w-full" />
        <div className="flex w-full flex-row items-center justify-end font-branding">
          <div className="mr-[16px] text-[24px]">total</div>
          <div className="mr-[5px] text-[36px]">{totalCost}</div>
          <div className="pt-[8px] text-[24px]">&#8361;</div>
        </div>
      </div>
    </div>
  );
}
