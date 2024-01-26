import Image from "next/image";

export default function ProcessingMessage() {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <Image
        src="/images/quoteStart.svg"
        alt="quoteStart"
        width={11}
        height={7}
      />
      <p className="mt-[8px] font-default text-[13px] leading-[15px]">
        결제가 확인되어{" "}
        <span className="font-main">스타일리스트에게 전달 된 상태입니다.</span>
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        스타일리스트가 정보를 확인 후{" "}
        <span className="font-main">최대 3 영업일 이내에</span>
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        고객님을 위한 <span className="font-main">맞춤형 리포트를</span>
        작성하여 전달 할 예정입니다!
      </p>
      <p className="font-default text-[13px] leading-[15px]">-</p>
      <p className="font-main text-[13px] leading-[15px]">
        곧 여러분을 바꿔줄 <span className="font-branding">STCL</span>리포트를
        가져올게요.
      </p>
      <p className="mb-[8px] font-default text-[13px] leading-[15px]">
        감사합니다!
      </p>
      <Image src="/images/quoteEnd.svg" alt="quoteEnd" width={11} height={7} />
    </div>
  );
}
