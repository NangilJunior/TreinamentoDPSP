import svgPaths from "./svg-4zupdv8oy6";

const keyHighlightStyle = `
  @keyframes key-pulse {
    0%, 100% {
      box-shadow: 0 0 12px 2px rgba(46,187,98,0.5), 0 0 0 3px rgba(255,255,255,0.6);
    }
    50% {
      box-shadow: 0 0 32px 10px rgba(46,187,98,0.9), 0 0 0 4px rgba(255,255,255,1);
    }
  }
  @keyframes key-pulse-white {
    0%, 100% {
      box-shadow: 0 0 12px 2px rgba(255,255,255,0.3), 0 0 0 2px rgba(255,255,255,0.5);
    }
    50% {
      box-shadow: 0 0 32px 10px rgba(255,255,255,0.7), 0 0 0 3px rgba(255,255,255,1);
    }
  }
  .key-highlighted {
    animation: key-pulse 1.2s ease-in-out infinite;
    transform: scale(1.06);
  }
  .key-highlighted-white {
    animation: key-pulse-white 1.2s ease-in-out infinite;
    transform: scale(1.06);
  }
`;

function Frame() {
  return (
    <div className="bg-[#52586d] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#5f6478] active:bg-[#454a5c] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">Q</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">PAUSA</p>
        </div>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#efc120] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f2ca45] active:bg-[#d9ad0f] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-[#454545]">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">H</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">CHEQUE</p>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-h-px relative w-full">
      <Frame />
      <Frame6 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#52586d] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#5f6478] active:bg-[#454a5c] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">W</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">FUNÇÕES</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#a656eb] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#b571ef] active:bg-[#9440d9] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">Y</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">VOUNCHER</p>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f07121] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f38943] active:bg-[#d96412] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">E</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">FITA DETALHE</p>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#f07121] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f38943] active:bg-[#d96412] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">R</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">CONVÊNIO</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="bg-[#f07121] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f38943] active:bg-[#d96412] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">T</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">PBM</p>
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="bg-[#efc120] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f2ca45] active:bg-[#d9ad0f] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-[#454545]">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">J</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">CARTÃO POS</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px relative">
      <Frame1 />
      <Frame5 />
      <Frame4 />
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="bg-[#52586d] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#5f6478] active:bg-[#454a5c] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[22px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">S</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">TROCAR SENHA</p>
        </div>
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="bg-[#a656eb] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#b571ef] active:bg-[#9440d9] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">U</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">DDG</p>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="bg-[#f07121] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f38943] active:bg-[#d96412] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">D</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">RECARGA</p>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f07121] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f38943] active:bg-[#d96412] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">F</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">DELIVERY</p>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f07121] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f38943] active:bg-[#d96412] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[22px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">G</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[8px] mb-[12px]">RESGATE</p>
          <p className="leading-[8px]">PERDIDOS</p>
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="bg-[#efc120] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f2ca45] active:bg-[#d9ad0f] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-[#454545]">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">N</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">DÉBITO</p>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px relative">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="bg-[#ea494c] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#ee6568] active:bg-[#d93134] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">A</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">TROCA</p>
        </div>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#2ebb62] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#4fc878] active:bg-[#1fa751] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[22px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">X</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[8px] mb-[12px]">ENTRADA</p>
          <p className="leading-[8px]">OPERADOR</p>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="bg-[#2ebb62] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#4fc878] active:bg-[#1fa751] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">C</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">CARGA BASE</p>
        </div>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / arrow-up">
        <div className="absolute inset-[17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.16504 7.16515">
            <g id="Vector">
              <path d={svgPaths.p3818ae80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p361e8600} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">V</p>
      </div>
      <Frame24 />
    </div>
  );
}

function Frame22({ highlighted, onPress }: { highlighted?: boolean; onPress?: () => void }) {
  return (
    <div
      onClick={onPress}
      className={`h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer transition-colors ${
        highlighted ? 'bg-[#2ebb62] key-highlighted z-[10]' : 'bg-[#2ebb62] hover:bg-[#4fc878] active:bg-[#1fa751]'
      }`}
    >
      <div className="content-stretch flex flex-col gap-[4px] items-start p-[10px] relative size-full">
        <Frame23 />
        <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
          <p className="leading-[16px]">SANGRIA</p>
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="bg-[#2ebb62] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#4fc878] active:bg-[#1fa751] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[22px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">B</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[8px] mb-[12px]">SAÍDA</p>
          <p className="leading-[8px]">OPERADOR</p>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="bg-[#efc120] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f2ca45] active:bg-[#d9ad0f] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-[#454545]">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">M</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">CRÉDITO</p>
        </div>
      </div>
    </div>
  );
}

function Frame18({ highlightSangria, onSangriaPress, highlightV, onVPress }: { highlightSangria?: boolean; onSangriaPress?: () => void; highlightV?: boolean; onVPress?: () => void }) {
  const handleVPress = highlightV ? onVPress : onSangriaPress;
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px relative">
      <Frame19 />
      <Frame20 />
      <Frame21 />
      <Frame22 highlighted={highlightSangria || highlightV} onPress={handleVPress} />
      <Frame25 />
      <Frame26 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="bg-[#ea494c] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#ee6568] active:bg-[#d93134] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[28px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">Z</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[16px]">CANCELAR</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-[#2ebb62] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#4fc878] active:bg-[#1fa751] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[22px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">O</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[8px] mb-[12px]">ABRIR</p>
          <p className="leading-[8px]">GAVETA</p>
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">P</p>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / arrow-left">
        <div className="absolute inset-[17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.16509 7.16504">
            <g id="Vector">
              <path d={svgPaths.p2d353980} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1b4de100} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-center justify-center min-w-px relative">
      <Frame33 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[16px]">LEITURA X</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="bg-[#2ebb62] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#4fc878] active:bg-[#1fa751] transition-colors">
      <div className="content-stretch flex gap-[4px] items-start p-[10px] relative size-full">
        <Frame31 />
        <Frame32 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-5px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">K</p>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / arrow-down">
        <div className="absolute inset-[17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.16504 7.16509">
            <g id="Vector">
              <path d={svgPaths.p32b58e40} fill="var(--fill-0, white)" />
              <path d={svgPaths.p29d88040} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-full items-center justify-center relative shrink-0 w-[113px]">
      <Frame37 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[16px]">FECHAMENTO</p>
      </div>
    </div>
  );
}

function Frame34({ highlighted, onPress }: { highlighted?: boolean; onPress?: () => void }) {
  return (
    <div onClick={onPress} className={`h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer transition-colors ${
      highlighted ? 'bg-[#2ebb62] key-highlighted z-[10]' : 'bg-[#2ebb62] hover:bg-[#4fc878] active:bg-[#1fa751]'
    }`}>
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame35 />
        <Frame36 />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start mr-[-9px] relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">L</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Icon / arrow-right">
        <div className="absolute inset-[17.71%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.16509 7.16504">
            <g id="Vector">
              <path d={svgPaths.p1b4de100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3d83d900} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-full items-center justify-end min-w-px relative">
      <Frame41 />
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold h-[33px] justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[8px] mb-[12px]">CONSULTA</p>
        <p className="leading-[8px]">ITEM</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="bg-[#2ebb62] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#4fc878] active:bg-[#1fa751] transition-colors">
      <div className="content-stretch flex items-start p-[10px] relative size-full">
        <Frame39 />
        <Frame40 />
      </div>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-[#efc120] flex-[1_0_0] h-full min-w-px relative rounded-[8px] cursor-pointer hover:bg-[#f2ca45] active:bg-[#d9ad0f] transition-colors">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold h-[45px] justify-center leading-[0] relative shrink-0 text-[#454545] text-[16px] text-center w-full">
            <p className="leading-[6px] mb-[12px]">SUPRIMENTO</p>
            <p className="leading-[6px]">DINHEIRO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame27({ highlightK, onKPress }: { highlightK?: boolean; onKPress?: () => void }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-h-px relative w-full">
      <Frame28 />
      <Frame29 />
      <Frame30 />
      <Frame34 highlighted={highlightK} onPress={onKPress} />
      <Frame38 />
      <Frame42 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="bg-[#ea494c] h-full relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#ee6568] active:bg-[#d93134] transition-colors">
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[22px] items-start leading-[0] p-[10px] relative size-full text-white">
        <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
          <p className="leading-[16px]">I</p>
        </div>
        <div className="flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[16px] text-center w-full">
          <p className="leading-[8px] mb-[12px]">ESTORNO</p>
          <p className="leading-[8px]">PGTO</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative">
      <Frame44 />
    </div>
  );
}

function Frame7({ highlightSangria, onSangriaPress, highlightV, onVPress, highlightK, onKPress }: { highlightSangria?: boolean; onSangriaPress?: () => void; highlightV?: boolean; onVPress?: () => void; highlightK?: boolean; onKPress?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[655px] items-start relative shrink-0">
      <Frame2 />
      <Frame3 />
      <Frame11 />
      <Frame18 highlightSangria={highlightSangria} onSangriaPress={onSangriaPress} highlightV={highlightV} onVPress={onVPress} />
      <Frame27 highlightK={highlightK} onKPress={onKPress} />
      <Frame43 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="[word-break:break-word] bg-white content-stretch flex flex-col gap-[22px] h-[123px] items-center leading-[0] px-[10px] py-[9px] relative rounded-[8px] shrink-0 text-[#2d2d2d] w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="flex flex-col font-['Chivo_Mono:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[14px] w-full">
        <p className="leading-[16px]">MULTIPLICA</p>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center relative shrink-0 text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">*</p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="bg-[#8e99b0] content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#9ea8bc] active:bg-[#7d8a9f] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323232] text-[16px] text-center w-full">
        <p className="leading-[16px]">VOLTA</p>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="bg-[#ef7121] content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f28943] active:bg-[#d96412] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[16px]">SUB TOTAL</p>
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-end relative shrink-0 w-full">
      <Frame47 />
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">7</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">8</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">9</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-[#ea494c] content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#ee6568] active:bg-[#d93134] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
        <p className="leading-[16px]">ANULA</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame51 />
      <Frame52 />
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">4</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">5</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">6</p>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="bg-[#efc120] content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f2ca45] active:bg-[#d9ad0f] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#454545] text-[16px] text-center w-full">
        <p className="leading-[16px]">LIMPA</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame56 />
      <Frame57 />
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function Frame63({ highlighted, onPress }: { highlighted?: boolean; onPress?: () => void }) {
  return (
    <div onClick={onPress} className={highlighted ? "bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer transition-colors key-highlighted-white z-[10]" : "bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors"}>
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">1</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">2</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">3</p>
      </div>
    </div>
  );
}

function Frame62({ highlightKey1, onKey1Press }: { highlightKey1?: boolean; onKey1Press?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame63 highlighted={highlightKey1} onPress={onKey1Press} />
      <Frame64 />
      <Frame65 />
    </div>
  );
}

function Frame68() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[rgba(255,255,255,0.75)] active:bg-[rgba(255,255,255,0.45)] transition-colors">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">00</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors rounded-[8px]">
      <Frame68 />
    </div>
  );
}

function Frame70({ highlighted, onPress }: { highlighted?: boolean; onPress?: () => void }) {
  return (
    <div onClick={onPress} className={highlighted ? "bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer transition-colors key-highlighted-white z-[10]" : "bg-white content-stretch flex flex-col h-[123px] items-center justify-center p-[10px] relative rounded-[8px] shrink-0 w-[142px] cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors"}>
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[#2d2d2d] text-[39.056px] text-center w-full" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">0</p>
      </div>
    </div>
  );
}

function Frame69({ highlighted, onPress }: { highlighted?: boolean; onPress?: () => void }) {
  return (
    <div className="bg-white content-stretch flex items-center relative shrink-0 cursor-pointer hover:bg-[#f5f5f5] active:bg-[#e5e5e5] transition-colors rounded-[8px]">
      <Frame70 highlighted={highlighted} onPress={onPress} />
    </div>
  );
}

function Frame66({ highlightKey0, onKey0Press }: { highlightKey0?: boolean; onKey0Press?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[446px]">
      <Frame67 />
      <Frame69 highlighted={highlightKey0} onPress={onKey0Press} />
    </div>
  );
}

function Frame61({ highlightKey1, onKey1Press, highlightKey0, onKey0Press }: { highlightKey1?: boolean; onKey1Press?: () => void; highlightKey0?: boolean; onKey0Press?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame62 highlightKey1={highlightKey1} onKey1Press={onKey1Press} />
      <Frame66 highlightKey0={highlightKey0} onKey0Press={onKey0Press} />
    </div>
  );
}

function Frame71({ highlighted, onPress }: { highlighted?: boolean; onPress?: () => void }) {
  return (
    <div
      onClick={onPress}
      className={`relative rounded-[8px] self-stretch shrink-0 w-[142px] cursor-pointer transition-colors ${
        highlighted ? 'bg-[#2ebb62] key-highlighted z-[10]' : 'bg-[#2ebb62] hover:bg-[#4fc878] active:bg-[#1fa751]'
      }`}
    >
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[10px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Geist:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
            <p className="leading-[16px]">ENTRA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60({ highlightEntra, onEntraPress, highlightKey1, onKey1Press, highlightKey0, onKey0Press }: { highlightEntra?: boolean; onEntraPress?: () => void; highlightKey1?: boolean; onKey1Press?: () => void; highlightKey0?: boolean; onKey0Press?: () => void }) {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-[598px]">
      <Frame61 highlightKey1={highlightKey1} onKey1Press={onKey1Press} highlightKey0={highlightKey0} onKey0Press={onKey0Press} />
      <Frame71 highlighted={highlightEntra} onPress={onEntraPress} />
    </div>
  );
}

function Frame45({ highlightEntra, onEntraPress, highlightKey1, onKey1Press, highlightKey0, onKey0Press }: { highlightEntra?: boolean; onEntraPress?: () => void; highlightKey1?: boolean; onKey1Press?: () => void; highlightKey0?: boolean; onKey0Press?: () => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame46 />
      <Frame50 />
      <Frame55 />
      <Frame60 highlightEntra={highlightEntra} onEntraPress={onEntraPress} highlightKey1={highlightKey1} onKey1Press={onKey1Press} highlightKey0={highlightKey0} onKey0Press={onKey0Press} />
    </div>
  );
}

export default function VirtualKeyboard({ highlightSangria, onSangriaPress, highlightEntra, onEntraPress, highlightKey1, onKey1Press, highlightKey0, onKey0Press, highlightV, onVPress, highlightK, onKPress }: { highlightSangria?: boolean; onSangriaPress?: () => void; highlightEntra?: boolean; onEntraPress?: () => void; highlightKey1?: boolean; onKey1Press?: () => void; highlightKey0?: boolean; onKey0Press?: () => void; highlightV?: boolean; onVPress?: () => void; highlightK?: boolean; onKPress?: () => void }) {
  const anyHighlight = highlightSangria || highlightEntra || highlightKey1 || highlightKey0 || highlightV || highlightK;
  return (
    <>
      <style>{keyHighlightStyle}</style>
      <div className="bg-[#313739] content-stretch flex gap-[10px] items-start p-[40px] relative rounded-[12px] size-full shadow-[0px_8px_32px_0px_rgba(0,0,0,0.4)]" data-name="Virtual Keyboard">
        {anyHighlight && (
          <div className="absolute inset-0 bg-black/50 rounded-[12px] z-[5] pointer-events-none" />
        )}
        <Frame7 highlightSangria={highlightSangria} onSangriaPress={onSangriaPress} highlightV={highlightV} onVPress={onVPress} highlightK={highlightK} onKPress={onKPress} />
        <Frame45 highlightEntra={highlightEntra} onEntraPress={onEntraPress} highlightKey1={highlightKey1} onKey1Press={onKey1Press} highlightKey0={highlightKey0} onKey0Press={onKey0Press} />
      </div>
    </>
  );
}