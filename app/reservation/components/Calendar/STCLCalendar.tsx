"use client";

import "./Calendar.css";
import { useContext, useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import { ReservationContext } from "../../context";

interface Props {
  setDateSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function STCLCalendar({ setDateSelected }: Props) {
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

  const { step, productList, dateList, setDateList } =
    useContext(ReservationContext);
  const today = new Date();
  const [date, setDate] = useState<Date | null>(null);

  console.log(date?.toLocaleString());

  const DatePick = () => {
    if (step.step === "Date1") {
    }
    let updateDate = { ...dateList };
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
        value={date}
        onChange={(e: any) => {
          setDate(e);
          setDateSelected(true);
        }}
      />
    </div>
  );
}
