"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import DOT from "@/public/images/reservation/essential.svg";
import Image from "next/image";
import ProductRow from "./ProductRow";
import { ServiceType } from "@/app/utils/atom/productData";
import PERSON from "@/public/gif/reservation/what/person.json";
import CYCLE from "@/public/gif/reservation/optional/cycle.json";
import PUZZLE from "@/public/gif/reservation/optional/puzzle.json";
import LAYER from "@/public/gif/reservation/what/layer.json";
import REPORT from "@/public/gif/reservation/how/report.json";
import ONLINE from "@/public/gif/reservation/how/online.json";
import OFFLINE from "@/public/gif/reservation/how/offline.json";
import BARCODE from "@/public/gif/reservation/add/barcode.json";
import BASKET from "@/public/gif/reservation/add/basket.json";
import SHOPPING from "@/public/gif/reservation/add/shopping.json";

interface Props {
  title: string;
  productList: ServiceType[];
}

export interface updateServiceType extends ServiceType {
  gifURL?: object;
  comment?: string;
}

export default function ProductCard({ title, productList }: Props) {
  // console.log({ title: title, productList: productList });
  let comment = "";

  const newProductList = productList.map((product: ServiceType) => {
    let newProduct: updateServiceType = { ...product };

    // consulting
    if (title === "consulting") {
      if (product.product.title === "스탠다드") newProduct.gifURL = PERSON;
      else {
        newProduct.gifURL = LAYER;
      }
      comment = "원하시는 컨설팅 상품을 골라주세요!";
    }

    // how
    else if (title === "how") {
      if (product.product.title === "설문지") newProduct.gifURL = REPORT;
      else if (product.product.title === "온라인") newProduct.gifURL = ONLINE;
      else newProduct.gifURL = OFFLINE;
      comment = "원하시는 컨설팅 방식을 골라주세요!";
    }

    // optional
    else if (title === "optional") {
      if (product.product.title === "가진 옷 활용") newProduct.gifURL = CYCLE;
      else newProduct.gifURL = PUZZLE;
      comment = "리포트에 부가적으로 제공될 선택 내용을 골라주세요!";
    }

    // shopping
    else {
      if (product.product.title === "제품 추천") newProduct.gifURL = BARCODE;
      else if (product.product.title === "온라인 동행 쇼핑")
        newProduct.gifURL = BASKET;
      else newProduct.gifURL = SHOPPING;
      comment = "컨설팅 이후 진행될 서비스를 골라주세요!";
    }

    return newProduct;
  });

  // console.log(newProductList);
  return (
    <div className="mt-[5px] flex h-fit w-full flex-col text-[#e8e8e8]">
      <Image src={BLOCK} alt="block" />

      <div className="relative  mt-[10px] flex h-[30px] w-fit items-center pl-[10px] font-branding text-[30px] font-normal">
        {title}
        {title === "consulting" || title === "how" ? (
          <div className="flex h-full items-start">
            <Image src={DOT} alt="dot" />
          </div>
        ) : null}
      </div>
      <div className="mb-[15px] mt-[3px] flex h-[15px] w-full items-center pl-[10px] font-default text-[11px]">
        {comment}
      </div>

      <div className="flex h-fit w-full flex-col gap-[15px]">
        {newProductList.map((item: updateServiceType, idx: number) => {
          return (
            <ProductRow
              key={idx}
              card={title}
              service_id={item.service_id}
              stylist_id={item.stylist_id}
              product={item.product}
              price={item.price}
              gifURL={item.gifURL}
            />
          );
        })}
        {/* {productList.map((product: ProductType, index: number) => {
          return (
            <ProductRow
              key={index}
              card={title}
              title={product.title}
              cost={product.cost}
              memo={product.memo}
              byHour={product.byHour}
              byEA={product.byEA}
              gifUrl={product.gifUrl}
            />
          );
        })} */}
      </div>
    </div>
  );
}
