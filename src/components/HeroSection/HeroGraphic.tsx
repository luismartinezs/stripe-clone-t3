import Image from "next/image";

function MobileGraphic() {
  return (
    <div className="flex h-[517] w-[260px] flex-col items-center justify-center gap-4 rounded-[30px] border-4 border-gray-200 bg-white px-4 py-4 text-center text-[0.75rem] text-slate-600">
      <div>
        <div>Increment Magazine</div>
        <div>$14 per quarter</div>
      </div>
      <div className="w-full rounded bg-slate-700 py-1 text-center text-white">
        Pay
      </div>
      <div className="mt-4 grid grid-cols-[60px,1fr,60px] items-center gap-2">
        <div className="h-px bg-gray-200"></div>
        <div className="whitespace-nowrap">Or pay with card</div>
        <div className="h-px bg-gray-200"></div>
      </div>
      <div className="flex w-full flex-col gap-2 text-left">
        <div>
          <div>Email</div>
          <div className="mt-1 h-[1.2rem] rounded border border-gray-200 shadow shadow-slate-700/20"></div>
        </div>
        <div>
          <div>Card Information</div>
          <div className="mt-1 h-[2.4rem] rounded border border-gray-200 shadow shadow-slate-700/20">
            <div className="flex h-[1.2rem] items-center justify-between border-b border-gray-200 px-1 py-1 text-[0.7rem]">
              <div>Number</div>
              <div>
                <div className="h-[10px] w-[16px] rounded-sm bg-red-500">
                  <Image
                    src="/images/Visa_Brandmark_Blue_RGB_2021.svgz"
                    alt="Visa logo"
                    width={16}
                    height={10}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroGraphic() {
  return (
    <div className="select-none">
      <MobileGraphic />
    </div>
  );
}
