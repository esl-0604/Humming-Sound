"use client";

import "./Calendar.css";
import { use, useContext, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { ReservationContext } from "../../context";
import { formatDateToString } from "@/app/utils/function/formatDateToString";
import { compareDatesByDay } from "@/app/utils/function/compareDatesByDay";

interface Props {
  setDateSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTime: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function STCLCalendar({
  setDateSelected,
  setSelectedTime,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 함수를 만들어서 너비를 업데이트하도록 합니다.
    const updateDivWidth = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        document.documentElement.style.setProperty(
          "--component-width",
          `${width}px`,
        );
      }
    };
    // 처음 마운트될 때 한 번 호출하고, 창 크기가 변경될 때마다 업데이트합니다.
    updateDivWidth();
    // 창 크기가 변경될 때마다 업데이트하는 이벤트 리스너를 추가합니다.
    window.addEventListener("resize", updateDivWidth);
    // 컴포넌트가 언마운트될 때 이벤트 리스너를 정리합니다.
    return () => {
      window.removeEventListener("resize", updateDivWidth);
    };
  }, []);

  const formatShortWeekday = (locale: string | undefined, date: Date) => {
    return date.toLocaleDateString(locale, { weekday: "short" })[0];
  };
  const formatMonthYear = (locale: string | undefined, date: Date) => {
    return date
      .toLocaleDateString(locale, { month: "short", year: "numeric" })
      .slice(0, 3)
      .toLowerCase();
  };

  const { step, productList, setProductList } = useContext(ReservationContext);
  const [date, setDate] = useState<Date | null>(null);
  const type = step.step === "Date1" ? "how" : "shopping";

  useEffect(() => {
    setDate(null);
  }, [step]);

  const DatePick = (date: Date) => {
    // console.log(productList);
    let updatepProductList = { ...productList };
    updatepProductList[type][0].date = formatDateToString(date);
    updatepProductList[type][0].timeslots = [];
    setProductList(updatepProductList);

    setDate(date);
    setDateSelected(true);
    setSelectedTime([]);
  };

  const tileDisabled = ({ date, view }: any) => {
    // 오늘 이전의 날짜를 비활성화
    if (type === "how") {
      const returnValue =
        compareDatesByDay(date, new Date()) < 0 ? true : false;
      return view === "month" && returnValue;
    } else {
      if (productList["how"][0].date) {
        const standardDate = new Date(productList["how"][0].date);
        const returnValue =
          compareDatesByDay(date, standardDate) < 2 ? true : false;
        return view === "month" && returnValue;
      } else {
        const returnValue =
          compareDatesByDay(date, new Date()) < 0 ? true : false;
        return view === "month" && returnValue;
      }
    }
  };
  return (
    <div ref={ref} className="flex w-full max-w-[352px] font-default">
      <Calendar
        locale="en-US"
        formatShortWeekday={formatShortWeekday}
        formatMonthYear={formatMonthYear}
        next2Label={null}
        prev2Label={null}
        // showNeighboringMonth={false}
        view={"month"}
        tileDisabled={tileDisabled}
        value={date}
        onChange={(e: any) => {
          if (date) {
            if (compareDatesByDay(e, date)) DatePick(e);
          } else DatePick(e);
        }}
        tileClassName={({ date, view }) => {
          if (type === "shopping") {
            const standardDate = new Date(productList["how"][0].date);
            // 여기에서 원하는 날짜에 대한 조건을 추가
            const isSpecialDate = compareDatesByDay(date, standardDate) === 0;

            // 클래스 이름을 동적으로 생성
            return isSpecialDate ? "special-date" : "";
          }
        }}
      />
    </div>
  );
}
