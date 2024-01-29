import Image from "next/image";

export default function SurveyingMessage() {
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
        고객님께서 입력해주신 연락처로{" "}
        <span className="font-main">설문지를 전송했습니다.</span>
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        설문을 완료해주시면, 바로 스타일리스트에게 전달할게요!
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        전달이 완료 된 이후{" "}
        <span className="font-main">곧바로 분석이 시작 될 예정입니다.</span>
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
