import svgPaths from "./svg-8dfs6vtjpy";

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #06AC73)" id="Ellipse 2" r="4.5" />
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / scan-barcode">
        <div className="absolute inset-[9.38%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
            <g id="Vector">
              <path d={svgPaths.p1228b80} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p1e471e00} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.pe868500} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p1afc9570} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p28515c40} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p996db00} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p3bf0d700} fill="var(--fill-0, #525252)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #06AC73)" id="Ellipse 2" r="4.5" />
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / calculator">
        <div className="absolute inset-[5.21%_13.54%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
            <g id="Vector">
              <path d={svgPaths.p263daa00} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p10ed4b60} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p4c65000} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.pe6ca000} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p3da52900} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p2d332800} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p3bf9b400} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.pa671400} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p6e954c0} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p2594ff00} fill="var(--fill-0, #525252)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[6px] relative rounded-[8px] shrink-0">
      <div className="relative shrink-0 size-[9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #06AC73)" id="Ellipse 2" r="4.5" />
        </svg>
      </div>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / printer">
        <div className="absolute inset-[5.21%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
            <g id="Vector">
              <path d={svgPaths.p2b0c6000} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p1f60300} fill="var(--fill-0, #525252)" />
              <path d={svgPaths.p3c19300} fill="var(--fill-0, #525252)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative size-full">
      <Frame />
      <Frame2 />
      <Frame1 />
    </div>
  );
}