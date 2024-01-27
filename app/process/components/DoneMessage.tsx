import Image from "next/image";

export default function DoneMessage() {
  return (
    <div className="mt-[50px] flex flex-col items-center justify-center">
      <Image
        src="/images/quoteStart.svg"
        alt="quoteStart"
        width={11}
        height={7}
      />
      <p className="mt-[8px] font-default text-[13px] leading-[15px]">
        컨설팅의 모든 과정이
        <span className="font-main">완료되었습니다.</span>
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        <span className="font-branding">STCL</span>과 함께 해주셔서
        <span className="font-main">다시 한번 감사드리며,</span>
      </p>
      <p className="font-main text-[13px] leading-[15px]">
        고객님의 스타일을 찾아가는 여정을
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        앞으로도 응원하겠습니다.
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        <span className="font-main">스타일링 컨텐츠도</span> 많은 이용
        부탁드립니다.
      </p>
      <p className="mb-[8px] font-default text-[13px] leading-[15px]">
        감사합니다!
      </p>
      <Image src="/images/quoteEnd.svg" alt="quoteEnd" width={11} height={7} />
    </div>
  );
}
