"use client";

import { useRecoilState, useRecoilValue } from "recoil";
import Block from "./components/Block";
import { useSearchParams } from "next/navigation";
import ContinueButton from "./components/ContinueButton";
import { ReservationContext } from "./context";
import { useEffect, useState } from "react";

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
import ProductConsultingBox from "./components/Product/ProductConsultingBox";
import ProductOptionalBox from "./components/Product/ProductOptionalBox";
import ProductShoppingBox from "./components/Product/ProductShoppingBox";
import { ServiceType } from "../utils/atom/productData";

export default function Reservation() {
  const stylistKey = useSearchParams().get("stylistKey");
  const stepKey = useSearchParams().get("step");

  const [step, setStep] = useState<any>({ step: "Product" });
  const [selectedProductList, setSelectedProductList] = useState<any>({});
  const [totalCost, setTotalCost] = useState<number>(0);

  const [isPopUp, setIsPopUp] = useRecoilState<PopUpType>(popUp);
  const [firstClick, setFirstClick] = useState<boolean>(false);
  const [inputPhoneNum, setInputPhoneNum] = useState<boolean>(false);
  const [spinner, setSpinner] = useState<boolean>(false);

  const user = useRecoilValue(userData);
  const stylists = useRecoilValue<stylistType>(stylistData);
  const stylist = stylists[stylistKey ? stylistKey : "testStylist"];
  const [serviceList, setServiceList] = useState<ServiceType[]>([]);
  const [sortedServiceList, setSortedServiceList] = useState<any>({});
  useEffect(() => {
    const typeList = Object.keys(selectedProductList);
    let costs = 0;
    typeList.forEach((card: any) => {
      selectedProductList[card].forEach((item: any) => {
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
  }, [selectedProductList]);

  useEffect(() => {
    if (serviceList.length === 0) {
      fetch(
        "/api/reservation/getServiceByStylistKey?stylist_key=" + stylistKey,
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
          setServiceList(data);
          setSortedServiceList(sortServiceList(data));

          if (data.length > 0) {
            const stylistID = data[0].stylist_id;
          }
        });
    }
  }, []);

  const sortServiceList = (serviceList: ServiceType[]) => {
    const resultObject: { [key: string]: ServiceType[] } = {};
    [
      ...new Set(serviceList.map((item: ServiceType) => item.product.type)),
    ].forEach((type: string) => {
      const sortedProductList = serviceList
        .filter((item: ServiceType) => item.product.type === type)
        .sort((a, b) => {
          return a.product.order - b.product.order;
        });
      resultObject[type] = sortedProductList;
    });
    // console.log(resultObject.how);
    return resultObject;
  };

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
          selectedProductList,
          setSelectedProductList,
          totalCost,
          setTotalCost,
          firstClick,
          setFirstClick,
          inputPhoneNum,
          setInputPhoneNum,
          setSpinner,
        }}
      >
        <main className="relative flex h-fit min-h-screen w-full flex-col bg-[#161616] text-[#E8E8E8]">
          {isPopUp.pop && isPopUp.type === "필수" ? (
            <PopUp type={isPopUp.type} />
          ) : null}
          {spinner ? <Spinner type="half" /> : null}
          {/* {step.step === "Login" ? <LoginBox /> : null} */}
          <div className="relative flex h-full w-full flex-col">
            <div className="sticky top-0 z-30 h-fit w-full bg-[#161616] px-[30px]">
              <div className="mb-[35px] mt-[11px] flex h-[15px] w-full items-center font-highlight text-[15px]">
                예약하기 - {stylist.name}
                <span className="ml-[3px] font-main">스타일리스트</span>
              </div>
            </div>
            {serviceList.length > 0 && step.step === "ProductConsulting" ? (
              <div className="flex flex-row items-center justify-center px-[3%]">
                <div className="absolute top-[52px] flex h-fit w-full flex-col items-center px-[3.75%]">
                  <div className="z-30 flex h-fit w-full flex-row">
                    <div className="bg-custom_white h-[5px] w-[20%]" />
                    <div className="bg-custom_grey h-[5px] w-[80%]" />
                  </div>
                </div>
                <ProductConsultingBox
                  productList={sortedServiceList.how}
                  stylistKey={stylistKey}
                />
              </div>
            ) : serviceList.length > 0 && step.step === "ProductShopping" ? (
              <div className="flex flex-row items-center justify-center px-[3%]">
                <div className="absolute top-[52px] flex h-fit w-full flex-col items-center px-[3.75%]">
                  <div className="z-30 flex h-fit w-full flex-row">
                    <div className="bg-custom_white h-[5px] w-[40%]" />
                    <div className="bg-custom_grey h-[5px] w-[60%]" />
                  </div>
                </div>
                <ProductShoppingBox
                  productList={sortedServiceList.shopping}
                  stylistKey={stylistKey}
                />
              </div>
            ) : serviceList.length > 0 && step.step === "ProductOptional" ? (
              <div className="flex flex-row items-center justify-center px-[3%]">
                <div className="absolute top-[52px] flex h-fit w-full flex-col items-center px-[3.75%]">
                  <div className="z-30 flex h-fit w-full flex-row">
                    <div className="bg-custom_white h-[5px] w-[60%]" />
                    <div className="bg-custom_grey h-[5px] w-[40%]" />
                  </div>
                </div>
                <ProductOptionalBox
                  productList={sortedServiceList.optional}
                  stylistKey={stylistKey}
                />
              </div>
            ) : serviceList.length > 0 && step.step === "Check" ? (
              <div className="flex flex-row items-center justify-center px-[3%]">
                <div className="absolute top-[52px] flex h-fit w-full flex-col items-center px-[3.75%]">
                  <div className="z-30 flex h-fit w-full flex-row">
                    <div className="bg-custom_white h-[5px] w-[80%]" />
                    <div className="bg-custom_grey h-[5px] w-[20%]" />
                  </div>
                </div>
                <CheckBox />
              </div>
            ) : serviceList.length > 0 && step.step === "Done" ? (
              <div className="flex flex-row items-center justify-center px-[3%]">
                <div className="absolute top-[52px] flex h-fit w-full flex-col items-center px-[3.75%]">
                  <div className="z-30 flex h-fit w-full flex-row">
                    <div className="bg-custom_white h-[5px] w-[100%]" />
                    <div className="bg-custom_grey h-[5px] w-[0%]" />
                  </div>
                </div>
                <CompleteBox />
              </div>
            ) : null}
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
          priority={true}
        />
      </main>
    );
  }
}
