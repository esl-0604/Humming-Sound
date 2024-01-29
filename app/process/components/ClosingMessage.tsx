import Image from "next/image";

export default function ClosingMessage() {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <Image
        src="/images/quoteStart.svg"
        alt="quoteStart"
        width={11}
        height={7}
        priority={true}
      />
      <p className="mt-[8px] font-default text-[13px] leading-[15px]">
        담당 스타일리스트 분과 자유롭게 소통할 수 있는 시간입니다.
      </p>
      <p className="font-main text-[13px] leading-[15px]">
        컨설팅 내용과 관련된 내용 한에서, 질의응답을 진행해보세요!
      </p>
      <p className="font-main text-[13px] leading-[15px]">
        리포트 확인 시점부터 72시간이 제공됩니다.
      </p>
      <p className="font-default text-[13px] leading-[15px]">-</p>
      <p className="font-main text-[13px] leading-[15px]">
        추가 시간을 원하시는 경우, 문의하기 부탁드립니다.
      </p>
      <p className="mb-[8px] font-default text-[13px] leading-[15px]">
        감사합니다!
      </p>
      <Image
        src="/images/quoteEnd.svg"
        alt="quoteEnd"
        width={11}
        height={7}
        priority={true}
      />
    </div>
  );
}
