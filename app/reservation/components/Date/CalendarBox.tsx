"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import WHEN from "@/public/images/reservation/when.svg";
import Image from "next/image";
import { formatMainText } from "@/app/utils/function/formatMainText";
import STCLCalendar from "./STCLCalendar";
import TimeSlot from "./TimeSlot";
import { ReservationContext } from "../../context";
import { use, useContext, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  AvailableHoursType,
  ScheduleType,
  stylistWorkingHours,
} from "@/app/utils/atom/stylistWorkingHours";
import { useSearchParams } from "next/navigation";
import TimeSlotV2 from "./TimeSlot_V2";
import {
  checkTimeInIntervals,
  filterTimeRanges,
  generateTimeArray,
  getUnion,
  getWorkingHours,
  parseTimeSlots,
} from "@/app/utils/function/getWorkingHours";

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

  const stylistKey = useSearchParams().get("stylistKey");
  useEffect(() => {
    fetch(
      "/api/reservation/getTimeSlotsByStylistKey?stylist_key=" + stylistKey,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setWorkingHour(data);
      });
  }, []);

  const hoursArray: string[] = [];

  for (let i = 0; i <= 24; i++) {
    const paddedHour = i.toString().padStart(2, "0");
    hoursArray.push(`${paddedHour}:00`);
  }

  const [workingHour, setWorkingHour] =
    useRecoilState<AvailableHoursType>(stylistWorkingHours);
  const [getDay, setGetDay] = useState<string>("0");
  const [selectedTime, setSelectedTime] = useState<string[]>([]);

  const [availableTimeSlot, setAvailableTimeSlot] = useState<string[]>([]);
  const [disabledTimeSlot, setDisabledTimeSlot] = useState<string[]>([]);

  const type = step.step === "Date1" ? "how" : "shopping";

  useEffect(() => {
    setDateSelected(false);
    let updatepProductList = { ...productList };
    updatepProductList[type][0].timeslots = [];
    setProductList(updatepProductList);
  }, [step]);

  // useEffect(() => {
  //   // console.log(availableTimeSlot);
  //   console.log(getWorkingHours(availableTimeSlot));
  //   // console.log(
  //   //   getWorkingHours([
  //   //     "09:00",
  //   //     "11:00",
  //   //     "12:00",
  //   //     "13:00",
  //   //     "15:00",
  //   //     "16:00",
  //   //     "19:00",
  //   //     "23:00",
  //   //   ]),
  //   // );
  // }, [availableTimeSlot]);

  // 근무가능시간, 불가능시간, 선택요일을 전부 고려하여 근무할 수 있는 시간 업데이트
  useEffect(() => {
    // console.log({ workingHour: workingHour.working_hours[getDay] });
    // console.log({ disabledTimeSlot: disabledTimeSlot });
    setAvailableTimeSlot(
      workingHour.working_hours[getDay].filter(
        (element) => !disabledTimeSlot.includes(element),
      ),
    );
  }, [workingHour, disabledTimeSlot, getDay]);

  // 만약, 선택한 타임슬롯이 없다면, 캘린더에서 정한 날짜에 해당하는 disabled Date 업데이트
  // 만약 타임슬롯 하나를 선택했다면, 해당 슬롯에서 연속적으로 가능한 시간대만 고를 수 있도록 나머지 구간은 disabled
  useEffect(() => {
    if (selectedTime.length === 0) {
      if (productList[type][0].date) {
        setGetDay(new Date(productList[type][0].date).getDay()?.toString());
      }
      let updateDisabledTimeSlot: string[] = [];
      workingHour.disabled.forEach((item: ScheduleType) => {
        if (item.date === productList[type][0].date)
          updateDisabledTimeSlot = [...item.timeslots];
      });
      setDisabledTimeSlot(updateDisabledTimeSlot);
    } else {
      // console.log(getWorkingHours(availableTimeSlot));
      // console.log(selectedTime[0]);
      // console.log(disabledTimeSlot);

      const AbledTimeSlots = getWorkingHours(availableTimeSlot).filter(
        (element) =>
          filterTimeRanges(
            getWorkingHours(availableTimeSlot),
            selectedTime[0],
          ).includes(element),
      );
      const DisabledTimeSlots = getWorkingHours(availableTimeSlot).filter(
        (element) =>
          !filterTimeRanges(
            getWorkingHours(availableTimeSlot),
            selectedTime[0],
          ).includes(element),
      );
      let updateDisabledTimeSlot: string[] = [...disabledTimeSlot];
      updateDisabledTimeSlot = getUnion(
        updateDisabledTimeSlot,
        parseTimeSlots(DisabledTimeSlots),
      );
      // console.log(updateDisabledTimeSlot);

      if (selectedTime.length === 1) {
        // console.log(selectedTime[0]);
        // console.log(parseTimeSlots(AbledTimeSlots));
        if (type === "how") {
          parseTimeSlots(AbledTimeSlots).forEach((time: string) => {
            const gap =
              Number(selectedTime[0].split(":")[0]) -
              Number(time.split(":")[0]);
            if (gap > 2 || gap <= -2) updateDisabledTimeSlot.push(time);
          });
        } else {
          parseTimeSlots(AbledTimeSlots).forEach((time: string) => {
            const gap =
              Number(selectedTime[0].split(":")[0]) -
              Number(time.split(":")[0]);
            if (gap > 4 || gap <= -4) updateDisabledTimeSlot.push(time);
          });
        }
      }
      setDisabledTimeSlot(updateDisabledTimeSlot);
    }
  }, [selectedTime, productList]);

  useEffect(() => {
    if (selectedTime.length === 2) {
      const sortedTime = [...selectedTime].sort((a: string, b: string) => {
        return Number(a.split(":")[0]) - Number(b.split(":")[0]);
      });
      // console.log(generateTimeArray(sortedTime[0], sortedTime[1]));
      let updatepProductList = { ...productList };
      updatepProductList[type][0].timeslots = [
        ...generateTimeArray(sortedTime[0], sortedTime[1]),
      ];
      // console.log(updatepProductList);
      setProductList(updatepProductList);
    } else {
      let updatepProductList = { ...productList };
      updatepProductList[type][0].timeslots = [];
      setProductList(updatepProductList);
    }
  }, [selectedTime]);

  // 타임슬롯을 max까지 선택하였을 때, 나머지 disabled 처리
  // useEffect(() => {
  //   if (type === "how") {
  //     if (productList[type][0].timeslots.length === 2) {
  //       const updateDisabledTimeSlot = workingHour.working_hours[getDay].filter(
  //         (item: string) => {
  //           return !productList[type][0].timeslots.includes(item);
  //         },
  //       );
  //       setDisabledTimeSlot(updateDisabledTimeSlot);
  //     }
  //   } else {
  //     if (productList[type][0].timeslots.length === 4) {
  //       const updateDisabledTimeSlot = workingHour.working_hours[getDay].filter(
  //         (item: string) => {
  //           return !productList[type][0].timeslots.includes(item);
  //         },
  //       );
  //       setDisabledTimeSlot(updateDisabledTimeSlot);
  //     }
  //   }
  // }, [productList]);

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
              <STCLCalendar
                setDateSelected={setDateSelected}
                setSelectedTime={setSelectedTime}
              />
            </div>

            <div
              ref={ref}
              className="h-[78px] w-full overflow-x-auto py-[20px]"
            >
              {dateSelected ? (
                <div className="flex h-full w-fit items-center px-[10px]">
                  {/* {workingHour.working_hours[getDay].map(
                    (time: string, idx: number) => {
                      return (
                        <TimeSlot
                          key={idx}
                          time={time}
                          disabled={disabledTimeSlot.includes(time)}
                        />
                      );
                    },
                  )} */}
                  {hoursArray.map((time: string, index: number) => {
                    const type = checkTimeInIntervals(
                      time,
                      getWorkingHours(availableTimeSlot),
                    );
                    // console.log({
                    //   time: time,
                    //   issue: checkTimeInIntervals(
                    //     time,
                    //     getWorkingHours(availableTimeSlot),
                    //   ),
                    // });

                    return (
                      <TimeSlotV2
                        key={index}
                        time={time}
                        leftDisabled={type === "Start"}
                        rightDisabled={type === "End"}
                        totalDisabled={type === "Disabled"}
                        selectedTime={selectedTime}
                        setSelectedTime={setSelectedTime}
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
