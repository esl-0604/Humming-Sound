"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import WHEN from "@/public/images/reservation/when.svg";
import Image from "next/image";
import { formatMainText } from "@/app/utils/function/formatMainText";
import STCLCalendar from "./STCLCalendar";
import TimeSlot from "./TimeSlot";
import { ReservationContext } from "../../context";
import { useContext, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { stylistWorkingHours } from "@/app/utils/atom/stylistWorkingHours";
import { useRouter } from "next/navigation";

interface Props {}

export default function CalendarBox({}: Props) {
  const { step, productList, setProductList } = useContext(ReservationContext);

  const [dateOfWhat, setDateOfWhat] = useState<string>("");
  const [dateSelected, setDateSelected] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dateSelected)
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, [productList]);

  useEffect(() => {
    // step == Date1
    if (step.step === "Date1") {
      if (productList["how"]) {
        setDateOfWhat(productList["how"][0].title + " 컨설팅");
      }
    }

    // step == Date2
    else {
      if (productList["shopping"]) {
        setDateOfWhat(productList["shopping"][0].title);
      }
    }
  }, [productList, step]);

  const [workingHour, setWorkingHour] = useRecoilState(stylistWorkingHours);
  const [getDay, setGetDay] = useState<number>(0);
  const [disabledTimeSlot, setDisabledTimeSlot] = useState<string[]>([]);

  const type = step.step === "Date1" ? "how" : "shopping";

  useEffect(() => {
    setDateSelected(false);
    let updatepProductList = { ...productList };
    updatepProductList[type][0].timeSlot = [];
    setProductList(updatepProductList);
  }, [step]);

  useEffect(() => {
    setGetDay(new Date(productList[type][0].date).getDay());

    let updateDisabledTimeSlot: string[] = [];
    workingHour.disabled.forEach((item: any) => {
      if (item.date === productList[type][0].date)
        updateDisabledTimeSlot = [...item.timeSlots];
    });
    setDisabledTimeSlot(updateDisabledTimeSlot);
  }, [productList]);

  useEffect(() => {
    if (type === "how") {
      if (productList[type][0].timeSlot.length === 2) {
        const updateDisabledTimeSlot = workingHour.working_hour[getDay].filter(
          (item: string) => {
            return !productList[type][0].timeSlot.includes(item);
          },
        );
        setDisabledTimeSlot(updateDisabledTimeSlot);
      }
    } else {
      if (productList[type][0].timeSlot.length === 4) {
        const updateDisabledTimeSlot = workingHour.working_hour[getDay].filter(
          (item: string) => {
            return !productList[type][0].timeSlot.includes(item);
          },
        );
        setDisabledTimeSlot(updateDisabledTimeSlot);
      }
    }
  }, [productList]);

  return (
    <div className="flex h-fit w-full flex-col pb-[160px] text-[#E8E8E8]">
      <Image src={BLOCK} alt="block" />

      <div className="mb-[15px] mt-[10px] flex h-[30px] w-full items-center px-[10px] ">
        <Image src={WHEN} alt="when" />
      </div>

      <div className="flex min-h-[45px] w-full flex-col font-default text-[15px] leading-[20px]">
        <span>{formatMainText(`선택하신 <b>${dateOfWhat}의</b>`)}</span>
        {formatMainText("날짜와 시간을 정해주세요!")}
      </div>

      <div className="flex h-fit w-full flex-col">
        <div className="flex min-h-[30px] w-full items-end justify-center whitespace-pre font-default text-[10px]">
          {step.step === "Date1"
            ? formatMainText("<b>최소</b> 1시간 / <b>최대</b> 2시간")
            : formatMainText("<b>최소</b> 1시간 / <b>최대</b> 4시간")}
        </div>

        <div className="relative flex h-[390px] w-full">
          <div className="absolute left-1/2 top-0 flex h-fit w-full -translate-x-1/2 flex-col items-center">
            <div className="flex h-fit w-full items-center justify-center pt-[10px]">
              <STCLCalendar setDateSelected={setDateSelected} />
            </div>

            <div
              ref={ref}
              className="h-[70px] w-full overflow-x-auto py-[20px]"
            >
              {dateSelected ? (
                <div className="flex h-full w-fit items-center gap-[15.12px] px-[10px]">
                  {workingHour.working_hour[getDay].map(
                    (time: string, idx: number) => {
                      return (
                        <TimeSlot
                          key={idx}
                          time={time}
                          disabled={disabledTimeSlot.includes(time)}
                        />
                      );
                    },
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
