import IntroBox from "./components/introBox";
import LoginButton from "./components/loginButton";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full flex-col items-center bg-[#161616]">
      <IntroBox />
      <p className="absolute bottom-[145px] z-30 text-center font-default text-[15px] text-white">
        퍼스널 브랜딩, <br />
        <span className="font-main">여러분의 스타일링</span>에서 시작됩니다.
      </p>
      <LoginButton />
    </main>
  );
}
