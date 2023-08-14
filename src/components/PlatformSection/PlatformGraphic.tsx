import Image from "next/image";
import { CreditCard } from "~/components/CreditCard";
import { FaEuroSign } from "react-icons/fa";
import { HiMiniCreditCard } from "react-icons/hi2";
import { BiSolidBank } from "react-icons/bi";

function SlackScreen() {
  return (
    <div className="relative isolate flex h-[423px] w-[589px] select-none items-center justify-center overflow-hidden rounded-xl shadow-2xl shadow-slate-500/50">
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
            <span className="font-semibold">399.00</span> due Sep 1, 2020
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
  );
}

function CCard() {
  return (
    <CreditCard.Large
      size={380}
      className="relative flex flex-col justify-between bg-[#FFC025] p-4 pl-7 text-white shadow-2xl shadow-slate-500/50"
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
        <Image src="/images/cc-chip.png" height={70} width={70} alt="" />
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
  );
}

export function PlatformGraphic() {
  return (
    <div className="relative text-sm">
      <div
        className="
      absolute -inset-x-4 top-[70px] grid grid-cols-[380px_589px_301px] grid-rows-[101px_235px_148px_500px] gap-[40px]"
      >
        <CCard />
        <SlackScreen />
      </div>
    </div>
  );
}
