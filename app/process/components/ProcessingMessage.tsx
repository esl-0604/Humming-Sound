import Image from "next/image";

export default function ProcessingMessage() {
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
        고객님이 작성해주신 설문지가 전달되었습니다.
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        해당 응답의{" "}
        <span className="font-main">
          분석 결과를 기반으로 컨설팅 및 쇼핑이 진행됩니다.
        </span>
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        <span className="font-main">모든 절차가 완료 된 이후,</span> 리포트가
        발행됩니다.
      </p>
      <p className="font-default text-[13px] leading-[15px]">-</p>
      <p className="font-main text-[13px] leading-[15px]">
        곧 여러분을 바꿔줄 <span className="font-branding">STCL</span>리포트를
        가져올게요.
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
