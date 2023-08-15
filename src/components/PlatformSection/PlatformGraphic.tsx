import Image from "next/image";
import { CreditCard } from "~/components/CreditCard";
import { FaEuroSign, FaGooglePay, FaCcApplePay } from "react-icons/fa";
import { HiMiniCreditCard } from "react-icons/hi2";
import { BiSolidBank } from "react-icons/bi";
import { SiContactlesspayment } from "react-icons/si";
import classnames from "classnames";

function DashboardGraphic() {
  return (
    <div className="col-start-1 col-end-4 row-start-4 row-end-4 flex flex-col sm:col-start-2">
      <div className="relative min-h-[72x] min-w-[100px] overflow-hidden rounded-[8px] bg-white shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)]">
        <div className="flex">
          <Image
            className="h-auto w-full max-w-full"
            alt=""
            width={930}
            height={500}
            src="https://images.ctfassets.net/fzn2n1nzq965/4yZ7sDJZscg2PJHBw6gi9/1470c8f3dd7b9d56b210115d31cec6ea/radar-fraud-visual-home-es-es.png?q=95&w=1860"
            sizes="(max-width: 768px) 930px, 1860px"
            quality={95}
          />
        </div>
      </div>
    </div>
  );
}

function ApplePayGraphic() {
  return (
    <div className="col-start-1 col-end-auto row-start-2 row-end-auto flex flex-col sm:row-start-3">
      <div className="relative w-full max-w-[301px] self-end">
        <div className="h-0 w-full max-w-[301px] pb-[204.3%]">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.371053] sm:scale-[0.665789] lg:scale-100">
            <div className="relative h-[615px] w-[301px] rounded-[42px] bg-[#f6f9fc] p-[8px] text-[16px] shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3),inset_0_-2px_6px_0_rgba(10,37,64,0.35)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KeypadButton({ type }: { type?: "light" | "red" | "green" }) {
  const classes = {
    light: "bg-[linear-gradient(hsla(0,0%,100%,.18),hsla(0,0%,100%,.08))]",
    red: "bg-[linear-gradient(#e36456,#d14a3f)]",
    green: "bg-[linear-gradient(#42bb90,#2f9d71)]",
    default: "bg-[linear-gradient(rgba(10,37,64,0),rgba(10,37,64,.25))]",
  };
  return (
    <div
      className={classnames(
        "rounded-[8px] shadow-[0_0_0_2px_rgba(6,24,44,.4),_0_4px_6px_-1px_rgba(6,24,44,.65),_inset_0_1px_0_hsla(0,0%,100%,.08)]",
        classes[type ?? "default"]
      )}
    ></div>
  );
}

function TerminalGraphicKeypad() {
  return (
    <div className="mx-[9px] mt-[13px] grid auto-cols-auto grid-flow-row auto-rows-[34px] grid-cols-[repeat(3,_1fr)] gap-[12px]">
      <KeypadButton />
      <KeypadButton />
      <KeypadButton />
      <KeypadButton />
      <KeypadButton />
      <KeypadButton />
      <KeypadButton />
      <KeypadButton />
      <KeypadButton />
      <KeypadButton type="light" />
      <KeypadButton />
      <KeypadButton type="light" />
      <KeypadButton type="red" />
      <KeypadButton type="light" />
      <KeypadButton type="green" />
    </div>
  );
}

