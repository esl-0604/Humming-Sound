"use client";
import { ScrolledButton } from "@/app/utils/atom/scrolledButton";
import { useRouter, useSearchParams } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { ReservationContext } from "../context";
import { addCommasToNumber } from "@/app/utils/function/addCommasToNumber";
import PopUp from "./PopUp";
import { popUp } from "@/app/utils/atom/popUp";
import { formatMainText } from "@/app/utils/function/formatMainText";
import { userData } from "@/app/utils/atom/userData";

interface Props {}

export default function ContinueButton({}: Props) {
  const router = useRouter();
  const stylistKey = useSearchParams().get("stylistKey");

  const [isPopUp, setIsPopUp] = useRecoilState(popUp);
  const [isScrolled, setIsScrolled] = useRecoilState(ScrolledButton);
  const [user, setUser] = useRecoilState(userData);
  const {
    step,
    totalCost,
    productList,
    firstClick,
    setFirstClick,
    setInputPhoneNum,
  } = useContext(ReservationContext);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    if (step.step !== "Product") setFirstClick(false);
  }, [step]);

  useEffect(() => {
    if (isPopUp.pop && isPopUp.type === "필수") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [isPopUp]);

  const ContinueClick = () => {
    let nextStep = "";
    const defaultURL = `/reservation?stylistKey=${stylistKey}&step=`;
    const CardList = Object.keys(productList);

    // 현재 == product 일 경우,
    if (step.step === "Product") {
      // 1) 필수 옵션 선택 안함 (consulting && how) --> 팝업창 : 필수
      if (!CardList.includes("consulting") || !CardList.includes("how")) {
        console.log("필수 상품을 선택해주세요!");
        setIsPopUp({ pop: true, type: "필수" });
      } else {
        // 2) 필수 옵션 선택 O && 선택 옵션 하나도 안함 최초 시도 --> 팝업창 : 옵션
        if (
          !CardList.includes("optional") &&
          !CardList.includes("shopping") &&
          !firstClick
        ) {
          console.log("옵션 상품들을 다시 한번 살펴봐주세요!");
          setIsPopUp({ pop: true, type: "옵션" });
          setFirstClick(true);
          window.scrollTo({
            top: 100000,
            left: 0,
            behavior: "smooth",
          });
        }

        // 3) 필수 옵션 선택 O && (재시도 or 선택 옵션 O)
        else {
          // 3-1) how == 온라인 or 오프라인 --> nextStep : Date1
          if (productList["how"][0].title !== "설문지") {
            nextStep = "Date1";
            router.push(defaultURL + nextStep);
          }

          // 3-2) how == 설문지
          else {
            // 3-1-1) shopping == 온라인 or 오프라인 --> nextStep : Date2
            if (
              CardList.includes("shopping") &&
              productList["shopping"][0].title !== "제품 추천"
            ) {
              nextStep = "Date2";
              router.push(defaultURL + nextStep);
            }

            // 3-1-2) shopping 없음 --> nextStep : Check
            // 3-1-3) shopping == 제품 추천 --> nextStep : Check
            else {
              nextStep = "Check";
              router.push(defaultURL + nextStep);
            }
          }
        }
      }
    }

    // 현재 == date1 일 경우,
    else if (step.step === "Date1") {
      // 날짜와 타임슬롯을 선택해야만 넘어갈 수 있음.
      if (
        productList["how"][0].date &&
        productList["how"][0].timeslots.length > 0
      ) {
        // 1) shopping 상품 미선택 --> nextStep : Check
        if (!CardList.includes("shopping")) {
          nextStep = "Check";
          router.push(defaultURL + nextStep);
        }

        // 2) shopping 상품 선택 && shopping == 제품 추천 --> nextStep : Check
        else {
          if (productList["shopping"][0].title === "제품 추천") {
            nextStep = "Check";
            router.push(defaultURL + nextStep);
          }

          // 3) shopping 상품 선택 && shopping == 온라인 동행쇼핑 or 오프라인 퍼스널 쇼핑 --> nextStep : Date2
          else {
            nextStep = "Date2";
            router.push(defaultURL + nextStep);
          }
        }
      }

      // 날짜와 타임슬롯을 선택하지 않았다면, 넘어갈 수 없음.
      else {
        console.log("날짜와 타임슬롯을 선택해주세요.");
      }
    }

    // 현재 == date2 일 경우, nextStep : Check
    else if (step.step === "Date2") {
      // 날짜와 타임슬롯을 선택해야만 넘어갈 수 있음.
      if (
        productList["shopping"][0].date &&
        productList["shopping"][0].timeslots.length > 0
      ) {
        nextStep = "Check";
        router.push(defaultURL + nextStep);
      }
      // 날짜와 타임슬롯을 선택하지 않았다면, 넘어갈 수 없음.
      else {
        console.log("날짜와 타임슬롯을 선택해주세요.");
      }
    }

    // 현재 == Check 일 경우,
    else if (step.step === "Check") {
      // 로그아웃 상태라면, nextStep : Login
      // console.log(user);
      if (!user) {
        nextStep = "Login";
        router.push(defaultURL + nextStep);
      }

      // 로그인 상태라면, 전화번호 입력 창 open
      else {
        // nextStep = "Done";
        // router.push(defaultURL + nextStep);
        setInputPhoneNum(true);
      }
    }

    // 현재 == Done 일 경우, main 으로 라우팅
    else router.push("/");
  };

  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (step.step === "Date1") {
      if (
        productList["how"][0].date &&
        productList["how"][0].timeslots.length > 0
      )
        setDisabled(false);
      else setDisabled(true);
    } else if (step.step === "Date2") {
      if (
        productList["shopping"][0].date &&
        productList["shopping"][0].timeslots.length > 0
      )
        setDisabled(false);
      else setDisabled(true);
    } else setDisabled(false);
  }, [productList, step]);

  return (
    <div
      className={`fixed bottom-[30px] z-10 h-[50px] w-full max-w-[480px] px-[55px] ${disabled ? "opacity-10" : ""}`}
    >
      <div
        className={`relative flex h-[50px] w-full cursor-pointer items-center justify-center rounded-[48px] shadow-button2 backdrop-blur-[7.5px] transition duration-500 ease-in-out ${
          isScrolled
            ? "bg-[#E8E8E8] text-[#161617]"
            : "bg-[rgba(0,0,0,0.10)] text-[#E8E8E8]"
        }`}
        onClick={ContinueClick}
      >
        {firstClick && isScrolled ? (
          <div className="absolute left-1/2 top-[-56px] flex h-[40px] w-[150px] -translate-x-1/2 transform flex-col items-center justify-center font-default text-[12px] text-[#E8E8E8] ">
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
            <p
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
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
