"use client";

import { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import { ReservationContext } from "../../context";

interface Props {
  time: string;
  disabled: boolean;
}

export default function TimeSlot({ time, disabled }: Props) {
  const { step, productList, setProductList } = useContext(ReservationContext);
  const [selected, setSelected] = useState(false);

  const type = step.step === "Date1" ? "how" : "shopping";

  useEffect(() => {
    if (productList[type][0].timeSlot.includes(time)) setSelected(true);
    else setSelected(false);
  }, [productList]);

  const TimePick = () => {
    // console.log(productList);
    let updatepProductList = { ...productList };

    // 이미 선택된 slot 선택 시, 선택 해제
    if (selected) {
      updatepProductList[type][0].timeSlot = updatepProductList[
        type
      ][0].timeSlot.filter((item: string) => {
        return item !== time;
      });
      setProductList(updatepProductList);
    }

    // 새로운 slot 선택 시, 선택
    else {
      updatepProductList[type][0].timeSlot.push(time);
      updatepProductList[type][0].timeSlot = updatepProductList[
        type
      ][0].timeSlot.sort((a: string, b: string) => {
        const [a_num, a_rest] = a.split(":");
        const [b_num, b_rest] = b.split(":");
        return Number(a_num) - Number(b_num);
      });
      setProductList(updatepProductList);
    }
  };

  return (
    <div
      className={`flex h-[32px] w-[92px] items-center justify-center rounded-[50px] bg-gradient-to-r from-transparent to-[rgba(232,232,232,0.5)] ${
        disabled ? "opacity-20" : ""
      }`}
      onClick={() => {
        if (!disabled) TimePick();
      }}
    >
      <div
        className={`flex h-[30px] w-[90px] items-center justify-center rounded-[50px]  text-[15px]  ${
          selected
            ? "bg-[#E8E8E8] font-main text-[#161616]"
            : "bg-[#161616] font-default text-[#E8E8E8]"
        }`}
      >
        {time}
      </div>
    </div>
  );
}
