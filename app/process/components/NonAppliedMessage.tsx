import Image from "next/image";

export default function NonAppliedMessage() {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <Image
        src="/images/quoteStart.svg"
        alt="quoteStart"
        width={11}
        height={7}
      />
      <p className="mt-[8px] font-default text-[13px] leading-[15px]">
        아직 입금 전이거나, 입금 확인 중입니다.
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        <span className="font-main">입금 후 24시간 이내</span> 결제 완료 상태로
        변하지 않는 경우,
      </p>
      <p className="font-main text-[13px] leading-[15px]">
        문의하기를 통해 연락 남겨주시면 도와드릴게요!
      </p>
      <p className="font-default text-[13px] leading-[15px]">-</p>
      <p className="font-main text-[13px] leading-[15px]">
        곧 여러분을 바꿔줄 <span className="font-branding">STCL</span>리포트를
        가져올게요.
      </p>
      <p className="mb-[8px] font-default text-[13px] leading-[15px]">
        감사합니다
      </p>
      <Image src="/images/quoteEnd.svg" alt="quoteEnd" width={11} height={7} />
    </div>
  );
}
