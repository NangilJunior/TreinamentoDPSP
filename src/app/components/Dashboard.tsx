import { useState } from "react";
import { useNavigate } from "react-router";
import Frame19675 from "../../imports/Frame19675/Frame19675";
import ProfileMenu from "./ProfileMenu";
import imgImage4 from "../../imports/ManutencaoDeLojas/79e4da8f717af2976b6c4029d66ffdf41ddd92aa.png";
import imgImage5 from "../../imports/ManutencaoDeLojas/3e23023c5cc358b98b16c368222d6ca0d31df01c.png";
import imgImage6 from "../../imports/ManutencaoDeLojas/6566e1aba8cfe14364d9bb9f0c3fa7712c053726.png";
import imgImage7 from "../../imports/ManutencaoDeLojas/95ee02e5d5e03c30315d82fd444278082f8dfea9.png";

// SVG Paths
const svgPaths = {
  // Search icon paths
  p2d57a800: "M9.25315 9.25315C9.44841 9.05789 9.76492 9.05789 9.96018 9.25315L12.8534 12.1464C13.0487 12.3416 13.0487 12.6581 12.8534 12.8534C12.6581 13.0487 12.3416 13.0487 12.1464 12.8534L9.25315 9.96018C9.05789 9.76492 9.05789 9.44841 9.25315 9.25315Z",
  p1a257980: "M10.6667 5.83333C10.6667 3.16396 8.50271 1 5.83333 1C3.16396 1 1 3.16396 1 5.83333C1 8.50271 3.16396 10.6667 5.83333 10.6667C8.50271 10.6667 10.6667 8.50271 10.6667 5.83333ZM11.6667 5.83333C11.6667 9.05499 9.05499 11.6667 5.83333 11.6667C2.61167 11.6667 0 9.05499 0 5.83333C0 2.61167 2.61167 0 5.83333 0C9.05499 0 11.6667 2.61167 11.6667 5.83333Z",
  // Pagination paths
  p8c0fe00: "M0 0C0 -0.552285 0.447715 -1 1 -1C1.55228 -1 2 -0.552285 2 0C2 0.552285 1.55228 1 1 1C0.447715 1 0 0.552285 0 0Z",
  p377ace00: "M4.83333 0C4.83333 -0.552285 5.28105 -1 5.83333 -1C6.38562 -1 6.83333 -0.552285 6.83333 0C6.83333 0.552285 6.38562 1 5.83333 1C5.28105 1 4.83333 0.552285 4.83333 0Z",
  p35d3300: "M9.66667 0C9.66667 -0.552285 10.1144 -1 10.6667 -1C11.219 -1 11.6667 -0.552285 11.6667 0C11.6667 0.552285 11.219 1 10.6667 1C10.1144 1 9.66667 0.552285 9.66667 0Z",
};

interface ImageOffset {
  left: string;
  top: string;
  width: string;
  height: string;
}

interface Funcionalidade {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string;
  imageOffset: ImageOffset;
  slug: string;
}

const funcionalidades: Funcionalidade[] = [
  {
    id: 1,
    titulo: "Sangria de Caixa",
    descricao: "A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) do caixa durante o expediente. Este processo visa reduzir riscos de assaltos e garantir que o caixa mantenha apenas o valor necessário para o troco das operações diárias.",
    imagem: imgImage4,
    imageOffset: { left: "50%", top: "50%", width: "120%", height: "120%" },
    slug: "sangria-de-caixa"
  },
  {
    id: 2,
    titulo: "Entrada/Saída de Operador",
    descricao: "O processo de Entrada e Saída de Operador é fundamental para o controle e rastreabilidade das operações no sistema. Permite identificar qual operador está utilizando cada terminal e registrar horários de início e término de turnos.",
    imagem: imgImage5,
    imageOffset: { left: "50%", top: "50%", width: "100%", height: "100%" },
    slug: "entrada-saida-operador"
  },
  {
    id: 3,
    titulo: "Consulta de Produto Offline",
    descricao: "A funcionalidade de Consulta de Produto Offline permite que os operadores visualizem informações de produtos mesmo quando o sistema está sem conexão com o servidor central. Isso garante a continuidade das operações e melhor atendimento aos clientes.",
    imagem: imgImage6,
    imageOffset: { left: "50%", top: "50%", width: "100%", height: "100%" },
    slug: "consulta-produto-offline"
  },
  {
    id: 4,
    titulo: "Pausa do Sistema",
    descricao: "A Pausa do Sistema permite interromper temporariamente as operações do PDV para realizar manutenções, contagens de caixa ou resolver situações específicas sem encerrar completamente o sistema. É importante para a gestão eficiente do ponto de venda.",
    imagem: imgImage7,
    imageOffset: { left: "50%", top: "50%", width: "100%", height: "100%" },
    slug: "pausa-sistema"
  }
];

