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
import { ServiceType, updateServiceType } from "@/app/utils/atom/productData";

interface Props {
  type: string;
}

export default function CalendarBox({ type }: Props) {
  const { step, selectedProductList, setSelectedProductList } =
    useContext(ReservationContext);

  // useEffect(() => {
  //   console.log(selectedProductList);
  // }, [selectedProductList]);
  const [dateOfWhat, setDateOfWhat] = useState<string>("");
  const [dateSelected, setDateSelected] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(productList);
  // }, []);

  // useEffect(() => {
  //   // step == Date1
  //   if (step.step === "Date1") {
  //     if (productList["how"]) {
  //       setDateOfWhat(productList["how"][0].title + " 컨설팅");
  //     }
  //   }

  //   // step == Date2
  //   else {
  //     if (productList["shopping"]) {
  //       setDateOfWhat(productList["shopping"][0].title);
  //     }
  //   }
  // }, [productList, step]);

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
  const [focusSlot, setFocusSlot] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (dateSelected)
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }, [selectedProductList]);

  // const type = step.step === "Date1" ? "how" : "shopping";

  useEffect(() => {
    setDateSelected(false);
    let updatepProductList = { ...selectedProductList };
    updatepProductList[type][0].timeslots = [];
    setSelectedProductList(updatepProductList);
  }, [step]);

  useEffect(() => {
    if (availableTimeSlot.length > 0) {
      const focus = Number(availableTimeSlot[0].split(":")[0]);
      // console.log(focus);
      // console.log(availableTimeSlot);
      setFocusSlot((prev) => focus);
    }
    // console.log(getWorkingHours(availableTimeSlot));
    // console.log(
    //   getWorkingHours([
    //     "09:00",
    //     "11:00",
    //     "12:00",
    //     "13:00",
    //     "15:00",
    //     "16:00",
    //     "19:00",
    //     "23:00",
    //   ]),
    // );
  }, [availableTimeSlot]);

  useEffect(() => {
    const targetElement = slotRef.current?.children[focusSlot];
    // console.log(targetElement);
    // console.log(focusSlot);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        inline: "start",
      });
    }
  }, [focusSlot, selectedProductList]);

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
      if (selectedProductList[type][0].date) {
        setGetDay(
          new Date(selectedProductList[type][0].date).getDay()?.toString(),
        );
      }
      let updateDisabledTimeSlot: string[] = [];
      if (
        type === "shopping" &&
        selectedProductList["how"][0].title === "오프라인 + 설문지" &&
        selectedProductList["shopping"][0].title === "오프라인 동행 쇼핑" &&
        selectedProductList["shopping"][0].date ===
          selectedProductList["how"][0].date
      ) {
        const timeslots = generateTimeArray("09:00", "22:00");
        const selectedOfflineSurveyTime =
          selectedProductList["how"][0].timeslots[
            selectedProductList["how"][0].timeslots.length - 1
          ];
        const startIndex = timeslots.indexOf("09:00");
        const endIndex = timeslots.indexOf(selectedOfflineSurveyTime);

        const newArray = timeslots.slice(startIndex, endIndex + 1);

        updateDisabledTimeSlot = newArray;
      }
      workingHour.disabled.forEach((item: ScheduleType) => {
        if (item.date === selectedProductList[type][0].date)
          updateDisabledTimeSlot = [...item.timeslots];
      });
      setDisabledTimeSlot(updateDisabledTimeSlot);

      // console.log(updateDisabledTimeSlot);
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
            if (gap > 3 || gap <= -3) updateDisabledTimeSlot.push(time);
          });
        } else {
          parseTimeSlots(AbledTimeSlots).forEach((time: string) => {
            const gap =
              Number(selectedTime[0].split(":")[0]) -
              Number(time.split(":")[0]);
            if (gap > 3 || gap <= -3) updateDisabledTimeSlot.push(time);
          });
        }
      }
      setDisabledTimeSlot(updateDisabledTimeSlot);
    }
  }, [selectedTime, selectedProductList]);

  useEffect(() => {
    if (selectedTime.length === 2) {
      const sortedTime = [...selectedTime].sort((a: string, b: string) => {
        return Number(a.split(":")[0]) - Number(b.split(":")[0]);
      });
      // console.log(generateTimeArray(sortedTime[0], sortedTime[1]));
      let updatepProductList = { ...selectedProductList };
      updatepProductList[type][0].timeslots = [
        ...generateTimeArray(sortedTime[0], sortedTime[1]),
      ];
      // console.log(updatepProductList);
      setSelectedProductList(updatepProductList);
    } else {
      let updatepProductList = { ...selectedProductList };
      updatepProductList[type][0].timeslots = [];
      setSelectedProductList(updatepProductList);
    }
  }, [selectedTime]);

  const refreshTimeSlots = () => {
    if (selectedTime.length === 2) setSelectedTime([]);
  };

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
    <div className="flex h-fit w-full flex-col text-[#E8E8E8]">
      <div className="flex h-fit w-full flex-col">
        <div className="flex h-[45px] px-[3%] font-main text-[15px]">
          선택하신 상담을 진행할
          <br />
          날짜와 시간을 정해주세요!
        </div>
        <div className="flex min-h-[30px] w-full items-end justify-center whitespace-pre font-default text-[10px]">
          {type === "how"
            ? formatMainText("<b>최소</b> 1시간 / <b>최대</b> 3시간")
            : formatMainText("<b>최소</b> 1시간 / <b>최대</b> 3시간")}
        </div>

        <div className="relative flex h-[390px] w-full">
          <div className="absolute left-1/2 top-0 flex h-fit w-full -translate-x-1/2 flex-col items-center">
            <div className="flex h-fit w-full items-center justify-center pt-[10px]">
              <STCLCalendar
                type={type}
                setDateSelected={setDateSelected}
                setSelectedTime={setSelectedTime}
              />
            </div>

            <div
              ref={ref}
              className="h-[78px] w-full overflow-x-auto py-[20px]"
            >
              {dateSelected ? (
                <div
                  ref={slotRef}
                  className="flex h-full w-fit items-center px-[10px]"
                  onClick={refreshTimeSlots}
                >
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
                        type={type}
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
