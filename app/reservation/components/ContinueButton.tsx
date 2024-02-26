"use client";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { ReservationContext } from "../context";
import { addCommasToNumber } from "@/app/utils/function/addCommasToNumber";
import { popUp } from "@/app/utils/atom/popUp";
import { formatMainText } from "@/app/utils/function/formatMainText";
import { userData } from "@/app/utils/atom/userData";

interface Props {}

export default function ContinueButton({}: Props) {
  const router = useRouter();
  const stylistKey = useSearchParams().get("stylistKey");

  const [isPopUp, setIsPopUp] = useRecoilState(popUp);
  const isScrolled = useRecoilValue(ScrolledButton);
  const user = useRecoilValue(userData);
  const userId = user?.user_id;
  const {
    step,
    totalCost,
    selectedProductList,
    firstClick,
    setFirstClick,
    setInputPhoneNum,
  } = useContext(ReservationContext);

  const reservationContinueLog = async (step: string) => {
    const body = {
      logging_id: "reservation_continue_click",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      stylist_key: stylistKey,
      etc: {
        step: step,
        selected_product: {
          how: selectedProductList.how?.map((item: any) => item.service_id),
          shopping: selectedProductList.shopping?.map(
            (item: any) => item.service_id,
          ),
          optional: selectedProductList.optional?.map(
            (item: any) => item.service_id,
          ),
        },
      },
    };
    await fetch("/api/log/postLog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  };

  const ContinueClick = () => {
    let nextStep = "";
    const defaultURL = `/reservation?stylistKey=${stylistKey}&step=`;
    const CardList = Object.keys(selectedProductList);
    // 현재 == product 일 경우,
    if (step.step === "ProductConsulting") {
      // 1) 필수 옵션 선택 안함 (consulting) --> 팝업창 : 필수
      if (!CardList.includes("how")) {
        console.log("필수 상품을 선택해주세요!");
        setIsPopUp({ pop: true, type: "필수" });
      } else {
        if (selectedProductList["how"][0].title !== "설문지") {
          if (
            selectedProductList["how"][0].date &&
            selectedProductList["how"][0].timeslots.length > 0
          ) {
            nextStep = "ProductShopping";
            router.push(defaultURL + nextStep);
            reservationContinueLog(step.step);
          } else {
            console.log("날짜와 타임슬롯을 선택해주세요.");
          }
        } else {
          nextStep = "ProductShopping";
          router.push(defaultURL + nextStep);
          reservationContinueLog(step.step);
        }
      }
    } else if (step.step === "ProductShopping") {
      if (!CardList.includes("shopping")) {
        console.log("필수 상품을 선택해주세요!");
        setIsPopUp({ pop: true, type: "필수" });
      } else {
        if (selectedProductList["shopping"][0].title !== "제품 추천") {
          if (
            selectedProductList["shopping"][0].date &&
            selectedProductList["shopping"][0].timeslots.length > 0
          ) {
            nextStep = "ProductOptional";
            router.push(defaultURL + nextStep);
            reservationContinueLog(step.step);
          } else {
            console.log("날짜와 타임슬롯을 선택해주세요.");
          }
        } else {
          nextStep = "ProductOptional";
          router.push(defaultURL + nextStep);
          reservationContinueLog(step.step);
        }
      }
    }

    // 현재 == date2 일 경우, nextStep : Check
    else if (step.step === "ProductOptional") {
      // 날짜와 타임슬롯을 선택해야만 넘어갈 수 있음.

      nextStep = "Check";
      router.push(defaultURL + nextStep);
      reservationContinueLog(step.step);
    }

    // 현재 == Check 일 경우,
    else if (step.step === "Check") {
      // 로그아웃 상태라면, nextStep : Login
      // console.log(user);
      // if (!user) {
      //   nextStep = "Login";
      //   router.push(defaultURL + nextStep);
      //   reservationContinueLog(step.step);
      // }

      // 로그인 상태라면, 전화번호 입력 창 open
      // else {
      // nextStep = "Done";
      // router.push(defaultURL + nextStep);
      reservationContinueLog(step.step);
      setInputPhoneNum(true);
      // }
    }

    // 현재 == Done 일 경우, main 으로 라우팅
    else router.push("/");
  };

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (step.step === "ProductConsulting") {
      if (selectedProductList["how"]) {
        if (selectedProductList["how"][0].title == "설문지") {
          setDisabled(false);
        } else if (selectedProductList["how"][0].title !== "설문지") {
          if (
            selectedProductList["how"][0].date &&
            selectedProductList["how"][0].timeslots.length > 0
          ) {
            setDisabled(false);
          } else setDisabled(true);
        }
      } else setDisabled(true);
    } else if (step.step === "ProductShopping") {
      if (selectedProductList["shopping"]) {
        if (selectedProductList["shopping"][0].title == "제품 추천") {
          setDisabled(false);
        } else if (selectedProductList["shopping"][0].title !== "제품 추천") {
          if (
            selectedProductList["shopping"][0].date &&
            selectedProductList["shopping"][0].timeslots.length > 0
          ) {
            setDisabled(false);
          } else setDisabled(true);
        }
      } else setDisabled(true);
    } else setDisabled(false);
  }, [selectedProductList, step]);

  return (
    <div
      className={`fixed bottom-[30px] z-10 h-[50px] w-full max-w-[480px] px-[55px] ${disabled ? "opacity-10" : ""}`}
    >
      <div
        className={`relative flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] transition duration-500 ease-in-out ${
          isScrolled
            ? "bg-custom_white text-[#161617]"
            : "text-custom_white bg-[rgba(0,0,0,0.10)]"
        }`}
        onClick={ContinueClick}
      >
        {firstClick && isScrolled ? (
          <div className="text-custom_white absolute left-1/2 top-[-56px] flex h-[40px] w-[150px] -translate-x-1/2 transform flex-col items-center justify-center font-default text-[12px] ">
            <span>{formatMainText("<b>만족도 높은 선택 옵션들</b>이")}</span>
            <span>{"아직 고객님을 기다리고 있어요!"}</span>
          </div>
        ) : null}
        {step.step === "Done" ? (
          <p
            className={` text-[16px] ${
              isScrolled ? "font-main" : "font-default"
            }`}
          >
            처음으로
            <span
              className={`whitespace-pre ${
                isScrolled ? "font-highlight" : "font-main"
              }`}
            >
              {" "}
              돌아가기
            </span>{" "}
            &gt;
          </p>
        ) : (
          <div
            className={`flex h-full w-full items-center justify-between px-[25px]`}
          >
            <p className={`"font-main" whitespace-pre text-[16px]`}>
              ₩ {addCommasToNumber(totalCost)}
              {step.step !== "Check" ? "~" : null}
            </p>
            {/* <p
              className={` whitespace-nowrap text-[16px] ${
                isScrolled ? "font-main" : "font-default"
              }`}
            >
              {step.step === "Check" && !user ? "로그인 후" : "계속"}
              <span
                className={`whitespace-pre ${
                  isScrolled ? "font-highlight" : "font-main"
                }`}
              >
                {" "}
                진행하기
              </span>{" "}
              &gt;
            </p> */}
            <p
              className={` whitespace-nowrap text-[16px] ${
                isScrolled ? "font-main" : "font-default"
              }`}
            >
              계속
              <span
                className={`whitespace-pre ${
                  isScrolled ? "font-highlight" : "font-main"
                }`}
              >
                {" "}
                진행하기
              </span>{" "}
              &gt;
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
