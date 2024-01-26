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
        아직 신청된 스타일링이 없어요 :&#40;
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        아래 버튼을 누르고
        <span className="font-main">마음에 드는 스타일리스트를</span>{" "}
        찾아보세요!
      </p>
      <p className="font-default text-[13px] leading-[15px]">-</p>
      <p className="font-default text-[13px] leading-[15px]">
        객관적인 <span className="font-main">분석과</span> 주관적인{" "}
        <span className="font-main">추천이</span> 담긴
      </p>
      <p className="font-default text-[13px] leading-[15px]">
        <span className="font-main">맞춤형 리포트가</span> 여러분을 기다리고
        있습니다.
      </p>
      <p className="mb-[8px] font-default text-[13px] leading-[15px]">
        지금 바로 신청해볼까요?
      </p>
      <Image src="/images/quoteEnd.svg" alt="quoteEnd" width={11} height={7} />
    </div>
  );
}
