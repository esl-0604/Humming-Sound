"use client";

import { useRecoilState } from "recoil";
import Block from "./components/Block";
import { useSearchParams } from "next/navigation";
import ContinueButton from "./components/ContinueButton";
import { ReservationContext } from "./context";
import { useEffect, useState } from "react";
import ProductBox from "./components/Product/ProductBox";
import CalendarBox from "./components/Date/CalendarBox";
import CompleteBox from "./components/Complete/CompleteBox";
import { stylistData, stylistType } from "../utils/atom/stylistTestData";
import PopUp from "./components/PopUp";
import { PopUpType, popUp } from "../utils/atom/popUp";
import CheckBox from "./components/Complete/CheckBox";
import { formatMainText } from "../utils/function/formatMainText";
import LoginBox from "./components/Complete/LoginBox";
import { userData } from "../utils/atom/userData";
import Spinner from "./components/Spinner";
import Image from "next/image";

export default function Reservation() {
  const stylistKey = useSearchParams().get("stylistKey");
  const stepKey = useSearchParams().get("step");

  const [step, setStep] = useState<any>({ step: "Product" });
  const [productList, setProductList] = useState<any>({});
  const [totalCost, setTotalCost] = useState<number>(0);

  const [isPopUp, setIsPopUp] = useRecoilState<PopUpType>(popUp);
  const [firstClick, setFirstClick] = useState<boolean>(false);
  const [inputPhoneNum, setInputPhoneNum] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);

  const [user, setUser] = useRecoilState(userData);
  const [stylists, setStylists] = useRecoilState<stylistType>(stylistData);
  const stylist = stylists[stylistKey ? stylistKey : "testStylist"];

  useEffect(() => {
    // console.log(productList);
    const typeList = Object.keys(productList);
    let costs = 0;
    typeList.forEach((card: any) => {
      productList[card].forEach((item: any) => {
        if (item.type === "total") {
          costs += item.price;
        } else if (item.type === "byEA") {
          costs += item.price * item.count;
        } else {
          if (item.timeslots.length > 0)
            costs += item.price * item.timeslots.length;
          else costs += item.price;
        }
      });
    });
    setTotalCost(costs);
  }, [productList]);

  useEffect(() => {
    if (stepKey) setStep({ step: stepKey });
  }, [stepKey]);

  useEffect(() => {
    if (isPopUp.pop && isPopUp.type === "필수") {
      setTimeout(() => {
        setIsPopUp({ pop: false, type: "필수" });
      }, 1500);
    }
  }, [isPopUp]);

  if (stylistKey)
    return (
      <ReservationContext.Provider
        value={{
          step,
          setStep,
          productList,
          setProductList,
          totalCost,
          setTotalCost,
          firstClick,
          setFirstClick,
          inputPhoneNum,
          setInputPhoneNum,
          setSpinner,
        }}
      >
        <main className="relative flex min-h-screen w-full flex-col bg-[#161616] pb-[60px] text-[#E8E8E8]">
          {isPopUp.pop && isPopUp.type === "필수" ? (
            <PopUp type={isPopUp.type} />
          ) : null}
          {spinner ? <Spinner type="half" /> : null}
          {step.step === "Login" ? <LoginBox /> : null}
          <div className="relative flex h-full w-full flex-col px-[30px]">
            <div className="sticky top-0 z-30 h-fit w-full bg-[#161616]">
              <div className="mb-[35px] mt-[11px] flex h-[15px] w-full items-center font-highlight text-[15px]">
                예약하기
              </div>

              <div className="flex w-full flex-col gap-[10px] pb-[27px]">
                <Block />
                <div className="flex min-h-[60px] w-full flex-col font-default text-[30px] leading-[100%]">
                  <div className="flex min-h-[30px] flex-wrap items-center">
                    <span className="flex h-full items-center whitespace-pre font-highlight">
                      {step.step === "Check" || step.step === "Done"
                        ? user
                          ? user.nickname
                          : "멋진 수달"
                        : stylist.name}{" "}
                    </span>
                    <span className="flex h-full items-center whitespace-nowrap">
                      {step.step === "Check" || step.step === "Done"
                        ? "고객님의"
                        : "스타일리스트"}
                    </span>
                  </div>
                  <span className="flex min-h-[30px] items-center">
                    {step.step === "Check"
                      ? "예약을 확인해주세요!"
                      : step.step === "Done"
                        ? "예약이 확정되었어요!"
                        : "예약을 도와드릴게요."}
                  </span>
                </div>

                <div className="flex min-h-[45px] w-full flex-col font-default text-[15px] leading-[20px]">
                  <span>
                    {step.step === "Check"
                      ? "고객님만의 멋있는 분위기를 만들어줄 더 다양한"
                      : step.step === "Done"
                        ? formatMainText(
                            "아래 버튼을 누르고 <b>진행중인 과정을 확인해보세요.</b>",
                          )
                        : "무엇을 원하시든 맞춰드릴게요."}
                  </span>
                  <span>
                    {step.step === "Check"
                      ? "컨설팅이 준비되어 있어요. 빠진게 없는지 확인해주세요!"
                      : step.step === "Done"
                        ? "입금 확인 후 최종 일정이 확정됩니다!"
                        : "자유롭게 골라주세요!"}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full">
              {step.step === "Product" ? (
                <ProductBox />
              ) : step.step === "Date1" || step.step === "Date2" ? (
                <CalendarBox />
              ) : step.step === "Check" ? (
                <CheckBox />
              ) : step.step === "Done" ? (
                <CompleteBox />
              ) : null}
            </div>
          </div>
          <ContinueButton />
        </main>
      </ReservationContext.Provider>
    );
  else {
    return (
      <main className="relative flex min-h-screen w-full flex-col">
        <Spinner type="full" />
        <Image
          className="absolute left-1/2 top-[42px] z-50 translate-x-[-50%]"
          src="/images/mainLogo.svg"
          alt="mainLogo"
          width={121}
          height={35}
        />
      </main>
    );
  }
}
