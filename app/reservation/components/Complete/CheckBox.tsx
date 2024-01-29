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
  const { setProductList, productList, inputPhoneNum, setInputPhoneNum } =
    useContext(ReservationContext);
  const [checkList, setCheckList] = useState<CheckRowType[]>([]);

  useEffect(() => {
    const keys = Object.keys(productList);
    if (keys.length > 0) {
      const resultList: CheckRowType[] = [];
      for (const key of keys) {
        productList[key].forEach((item: any) => {
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
        setProductList(productListCache);
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
    <div className="flex h-fit w-full flex-col pb-[50px] text-[#E8E8E8]">
      {inputPhoneNum ? <PhoneInput /> : null}
      <Image src={BLOCK} alt="block" priority={true} />

      <div className="mb-[30px] mt-[10px] flex h-[30px] w-full items-center px-[10px] font-branding text-[30px] font-normal">
        <Image src={CHECK} alt="check" priority={true} />
      </div>

      <div className="flex w-full flex-1 flex-col items-center gap-[15px]">
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
    </div>
  );
}