function TerminalGraphicScreen() {
  return (
    <div className="h-[262px] rounded-[20px] bg-[linear-gradient(#1c354e,#0b2641)] p-[20px] shadow-[0_1px_1px_0_hsla(0,0%,100%,.1)]">
      <div className="relative h-full">
        <div className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-[2px] bg-[linear-gradient(#2d445b,#132d47)]">
          {/* card */}
          <div className="absolute left-[calc(50%_-_37px)] top-[42px] h-[112px] w-[73px] rounded-[6px] border-[2px] border-white bg-[linear-gradient(#4b5f72,#40556a)]">
            <div className="ml-[39px] mt-[11px] h-[21px] w-[18px] rounded-[2px] bg-white"></div>
          </div>
          {/* insert card */}
          <div className="absolute -top-px left-[calc(50%_-_54px)] h-[39px] w-[107px] rounded-b-[6px] rounded-l-[6px] bg-[linear-gradient(hsla(0,0%,100%,0)_25%,hsla(0,0%,100%,.15)_85%,hsla(0,0%,100%,.5))] px-[2px] pb-[2px]">
            <div className="border-bl-[4px] h-full rounded-br-[4px] bg-[linear-gradient(#2c435a,#294158)]"></div>
            <div
              className="m-[-15px_0_0_57px] h-[9px] w-[16px] animate-oscillate rounded-[2px] bg-white"
              style={{
                clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
              }}
            ></div>
          </div>
          {/* pay methods */}
          <div className="absolute bottom-[13px] left-[calc(50%_-_83px)] flex w-[166px] items-center justify-between">
            <SiContactlesspayment size={49} color="#fff" />
            <FaGooglePay size={43} color="#fff" />
            <FaCcApplePay size={36} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TerminalGraphic() {
  return (
    <div className="cold-end-5 col-start-3 row-start-1 row-end-2 flex flex-col sm:col-end-auto sm:row-start-[span_2] sm:row-end-auto">
      <div className="relative w-full lg:max-w-[301px]">
        <div className="h-0 w-full max-w-[301px] pb-[187.37%]">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.371053] sm:scale-[0.665789] lg:scale-100">
            <div className="h-[564px] w-[301px] rounded-[40px] bg-[#30455d] shadow-[0_20px_30px_-10px_#26394d]">
              <div className="h-[552px] rounded-[40px] bg-[#18324b] p-[5px] shadow-[0_2px_6px_1px_#0a2540,_inset_0_-5px_2px_1px_#0a2540,_inset_0_2px_3px_1px_#adbccb;]">
                <div className="shadow-[0_1px_1px_0_rgba(6,24,44,.2),_inset_0_1px_1px_0_hsla(0,0%,100%,.3] h-[532px] rounded-[35px] bg-[linear-gradient(#4b5f74,#273f57)] p-[15px]">
                  <TerminalGraphicScreen />
                  <TerminalGraphicKeypad />
                </div>
              </div>
              <div
                className="border-b-px mx-auto mb-0 mt-px h-[8px] w-[15px] rounded border-[#516f8f] bg-[#374C63]"
                style={{
                  clipPath: "polygon(50% 0, 100% 100%, 0 100%)",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SlackScreen() {
  return (
    <div className="col-start-2 col-end-auto row-start-2 row-end-[span_2] flex flex-col">
      <div className="relative w-full max-w-[588px]">
        <div className="h-0 w-full max-w-[588px] pb-[71.77%]">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.371053] sm:scale-[0.665789] lg:scale-100">
            <div className="relative isolate flex h-[422px] w-[588px] select-none items-center justify-center overflow-hidden rounded-[calc(8px*1/1)] bg-[#f6f9fc] text-[13px] leading-[20px] tracking-[0.2px] text-[#425466] shadow-[0_50px_100px_-20px_rgba(50,50,93,.25),_0_30px_60px_-30px_rgba(0,0,0,.3)]">
              <div
                className="absolute inset-0 z-0 h-[65%] border-r-transparent bg-purple-800"
                style={{
                  clipPath: "polygon(0% 0, 100% 0, 100% 60%, 0 100%, 0 100%)",
                }}
              ></div>
              <div className="absolute top-[30px] z-20 rounded-full bg-white p-4 shadow">
                <Image
                  src="/images/slack-logo-icon.png"
                  width={40}
                  height={40}
                  alt="Slack logo"
                />
              </div>
              <div className="relative z-10 flex flex-col overflow-hidden rounded-lg shadow-xl">
                <div className="flex flex-col items-center bg-white px-8 pb-4 pt-12">
                  <div className="mt-2 font-semibold">Invoice from Slack</div>
                  <div>Billed to Jenny Rosen</div>
                </div>
                <div className="flex flex-col items-center justify-center bg-slate-100 px-11 pb-10 pt-4">
                  <div>
                    <FaEuroSign className="relative -top-px inline" />
                    <span className="font-semibold">399.00</span> due Sep 1,
                    2020
                  </div>
                  {/* form */}
                  <div className="mt-4 grid w-[300px] grid-cols-2 gap-4 text-slate-400">
                    <div className="flex items-center gap-2 rounded border-2 border-purple-800 bg-white px-2 py-1 font-medium text-purple-800 shadow-md">
                      <HiMiniCreditCard size={18} />
                      <div>Card</div>
                    </div>
                    <div className="flex items-center gap-2 rounded bg-white px-3 py-1 font-medium shadow-md ">
                      <BiSolidBank size={18} color="#CFD7DF" />
                      <div>Bank</div>
                    </div>
                    <div className="col-span-2 flex items-center gap-2 rounded bg-white px-3 py-1 font-medium shadow-md ">
                      <HiMiniCreditCard size={18} color="#CFD7DF" />
                      <div>Card number</div>
                      <div className="ml-auto">MM/YY</div>
                      <div className="ml-2">CVC</div>
                    </div>
                    <div className="col-span-2 rounded bg-purple-800 px-2 py-1 text-center font-bold text-white shadow-md">
                      Pay invoice
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CCard() {
  return (
    <div className="col-start-2 col-end-auto row-start-2 row-end-auto flex flex-col sm:col-start-1">
      <div className="relative w-full max-w-[380px]">
        <div className="h-0 w-full max-w-[380px] pb-[61.84%]">
          <div className="absolute left-0 top-0 origin-top-left scale-[0.371053] sm:scale-[0.665789] lg:scale-100">
            <CreditCard.Large
              size={380}
              className="relative flex flex-col justify-between bg-[#FFC025] p-4 pl-7 text-white shadow-[0_50px_100px_-20px_rgba(50,50,93,.25),_0_30px_60px_-30px_rgba(0,0,0,.3)]"
            >
              <div className="absolute inset-0 isolate flex items-center justify-center">
                <Image
                  src="/images/zestful-logo.png"
                  width={100}
                  height={100}
                  alt="Zestful logo"
                  className="z-10"
                />
                {/* NOTE next elem is to have a white layer under logo, because logo has a transparent area that should be white */}
                <div className="absolute z-0 h-[60px] w-[60px] rounded-full bg-white"></div>
              </div>
              <div className="text-2xl font-bold">Zestful</div>
              <div className="relative bottom-4 left-2">
                <Image
                  src="/images/cc-chip.png"
                  height={70}
                  width={70}
                  alt=""
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold">Thomas Degry</div>
                <div>
                  <Image
                    src="/images/Visa-Logo-white.png"
                    width={100}
                    height={100}
                    alt="Visa logo"
                  />
                </div>
              </div>
            </CreditCard.Large>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlatformGraphic() {
  return (
    <div className="relative h-[374px] text-sm sm:h-[474px] lg:h-[764px]">
      <div
        className="
      absolute -inset-x-4 -top-[30px] grid grid-cols-[112px_141px_58px_38px] grid-rows-[107px_87px_125px_185px] gap-[16px] sm:-top-[110px] sm:grid-cols-[253px_392px_201px] sm:grid-rows-[70px_157px_97px_333px] sm:gap-[25px] lg:grid-cols-[380px_589px_301px] lg:grid-rows-[101px_235px_148px_500px] lg:gap-[40px]"
      >
        <CCard />
        <SlackScreen />
        <TerminalGraphic />
        <ApplePayGraphic />
        <DashboardGraphic />
      </div>
    </div>
  );
}
