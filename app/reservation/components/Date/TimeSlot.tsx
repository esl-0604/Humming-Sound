"use client";

import { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import { ReservationContext } from "../../context";

interface Props {
  time: string;
  disabled: boolean;
}

export default function TimeSlot({ time, disabled }: Props) {
  const { step, selectedProductList, setSelectedProductList } =
    useContext(ReservationContext);
  const [selected, setSelected] = useState(false);

  const type = step.step === "Date1" ? "how" : "shopping";

  useEffect(() => {
    if (selectedProductList[type][0].timeslots.includes(time))
      setSelected(true);
    else setSelected(false);
  }, [selectedProductList]);

  const TimePick = () => {
    // console.log(productList);
    let updatepProductList = { ...selectedProductList };

    // 이미 선택된 slot 선택 시, 선택 해제
    if (selected) {
      updatepProductList[type][0].timeslots = updatepProductList[
        type
      ][0].timeslots.filter((item: string) => {
        return item !== time;
      });
      selectedProductList(updatepProductList);
    }

    // 새로운 slot 선택 시, 선택
    else {
      updatepProductList[type][0].timeslots.push(time);
      updatepProductList[type][0].timeslots = updatepProductList[
        type
      ][0].timeslots.sort((a: string, b: string) => {
        const [a_num, a_rest] = a.split(":");
        const [b_num, b_rest] = b.split(":");
        return Number(a_num) - Number(b_num);
      });
      setSelectedProductList(updatepProductList);
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
