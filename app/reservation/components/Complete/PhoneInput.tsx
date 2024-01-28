"use client";

import Lottie from "lottie-react";
import ESSENTIAL from "@/public/gif/reservation/popup/essential.json";
import NOCONTENTS from "@/public/gif/reservation/popup/nocontents.json";
import OPTIONAL from "@/public/gif/reservation/popup/optional.json";
import { useContext, useEffect, useState } from "react";
import { formatMainText } from "@/app/utils/function/formatMainText";
import { ReservationContext } from "../../context";
import { useRecoilValue } from "recoil";
import { stylistIdData, userData } from "@/app/utils/atom/userData";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {}

export default function PhoneInput({}: Props) {
  const { productList, setInputPhoneNum, setSpinner } =
    useContext(ReservationContext);
  const user = useRecoilValue(userData);
  const stylistId = useRecoilValue(stylistIdData);
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [noValidation, setNoValidation] = useState<boolean>(false);

  const router = useRouter();
  const stylistKey = useSearchParams().get("stylistKey");

  const handleInputChange = (e: any) => {
    let inputValue = e.target.value.replace(/\D/g, ""); // 숫자만 남기기
    if (inputValue.length > 11) {
      inputValue = inputValue.slice(0, 11); // 최대 11자리까지만 허용
    }
    if (inputValue.length > 3 && inputValue.length <= 7) {
      inputValue = inputValue.slice(0, 3) + "-" + inputValue.slice(3); // 3번째 숫자 뒤에 '-'
    } else if (inputValue.length > 7) {
      inputValue =
        inputValue.slice(0, 3) +
        "-" +
        inputValue.slice(3, 7) +
        "-" +
        inputValue.slice(7); // 3번째와 7번째 숫자 뒤에 '-' 추가
    }
    setPhoneNum(inputValue);
  };

  const PostReservation = async () => {
    if (phoneNum.length === 13 && name.length > 0) {
      setSpinner(true);
      const updateProductList: any = {
        consulting: [],
        how: [],
        optional: [],
        shopping: [],
      };

      Object.keys(updateProductList).forEach((type) => {
        if (Object.keys(productList).includes(type)) {
          let newList: any = productList[type][0];
          delete newList.gifURL;
          delete newList.memo;
          // console.log(newList);
          updateProductList[type].push(newList);
        }
      });

      // console.log(updateProductList);

      const body = {
        stylist_id: stylistId,
        user_id: user?.user_id,
        user_name: name,
        user_phone_number: phoneNum,
        services: updateProductList,
      };
      console.log(body);
      await fetch("/api/reservation/postReservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data === "success") {
            const defaultURL = `/reservation?stylistKey=${stylistKey}&step=`;
            router.push(defaultURL + "Done");
          }
          setSpinner(false);
        });
    } else {
      setNoValidation(true);
    }
  };

  useEffect(() => {
    if (phoneNum.length === 13 && name.length > 0) setNoValidation(false);
  }, [phoneNum]);

  return (
    <>
      <div
        className="fixed left-1/2 top-0 z-40 h-full w-full max-w-[480px] -translate-x-1/2 transform bg-black opacity-50 "
        onClick={() => setInputPhoneNum(false)}
      />
      <div className="fixed left-1/2 top-1/2 z-40 flex h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 transform flex-col rounded-[48px] bg-[rgba(0,0,0,0.10)] text-[#E8E8E8] shadow-button2 backdrop-blur-[7.5px]">
        <div className="flex h-full w-full flex-col items-center justify-between px-[25px] py-[47px]">
          <div className="flex h-[40px] w-full flex-col items-center justify-center font-default text-[12px]">
            <span className="flex w-full justify-center">예약 진행을 위해</span>
            <span className="flex w-full justify-center whitespace-pre">
              {formatMainText("<b>이름, 전화번호</b>를 입력해주세요!")}
            </span>
          </div>

          <div className="relative flex h-[33px] w-full items-center bg-[rgba(255,255,255,0.01)] pl-[17px] shadow-button3">
            <input
              className="mr-[33px] h-full w-full border-none bg-transparent px-[2px] text-[12px] outline-none"
              placeholder="이름 입력"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {noValidation && name.length === 0 ? (
              <div className="absolute left-[20px] top-[27px] font-default text-[8px] text-[#D99BFF]">
                이름을 확인해주세요!
              </div>
            ) : null}
          </div>
          <div className="relative flex h-[33px] w-full items-center bg-[rgba(255,255,255,0.01)] pl-[17px] shadow-button3">
            <input
              className="mr-[33px] h-full w-full border-none bg-transparent px-[2px] text-[12px] outline-none"
              placeholder="전화번호 입력"
              onChange={handleInputChange}
              value={phoneNum}
            />
            {noValidation && phoneNum.length < 13 ? (
              <div className="absolute left-[20px] top-[27px] font-default text-[8px] text-[#D99BFF]">
                전화번호를 확인해주세요!
              </div>
            ) : null}
            <div
              onClick={PostReservation}
              className="absolute right-0 top-1/2 flex h-full w-[33px] -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full bg-[rgba(255,255,255,0.01)] shadow-button3"
            >
              {">"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
