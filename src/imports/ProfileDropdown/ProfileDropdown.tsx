function Frame() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.2] relative shrink-0 text-white w-[137px]">
      <p className="font-['Nunito_Sans:SemiBold',sans-serif] font-semibold relative shrink-0 text-[16px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Cláudio Souza
      </p>
      <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[10.24px] w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        claudio.souza@itlean.com.br
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <div className="relative shrink-0 w-full" data-name="Button DropDown Profile">
          <div className="flex flex-row items-center size-full">
            <div className="content-stretch flex gap-[16px] items-center px-[18px] py-[12px] relative size-full">
              <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Avatar">
                <div className="absolute bg-[#f5f5f5] left-0 rounded-[9999px] size-[40px] top-0" data-name="Background" />
                <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Geist:Semibold',sans-serif] justify-center leading-[0] left-[20px] not-italic size-[40px] text-[#0a0a0a] text-[14px] text-center top-[20px]">
                  <p className="leading-[20px]">CS</p>
                </div>
              </div>
              <Frame />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <div className="bg-[rgba(255,255,255,0)] min-h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button DropDown">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                <p className="leading-[20px]">Conta</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <div className="bg-[rgba(255,255,255,0)] min-h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button DropDown">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                <p className="leading-[20px]">Configurações</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start p-[4px] relative size-full">
        <div className="bg-[rgba(255,255,255,0)] min-h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button DropDown">
          <div className="flex flex-row items-center min-h-[inherit] size-full">
            <div className="content-stretch flex gap-[8px] items-center min-h-[inherit] px-[16px] py-[12px] relative size-full">
              <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">
                <p className="leading-[20px]">Sair</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProfileDropdown() {
  return (
    <div className="bg-black content-stretch flex flex-col items-start relative rounded-[12px] size-full" data-name="Profile Dropdown">
      <Frame4 />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Inset">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293 1">
              <line id="Divider" stroke="var(--stroke-0, #322F35)" x2="293" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame1 />
      <Frame2 />
      <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Horizontal/Inset">
        <div className="h-0 relative shrink-0 w-full" data-name="Divider">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 293 1">
              <line id="Divider" stroke="var(--stroke-0, #322F35)" x2="293" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
      </div>
      <Frame3 />
    </div>
  );
}