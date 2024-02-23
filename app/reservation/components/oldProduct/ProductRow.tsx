"use client";

import Lottie from "lottie-react";
import React, { useContext, useEffect, useRef, useState } from "react";
import { addCommasToNumber } from "@/app/utils/function/addCommasToNumber";
import { formatMainText } from "@/app/utils/function/formatMainText";
import { ReservationContext } from "../../context";
import { updateServiceType } from "./ProductCard";
import { insertNewline } from "@/app/utils/function/insertNewline";
import LocalStorage from "@/app/utils/localstorage";

interface Props extends updateServiceType {
  card: string;
  stylistKey: string | null;
}

export default function ProductRow({
  stylistKey,
  card,
  service_id,
  stylist_id,
  product,
  price,
  gifURL,
}: Props) {
  const memoList = product.memo.split("\n");
  const titleList = insertNewline(product.title).split("\n");

  const [select, setSelected] = useState<boolean>(false);
  const [optionNum, setOptionNum] = useState<number>(1);
  const { productList, setProductList } = useContext(ReservationContext);
  const userId = LocalStorage.getItem("userId");

  const productSelectionLog = async (step: string, isSelected: boolean) => {
    const body = {
      logging_id: "product_selection_click",
      session_id: sessionStorage.getItem("sessionId"),
      user_id: userId ? userId : null,
      stylist_key: stylistKey,
      etc: {
        step: step,
        service_id: service_id,
        isSelected: isSelected,
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
  useEffect(() => {
    if (productList) {
      // card 당 상품 중복 선택 불가능 (optional은 가능)
      if (card !== "optional") {
        if (Object.keys(productList).includes(card)) {
          if (productList[card][0].title === product.title) setSelected(true);
          else setSelected(false);
        } else setSelected(false);
      }
      // card가 optional일 경우
      else {
        if (productList[card]?.length === 0) {
          let updateProductList = {
            ...productList,
          };
          delete updateProductList[card];
          setProductList(updateProductList);
        }
      }
    }
  }, [productList]);

  const SetProductList = () => {
    // card 당 상품 중복 선택 불가능
    if (card !== "optional") {
      // 선택 -> 미선택
      if (select) {
        let updateProductList = {
          ...productList,
        };
        delete updateProductList[card];
        setProductList(updateProductList);
      }
    }

    setSelected(!select);
    productSelectionLog("Product", !select);
    setOptionNum(1);
  };

  useEffect(() => {
    // card 당 상품 중복 선택 불가능
    if (card !== "optional") {
      // 미선택 -> 선택
      if (select) {
        let updateProductList = {
          ...productList,
        };
        if (product.cost_type === "byEA") {
          updateProductList[card] = [
            {
              service_id: service_id,
              title: product.title,
              type: product.cost_type,
              price: price,
              count: optionNum,
              memo: product.memo,
              gifURL: gifURL,
            },
          ];
        } else if (product.cost_type === "byHour") {
          updateProductList[card] = [
            {
              service_id: service_id,
              title: product.title,
              type: product.cost_type,
              price: price,
              date: null,
              timeslots: [],
              memo: product.memo,
              gifURL: gifURL,
            },
          ];
        } else {
          updateProductList[card] = [
            {
              service_id: service_id,
              title: product.title,
              type: product.cost_type,
              price: price,
              memo: product.memo,
              gifURL: gifURL,
            },
          ];
        }
        setProductList(updateProductList);
      }
    }

    // optional card의 경우에는 상품 중복 선택이 가능
    else {
      let temp = { ...productList };
      if (select) {
        if (temp[card]) {
          // console.log(temp);
          let updateCard = temp[card]?.filter(
            (item: any) => item.title !== product.title,
          );
          // console.log(updateProductList);
          updateCard.push({
            service_id: service_id,
            title: product.title,
            type: product.cost_type,
            price: price,
            count: optionNum,
            memo: product.memo,
            gifURL: gifURL,
          });
          temp[card] = updateCard;
          setProductList(temp);
        } else {
          temp[card] = [];
          temp[card].push({
            service_id: service_id,
            title: product.title,
            type: product.cost_type,
            price: price,
            count: optionNum,
            memo: product.memo,
            gifURL: gifURL,
          });
          // console.log(temp);
          setProductList(temp);
        }
      } else {
        let temp = { ...productList };
        // console.log(temp);
        if (temp[card]) {
          let updateCard = temp[card].filter(
            (item: any) => item.title !== product.title,
          );
          temp[card] = updateCard;
          setProductList(temp);
        }
      }
    }
  }, [select, optionNum]);

  const SettingOptionNum = (type: string) => {
    if (type === "minus") {
      if (optionNum === 1) {
        setSelected(false);
      } else setOptionNum((prev) => prev - 1);
    } else {
      setOptionNum((prev) => prev + 1);
    }
  };

  const lottieRef = useRef<any>();

  useEffect(() => {
    if (!select) lottieRef.current.stop();
    else lottieRef.current.play();
  }, [select]);

  return (
    <div
      className={`flex h-fit w-full cursor-pointer gap-[30px] ${select ? "" : "opacity-50"}`}
      onClick={SetProductList}
    >
      <div className="ml-[4px] flex w-[50px] flex-col gap-[10px] text-[#E8E8E8] ">
        <div className="flex h-[50px] w-[50px] items-center justify-center overflow-hidden rounded-[10px]">
          <Lottie animationData={gifURL} lottieRef={lottieRef} />
        </div>
        <div
          className={`flex h-[16px] w-full  flex-col items-center justify-center text-[13.15px] leading-[100%] ${select ? "font-highlight" : "font-main"}`}
        >
          {titleList.map((list: string, index: number) => {
            // const formatText = formatMainText(list);
            return (
              <span key={index} className="whitespace-nowrap">
                {/* {formatText} */}
                {list}
              </span>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 flex-col font-main ">
        <div className="mb-[2px] flex h-[20px] items-center justify-between text-[12px]">
          {price > 0 ? (
            <div className="flex h-full items-center">
              <span className="mr-[7px] flex h-full w-[10px] items-center">
                ₩
              </span>
              <span className="flex h-full items-center justify-end">
                {product.cost_type !== "total" ? "+" : null}
                {addCommasToNumber(price)}
              </span>
              {product.cost_type === "byHour" ? (
                <span className="font-default">/h</span>
              ) : product.cost_type === "byEA" ? (
                <span className="font-default">
                  /{card === "optional" ? "3" : "1"}개
                </span>
              ) : null}
            </div>
          ) : (
            <div className="flex h-full items-center px-[10px]">기본 제공</div>
          )}
          {product.cost_type === "byEA" && select ? (
            <div
              className="flex h-full w-[50px] items-center justify-between"
              onClick={(event) => event.stopPropagation()}
            >
              <div
                className="flex h-full w-[10px] cursor-pointer items-center justify-center font-main"
                onClick={() => {
                  SettingOptionNum("minus");
                }}
              >
                -
              </div>
              <div className="flex h-full w-[20px] items-center justify-center rounded-[5px] bg-[rgba(255,255,255,0.01)] font-main shadow-button3">
                {optionNum}
              </div>
              <div
                className="flex h-full w-[10px] cursor-pointer items-center justify-center font-main"
                onClick={() => {
                  SettingOptionNum("plus");
                }}
              >
                +
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-1 flex-col justify-center font-default text-[11px] leading-[16.157px] opacity-75 ">
          {memoList.map((list: string, index: number) => {
            const formatText = formatMainText(list);
            return <span key={index}>{formatText}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