function Frame8() {
  return (
    <div className="h-[34px] w-[80px]">
      <Frame19675 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 w-full border-b border-gray-100">
      <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[20px]">
        <div className="grid grid-cols-12 gap-[32px] items-center">
          <div className="col-span-6 flex items-center">
            <Frame8 />
          </div>
          <div className="col-span-6 flex items-center justify-end">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center whitespace-nowrap">
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#383838] text-[31.248px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">Centro de Treinamentos</p>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6c6c6c] text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">O que você gostaria de aprender hoje?</p>
      </div>
    </div>
  );
}

function Al({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  return (
    <div className="flex flex-[1_0_0] gap-px items-center min-w-px relative" data-name="AL">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busque a funcionalidade"
        className="flex-[1_0_0] min-w-px bg-transparent outline-none border-none font-['Geist:Regular',sans-serif] font-normal leading-[20px] text-[#0a0a0a] text-[14px] placeholder:text-[#737373]"
      />
    </div>
  );
}

function Frame5({ searchTerm, onSearchChange, onSearch }: { searchTerm: string; onSearchChange: (value: string) => void; onSearch: () => void }) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  const handleClear = () => {
    onSearchChange("");
  };

  const hasValue = searchTerm.trim().length > 0;
  const buttonBgColor = hasValue ? "bg-[#333243]" : "bg-[#9898a0]";
  const buttonHoverColor = hasValue ? "hover:bg-[#252430]" : "hover:bg-[#7a7a82]";

  return (
    <div className="flex gap-[16px] items-center w-full">
      <div className="bg-white flex-1 h-[56px] relative rounded-[8px]" data-name="Input" onKeyPress={handleKeyPress}>
        <div className="flex flex-row items-center h-full overflow-clip rounded-[inherit]">
          <div className="flex gap-[12px] items-center h-full px-[16px] py-[9.5px] w-full">
            <Al value={searchTerm} onChange={onSearchChange} />
            {hasValue ? (
              <button
                onClick={handleClear}
                className="flex items-center justify-center p-[2px] shrink-0 w-[20px] cursor-pointer hover:opacity-70 transition-opacity"
                data-name="Clear button"
              >
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[21.88%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99992 8.99992">
                      <g>
                        <path d="M0.146447 0.146447C0.341709 -0.0488155 0.658216 -0.0488155 0.853478 0.146447L8.85348 8.14645C9.04874 8.34171 9.04874 8.65822 8.85348 8.85348C8.65822 9.04874 8.34171 9.04874 8.14645 8.85348L0.146447 0.853478C-0.0488155 0.658216 -0.0488155 0.341709 0.146447 0.146447Z" fill="#737373" />
                        <path d="M8.14645 0.146447C8.34171 -0.0488155 8.65822 -0.0488155 8.85348 0.146447C9.04874 0.341709 9.04874 0.658216 8.85348 0.853478L0.853478 8.85348C0.658216 9.04874 0.341709 9.04874 0.146447 8.85348C-0.0488155 8.65822 -0.0488155 8.34171 0.146447 8.14645L8.14645 0.146447Z" fill="#737373" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            ) : (
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Decoration right">
                <div className="absolute inset-[9.38%]" data-name="Vector">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2498 16.2498">
                    <g id="Vector">
                      <path d="M9.25315 9.25315C9.44841 9.05789 9.76492 9.05789 9.96018 9.25315L12.8534 12.1464C13.0487 12.3416 13.0487 12.6581 12.8534 12.8534C12.6581 13.0487 12.3416 13.0487 12.1464 12.8534L9.25315 9.96018C9.05789 9.76492 9.05789 9.44841 9.25315 9.25315Z" fill="#525252" />
                      <path d="M10.6667 5.83333C10.6667 3.16396 8.50271 1 5.83333 1C3.16396 1 1 3.16396 1 5.83333C1 8.50271 3.16396 10.6667 5.83333 10.6667C8.50271 10.6667 10.6667 8.50271 10.6667 5.83333ZM11.6667 5.83333C11.6667 9.05499 9.05499 11.6667 5.83333 11.6667C2.61167 11.6667 0 9.05499 0 5.83333C0 2.61167 2.61167 0 5.83333 0C9.05499 0 11.6667 2.61167 11.6667 5.83333Z" fill="#525252" />
                    </g>
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
      <button onClick={onSearch} className={`${buttonBgColor} ${buttonHoverColor} h-[56px] relative rounded-[8px] shrink-0 transition-colors cursor-pointer px-[36px]`} data-name="Button">
        <div className="flex items-center justify-center gap-[8px] h-full">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
            <div className="absolute inset-[9.38%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9999 12.9999">
                <g id="Vector">
                  <path d="M9.25315 9.25315C9.44841 9.05789 9.76492 9.05789 9.96018 9.25315L12.8534 12.1464C13.0487 12.3416 13.0487 12.6581 12.8534 12.8534C12.6581 13.0487 12.3416 13.0487 12.1464 12.8534L9.25315 9.96018C9.05789 9.76492 9.05789 9.44841 9.25315 9.25315Z" fill="white" />
                  <path d="M10.6667 5.83333C10.6667 3.16396 8.50271 1 5.83333 1C3.16396 1 1 3.16396 1 5.83333C1 8.50271 3.16396 10.6667 5.83333 10.6667C8.50271 10.6667 10.6667 8.50271 10.6667 5.83333ZM11.6667 5.83333C11.6667 9.05499 9.05499 11.6667 5.83333 11.6667C2.61167 11.6667 0 9.05499 0 5.83333C0 2.61167 2.61167 0 5.83333 0C9.05499 0 11.6667 2.61167 11.6667 5.83333Z" fill="white" />
                </g>
              </svg>
            </div>
          </div>
          <span className="font-['Geist:Medium',sans-serif] font-medium text-[#fafafa] text-[14px] whitespace-nowrap">
            Pesquisar
          </span>
        </div>
      </button>
    </div>
  );
}

function Frame({ searchTerm, onSearchChange, onSearch }: { searchTerm: string; onSearchChange: (value: string) => void; onSearch: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[40px]">
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 flex flex-col gap-[10px] items-center justify-center">
              <Frame7 />
              <div className="h-[32px]" />
            </div>
            <div className="col-span-12 lg:col-start-3 lg:col-span-8" data-name="Search">
              <Frame5 searchTerm={searchTerm} onSearchChange={onSearchChange} onSearch={onSearch} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FuncionalidadeCard({ funcionalidade, onClick }: { funcionalidade: Funcionalidade; onClick: () => void }) {
  const offset = funcionalidade.imageOffset;

  return (
    <div className="flex flex-col gap-[28px]">
      <div
        onClick={onClick}
        className="h-[200px] overflow-clip relative rounded-[8px] w-full cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02]"
      >
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: offset.left,
            top: offset.top,
            width: offset.width,
            height: offset.height
          }}
          data-name="image"
        >
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={funcionalidade.imagem} />
        </div>
        <div className="absolute bg-[rgba(51,50,67,0.64)] inset-0 hover:bg-[rgba(51,50,67,0.5)] transition-colors" />
        <div className="absolute inset-0 flex items-center justify-center px-[24px]">
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[24px] text-center text-white leading-[1.2] max-w-[200px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            {funcionalidade.titulo}
          </p>
        </div>
      </div>
      <div className="[word-break:break-word] flex flex-col gap-[8px] items-start leading-[1.2] text-[#434343]">
        <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          {funcionalidade.titulo}
        </p>
        <p
          className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[12.8px] line-clamp-3"
          style={{
            fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {funcionalidade.descricao}
        </p>
      </div>
    </div>
  );
}

function Frame6({ funcionalidadesFiltradas, onCardClick }: { funcionalidadesFiltradas: Funcionalidade[]; onCardClick: (slug: string) => void }) {
  if (funcionalidadesFiltradas.length === 0) {
    return (
      <div className="flex items-center justify-center py-[80px] w-full col-span-12">
        <p className="font-['Nunito_Sans:Regular',sans-serif] font-normal text-[16px] text-[#6c6c6c]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Nenhuma funcionalidade encontrada
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-12 gap-[32px] w-full">
      {funcionalidadesFiltradas.map((func) => (
        <div key={func.id} className="col-span-12 md:col-span-6 lg:col-span-3">
          <FuncionalidadeCard funcionalidade={func} onClick={() => onCardClick(func.slug)} />
        </div>
      ))}
    </div>
  );
}

function Example() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Example">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Pagination">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Anterior</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Pagination Button">
        <div className="bg-[rgba(255,255,255,0.1)] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[34px]" data-name="Button">
          <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
          <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">1</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Pagination Button">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[34px]" data-name="Button">
          <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">2</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Pagination Button">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[8px] relative rounded-[8px] shrink-0 w-[34px]" data-name="Button">
          <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">3</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Pagination Ellipsis">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex items-center justify-center min-h-[36px] min-w-[36px] overflow-clip p-[8px] relative rounded-[8px] shrink-0" data-name="Icon Button">
          <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Icon">
            <div className="absolute inset-[42.71%_13.54%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 2.33333">
                <g id="Vector">
                  <path d={svgPaths.p8c0fe00} fill="var(--fill-0, #0A0A0A)" />
                  <path d={svgPaths.p377ace00} fill="var(--fill-0, #0A0A0A)" />
                  <path d={svgPaths.p35d3300} fill="var(--fill-0, #0A0A0A)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-name="Pagination">
        <div className="bg-[rgba(255,255,255,0)] content-stretch flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Button">
          <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#404040] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[20px]">Próximo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1({ funcionalidadesFiltradas, onCardClick }: { funcionalidadesFiltradas: Funcionalidade[]; onCardClick: (slug: string) => void }) {
  return (
    <div className="flex flex-col gap-[48px] w-full">
      <Frame6 funcionalidadesFiltradas={funcionalidadesFiltradas} onCardClick={onCardClick} />
      <div className="flex justify-center">
        <Example />
      </div>
    </div>
  );
}

function Table({ funcionalidadesFiltradas, onCardClick }: { funcionalidadesFiltradas: Funcionalidade[]; onCardClick: (slug: string) => void }) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table">
      <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[48px]">
        <Frame1 funcionalidadesFiltradas={funcionalidadesFiltradas} onCardClick={onCardClick} />
      </div>
    </div>
  );
}

function Frame2({ searchTerm, onSearchChange, onSearch, funcionalidadesFiltradas, onCardClick }: {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onSearch: () => void;
  funcionalidadesFiltradas: Funcionalidade[];
  onCardClick: (slug: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative z-[1]">
      <Frame3 />
      <Frame searchTerm={searchTerm} onSearchChange={onSearchChange} onSearch={onSearch} />
      <Table funcionalidadesFiltradas={funcionalidadesFiltradas} onCardClick={onCardClick} />
    </div>
  );
}

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Busca já é aplicada em tempo real
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleCardClick = (slug: string) => {
    navigate(`/funcionalidade/${slug}`);
  };

  const funcionalidadesFiltradas = funcionalidades.filter((func) => {
    if (!searchTerm.trim()) return true;

    const searchLower = searchTerm.toLowerCase();
    return (
      func.titulo.toLowerCase().includes(searchLower) ||
      func.descricao.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="bg-white content-stretch flex isolate items-center relative size-full" data-name="Manutenção de Lojas">
      <Frame2
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
        funcionalidadesFiltradas={funcionalidadesFiltradas}
        onCardClick={handleCardClick}
      />
    </div>
  );
}
