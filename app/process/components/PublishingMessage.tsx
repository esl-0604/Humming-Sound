import Image from "next/image";

export default function PublishingMessage() {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <Image
        src="/images/quoteStart.svg"
        alt="quoteStart"
        width={11}
        height={7}
      />
      <p className="mt-[8px] font-default text-[13px] leading-[15px]">
        스타일리스트가 고객님을 위한{" "}
        <span className="font-main">맞춤형 리포트를</span> 발행하였습니다!
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        아래 버튼을 통해 내려받고,{" "}
        <span className="font-main">코디를 시작해보세요.</span>
      </p>
      <p className="font-default text-[13px] leading-[15px]">-</p>
      <p className="font-default text-[13px] leading-[15px]">
        마음에 들었다면, 사진과 함께{" "}
        <span className="font-main">간단한 리뷰를</span> 남겨주세요.
      </p>
      <p className="font-main text-[13px] leading-[15px]">
        더 나은 서비스 제공에 도움 됩니다.
      </p>
      <p className="mb-[8px] font-default text-[13px] leading-[15px]">
        감사합니다!
      </p>
      <Image src="/images/quoteEnd.svg" alt="quoteEnd" width={11} height={7} />
    </div>
  );
}
