import PERSON from "@/public/gif/reservation/what/person.json";
import FLOWER from "@/public/gif/reservation/what/flower.json";
import CYCLE from "@/public/gif/reservation/optional/cycle.json";
import PUZZLE from "@/public/gif/reservation/optional/puzzle.json";
import LAYER from "@/public/gif/reservation/what/layer.json";
import REPORT from "@/public/gif/reservation/how/report.json";
import ONLINE from "@/public/gif/reservation/how/online.json";
import OFFLINE from "@/public/gif/reservation/how/offline.json";
import BARCODE from "@/public/gif/reservation/add/barcode.json";
import BASKET from "@/public/gif/reservation/add/basket.json";
import SHOPPING from "@/public/gif/reservation/add/shopping.json";

export interface ProductCategoryType {
  [productCategory: string]: {
    product: ProductType[];
  };
}

export interface ProductType {
  title: string;
  cost: number;
  byHour: boolean;
  byEA?: boolean;
  memo: string;
  gifUrl: object;
}

export const productData: ProductCategoryType = {
  consulting: {
    product: [
      {
        title: "스탠다드",
        cost: 20000,
        byHour: false,
        memo: "얼굴과 체형 분석을 통해,\n고객님의 <b>외모에 맞는 코디와 제품을 추천</b>합니다.",
        gifUrl: PERSON,
      },
      {
        title: "플러스",
        cost: 80000,
        byHour: false,
        memo: "외모 분석 뿐 아니라 성격과 취향 분석을 통해,\n<b>퍼스널 브랜딩을 완성해드립니다.</b> 쇼핑의 기준을 세워보아요.\n<b>나만의 분위기를 원한다면,</b> 플러스 컨설팅을 추천합니다!",
        gifUrl: LAYER,
      },
    ],
  },
  optional: {
    product: [
      {
        title: "옷장 정리",
        cost: 30000,
        byHour: false,
        byEA: true,
        memo: "컨설팅 결과를 토대로, <b>기존 갖고 있던 옷들에 대한 분석</b>을\nSTCL 리포트에 포함합니다! 어떤 옷을 어떻게 활용해야할지,\n실질적인 컨설팅 내용의 활용을 원한다면 추천합니다.",
        gifUrl: CYCLE,
      },
      {
        title: "스타일\n피드백",
        cost: 30000,
        byHour: false,
        byEA: true,
        memo: "컨설팅 결과를 토대로, <b>기존 착장들에 대한 분석</b>을\nSTCL 리포트에 포함합니다! 어떤 옷을 어떻게 활용해야할지,\n실질적인 컨설팅 내용의 활용을 원한다면 추천합니다.",
        gifUrl: PUZZLE,
      },
    ],
  },
  how: {
    product: [
      {
        title: "설문지",
        cost: 0,
        byHour: false,
        memo: "<b>스타일리스트와 STCL이 협력하여 만든 체계적인 설문지에</b>\n내용만 채워주세요! 체계적인 분석 후 <b>리포트가 제공 됩니다.</b>\n여러분의 스타일링에 <b>명확한 이유를 찾아드립니다.</b>",
        gifUrl: REPORT,
      },
      {
        title: "비대면",
        cost: 50000,
        byHour: true,
        memo: "스타일리스트가 실시간 화상통화를 통해 자연스럽게\n고객님의 정보를 분석합니다. <b>충분한 질의응답 시간을 거쳐,</b>\n<b>더 자세한 스타일링을 받아보세요. 결과 리포트가 제공됩니다.</b>",
        gifUrl: ONLINE,
      },
      {
        title: "대면",
        cost: 70000,
        byHour: true,
        memo: "사진으로는 알기 어려운 <b>사소한 분위기까지 분석 받고 싶다면,</b>\n스타일리스트가 실제로 고객님을 만나볼 수 있는 기회를 주세요!\n<b>머리부터 발끝까지, 꼼꼼하게 분석된 결과 리포트가 제공됩니다.</b>",
        gifUrl: OFFLINE,
      },
    ],
  },
  shopping: {
    product: [
      {
        title: "제품 추천",
        cost: 30000,
        byHour: false,
        memo: "분석된 정보를 바탕으로, 딱 맞는 제품들을 대신 골라드릴게요.\n<b>구매 가능한 링크와 자세한 설명이 포함된 리포트를 원하신다면,</b>\n<b>제품 추천을 선택보세요!</b> 직접 찾고 고민하지 않아도 됩니다.",
        gifUrl: BARCODE,
      },
      {
        title: "온라인\n동행 쇼핑",
        cost: 20000,
        byHour: true,
        memo: "상품과 브랜드를 <b>온라인으로 함께 찾고, 골라드립니다.</b>\n사이즈부터 색상까지 모든 고민을 해결해드릴게요.\n<b>고객님을 정확하게 알고 있는 스타일리스트와  함께 해보세요!</b>\n동행 쇼핑의 모든 과정과 결과는 리포트에 함께 작성됩니다.",
        gifUrl: BASKET,
      },
      {
        title: "오프라인\n퍼스널 쇼핑",
        cost: 50000,
        byHour: true,
        memo: "직접 입어봐야 한다고 생각하신다면, <b>퍼스널 쇼핑</b>을 골라보세요!\n<b>동선부터 제품까지, 맞춤으로 준비할게요.</b> 스타일리스트가 직접 \n추천하고 완성하는 <b>최고의 경험을 느껴보실 준비 되셨나요?</b>\n동행 쇼핑의 모든 과정과 결과는 리포트에 함께 작성됩니다.",
        gifUrl: SHOPPING,
      },
    ],
  },
};

