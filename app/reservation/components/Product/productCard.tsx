"use client";

import BLOCK from "@/public/images/stylistintroduce/block.svg";
import WHAT from "@/public/images/Reservation/what.svg";
import HOW from "@/public/images/Reservation/how.svg";
import ADD from "@/public/images/Reservation/add.svg";
import Image from "next/image";
import ProductRow from "./productRow";
import { ProductType } from "@/app/utils/atom/productData";

interface Props {
  title: string;
  productList: ProductType[];
}

export default function ProductCard({ title, productList }: Props) {
  return (
    <div className="flex h-fit w-full flex-col">
      <Image src={BLOCK} alt="block" />

      <div className="mb-[30px] mt-[10px] flex h-[30px] w-full items-center px-[10px]">
        <Image
          src={title === "what" ? WHAT : title === "how" ? HOW : ADD}
          alt="title"
        />
      </div>

      <div className="flex h-fit w-full flex-col gap-[15px]">
        {productList.map((product: ProductType, index: number) => {
          return (
            <ProductRow
              card={title}
              RowId={index}
              title={product.title}
              cost={product.cost}
              memo={product.memo}
              byHour={product.byHour}
              gifUrl={product.gifUrl}
            />
          );
        })}
        {/* <ProductRow
          card={title}
          RowId={0}
          title={"베이직"}
          cost={10000}
          memo={
            "얼굴과 체형 분석을 통해,\n고객님의 <b>외모에 맞는 코디와 제품을 추천</b>합니다."
          }
        />
        <ProductRow
          card={title}
          RowId={1}
          title={"스탠다드"}
          cost={50000}
          memo={
            "외모 분석 뿐 아니라 성격과 취향 분석을 통해,\n<b>퍼스널 브랜딩을 완성해드립니다.</b> 쇼핑의 기준을 세워보세요.\n<b>나만의 분위기를 원한다면,</b> 스탠다드 컨설팅을 추천합니다!"
          }
        />
        <ProductRow
          card={title}
          RowId={2}
          title={"프리미엄"}
          cost={100000}
          memo={
            "컨설팅을 통해 앞으로 어떻게 입어야 할지는 알았지만,\n막상 적용하려니 막막하다면? <b>스타일링 피드백</b>이 포함된\n플러스 컨설팅을 통해 <b>STCL 리포트를 적극 적용해보세요!</b>"
          }
        /> */}
      </div>
    </div>
  );
}
