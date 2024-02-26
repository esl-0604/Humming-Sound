"use client";

import { useContext, useEffect, useState } from "react";
import "./Calendar.css";
import { ReservationContext } from "../../context";

interface Props {
  type: string;
  time: string;
  leftDisabled: boolean;
  rightDisabled: boolean;
  totalDisabled: boolean;
  selectedTime: string[];
  setSelectedTime: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function TimeSlotV2({
  time,
  leftDisabled,
  rightDisabled,
  totalDisabled,
  selectedTime,
  setSelectedTime,
}: Props) {
  const { step, selectedProductList, setSelectedProductList } =
    useContext(ReservationContext);
  const [selected, setSelected] = useState<boolean>(false);
  const [startTile, setStartTile] = useState<boolean>(false);
  const [middleTile, setMiddleTile] = useState<boolean>(false);
  const [endTile, setEndTile] = useState<boolean>(false);
  const [disabledTile, setDisabledTile] = useState<boolean>(false);

  useEffect(() => {
    if (selectedTime.length === 2) {
      // console.log(selectedTime.slice().sort());
      const [start, end] = selectedTime.slice().sort();
      const [startNum, startRest] = start.split(":");
      const [endNum, endRest] = end.split(":");
      const [currentNum, currentRest] = time.split(":");
      if (Number(startNum) === Number(currentNum)) {
        setSelected(true);
        setStartTile(true);
      } else if (Number(currentNum) === Number(endNum)) {
        setSelected(true);
        setEndTile(true);
      } else if (
        Number(startNum) < Number(currentNum) &&
        Number(currentNum) < Number(endNum)
      ) {
        setSelected(true);
        setMiddleTile(true);
      } else {
        setDisabledTile(true);
      }
    } else {
      setSelected(false);
      setStartTile(false);
      setMiddleTile(false);
      setEndTile(false);
      setDisabledTile(false);
      if (selectedTime.includes(time)) {
        setSelected(true);
      } else setSelected(false);
    }
  }, [selectedTime]);

  const TimePicker = () => {
    if (!disabledTile && !totalDisabled) {
      if (selectedTime.length < 2) {
        if (selectedTime.includes(time)) setSelectedTime([]);
        else {
          const updateSelectedTime = [...selectedTime];
          updateSelectedTime.push(time);
          setSelectedTime(updateSelectedTime);
        }
      } else setSelectedTime([]);
    }
  };

  return (
    <div className="flex h-full w-[80px] flex-col items-center justify-between">
      <div className="relative flex h-[12px] w-full">
        {/* tile button 의 로직 */}
        {/*
          1) disabledTile ? opacity-20
          2) selected ? opacity-100 bg-[#e8e8e8] : opacity-100 bg-[#161616]
        */}
        <div
          className={`absolute left-1/2 top-1/2 z-10 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full border border-[#e8e8e8] ${
            totalDisabled
              ? "opacity-20"
              : disabledTile
                ? "opacity-20"
                : selected
                  ? "bg-[#e8e8e8] opacity-100"
                  : "bg-[#161616] opacity-100"
          }`}
          onClick={TimePicker}
        />

        {/* 좌측 바의 로직 */}
        {/*
          1) time === "00:00" ? opacity-0
          2) leftDisabled ? opacity-0
          3) startTile ? opacity-0
          4) endTile ? opacity-100
          5) middleTile ? opacity-100
          6) disabledTile ? opacity-0
          7) 2개 선택 이전 ? opacity-20
        */}
        <div
          className={`h-full w-[50%] bg-gradient-to-r from-[#e8e8e8] to-[rgba(232,232,232,0)] ${
            totalDisabled
              ? "opacity-0"
              : time === "00:00"
                ? "opacity-0"
                : leftDisabled
                  ? "opacity-0"
                  : startTile
                    ? "opacity-0"
                    : endTile
                      ? "opacity-100"
                      : middleTile
                        ? "opacity-100"
                        : disabledTile
                          ? "opacity-0"
                          : "opacity-20"
          }`}
          style={{
            opacity: startTile ? "0%" : "",
          }}
        />

        {/* 우측 바의 로직 */}
        {/*
          1) time === "24:00" ? opacity-0
          2) rightDisabled ? opacity-0
          3) startTile ? opacity-100
          4) endTile ? opacity-0
          5) middleTile ? opacity-100
          6) disabledTile ? opacity-0
          7) 2개 선택 이전 ? opacity-20
        */}
        <div
          className={`h-full w-[50%] bg-gradient-to-l from-[#e8e8e8] to-[rgba(232,232,232,0)] ${
            totalDisabled
              ? "opacity-0"
              : time === "24:00"
                ? "opacity-0"
                : rightDisabled
                  ? "opacity-0"
                  : startTile
                    ? "opacity-100"
                    : endTile
                      ? "opacity-0"
                      : middleTile
                        ? "opacity-100"
                        : disabledTile
                          ? "opacity-0"
                          : "opacity-20"
          }`}
        />
      </div>

      {/* tile button 의 로직 */}
      {/*
        1) disabledTile ? opacity-20 font-default
        2) selected ? opacity-100 font-main : opacity-100 font-default
      */}
      <div
        className={`flex h-[20px] w-[40px] items-center justify-center text-[15px] text-[#e8e8e8] ${
          totalDisabled
            ? "font-default opacity-20"
            : disabledTile
              ? "font-default opacity-20"
              : selected
                ? "font-main opacity-100"
                : "font-default opacity-100"
        }`}
      >
        {time}
      </div>
    </div>
  );
}