export interface ServiceType {
  service_id: string;
  stylist_id: string;
  product: productType;
  price: number;
}
export interface productType {
  title: string;
  memo: string;
  type: string;
  cost_type: string;
  order: number;
}

export const newProductData: ServiceType[] = [
  {
    service_id: "001",
    stylist_id: "suyeongStylist",
    product: {
      title: "스탠다드",
      memo: "얼굴과 체형 분석을 통해,\n고객님의 <b>외모에 맞는 코디와 제품을 추천</b>합니다.",
      type: "consulting",
      cost_type: "total",
      order: 0,
    },
    price: 20000,
  },
  {
    service_id: "002",
    stylist_id: "suyeongStylist",
    product: {
      title: "플러스",
      memo: "외모 분석 뿐 아니라 성격과 취향 분석을 통해,\n<b>퍼스널 브랜딩을 완성해드립니다.</b> 쇼핑의 기준을 세워보아요.\n<b>나만의 분위기를 원한다면,</b> 플러스 컨설팅을 추천합니다!",
      type: "consulting",
      cost_type: "total",
      order: 1,
    },
    price: 80000,
  },
  {
    service_id: "003",
    stylist_id: "suyeongStylist",
    product: {
      title: "옷장 정리",
      memo: "컨설팅 결과를 토대로, <b>기존 갖고 있던 옷들에 대한 분석</b>을\nSTCL 리포트에 포함합니다! 어떤 옷을 어떻게 활용해야할지,\n실질적인 컨설팅 내용의 활용을 원한다면 추천합니다.",
      type: "optional",
      cost_type: "byEA",
      order: 2,
    },
    price: 30000,
  },
  {
    service_id: "004",
    stylist_id: "suyeongStylist",
    product: {
      title: "스타일\n피드백",
      memo: "컨설팅 결과를 토대로, <b>기존 착장들에 대한 분석</b>을\nSTCL 리포트에 포함합니다! 어떤 옷을 어떻게 활용해야할지,\n실질적인 컨설팅 내용의 활용을 원한다면 추천합니다.",
      type: "optional",
      cost_type: "byEA",
      order: 3,
    },
    price: 30000,
  },
  {
    service_id: "005",
    stylist_id: "suyeongStylist",
    product: {
      title: "설문지",
      memo: "<b>스타일리스트와 STCL이 협력하여 만든 체계적인 설문지에</b>\n내용만 채워주세요! 체계적인 분석 후 <b>리포트가 제공 됩니다.</b>\n여러분의 스타일링에 <b>명확한 이유를 찾아드립니다.</b>",
      type: "how",
      cost_type: "total",
      order: 4,
    },
    price: 0,
  },
  {
    service_id: "006",
    stylist_id: "suyeongStylist",
    product: {
      title: "비대면",
      memo: "스타일리스트가 실시간 화상통화를 통해 자연스럽게\n고객님의 정보를 분석합니다. <b>충분한 질의응답 시간을 거쳐,</b>\n<b>더 자세한 스타일링을 받아보세요. 결과 리포트가 제공됩니다.</b>",
      type: "how",
      cost_type: "byHour",
      order: 5,
    },
    price: 50000,
  },
  {
    service_id: "007",
    stylist_id: "suyeongStylist",
    product: {
      title: "대면",
      memo: "사진으로는 알기 어려운 <b>사소한 분위기까지 분석 받고 싶다면,</b>\n스타일리스트가 실제로 고객님을 만나볼 수 있는 기회를 주세요!\n<b>머리부터 발끝까지, 꼼꼼하게 분석된 결과 리포트가 제공됩니다.</b>",
      type: "how",
      cost_type: "byHour",
      order: 6,
    },
    price: 20000,
  },
  {
    service_id: "008",
    stylist_id: "suyeongStylist",
    product: {
      title: "제품 추천",
      memo: "분석된 정보를 바탕으로, 딱 맞는 제품들을 대신 골라드릴게요.\n<b>구매 가능한 링크와 자세한 설명이 포함된 리포트를 원하신다면,</b>\n<b>제품 추천을 선택보세요!</b> 직접 찾고 고민하지 않아도 됩니다.",
      type: "shopping",
      cost_type: "byEA",
      order: 7,
    },
    price: 30000,
  },
  {
    service_id: "009",
    stylist_id: "suyeongStylist",
    product: {
      title: "온라인\n동행 쇼핑",
      memo: "상품과 브랜드를 <b>온라인으로 함께 찾고, 골라드립니다.</b>\n사이즈부터 색상까지 모든 고민을 해결해드릴게요.\n<b>고객님을 정확하게 알고 있는 스타일리스트와  함께 해보세요!</b>\n동행 쇼핑의 모든 과정과 결과는 리포트에 함께 작성됩니다.",
      type: "shopping",
      cost_type: "byHour",
      order: 8,
    },
    price: 20000,
  },
  {
    service_id: "010",
    stylist_id: "suyeongStylist",
    product: {
      title: "오프라인\n퍼스널 쇼핑",
      memo: "직접 입어봐야 한다고 생각하신다면, <b>퍼스널 쇼핑</b>을 골라보세요!\n<b>동선부터 제품까지, 맞춤으로 준비할게요.</b> 스타일리스트가 직접 \n추천하고 완성하는 <b>최고의 경험을 느껴보실 준비 되셨나요?</b>\n동행 쇼핑의 모든 과정과 결과는 리포트에 함께 작성됩니다.",
      type: "shopping",
      cost_type: "byHour",
      order: 9,
    },
    price: 50000,
  },
];
