"use client";

import "./Calendar.css";
import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";

interface Props {}

export default function STCLCalendar({}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    // 함수를 만들어서 너비를 업데이트하도록 합니다.
    const updateDivWidth = () => {
      if (ref.current) {
        const width = ref.current.offsetWidth;
        setWidth(width);
        setHeight((6 / 7) * (width - 72) + 70);
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

  // useEffect(() => {
  //   console.log({ width: ref.current?.offsetWidth });
  //   console.log({ height: height });
  // }, [height]);

  const formatShortWeekday = (locale: string | undefined, date: Date) => {
    return date.toLocaleDateString(locale, { weekday: "short" })[0];
  };
  const formatMonthYear = (locale: string | undefined, date: Date) => {
    return date
      .toLocaleDateString(locale, { month: "short", year: "numeric" })
      .slice(0, 3)
      .toLowerCase();
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
      />
    </div>
  );
}
