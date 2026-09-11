import { useState, type UIEvent } from "react";
import { useNavigate } from "react-router";
import Frame19675 from "../../imports/Frame19675/Frame19675";
import ProfileMenu from "./ProfileMenu";
import Footer from "./Footer";
import { secoesCategorias, type CategoriaSecaoData } from "../data/secoesCategorias";

const imgCategoriaSecao = "https://www.eliteeducacao.com.br/wp-content/uploads/2025/10/Atendente-de-Farmacia-com-Operador-de-Caixa.webp";

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
          <div className="col-span-6 lg:col-span-8 flex items-center">
            <Frame8 />
          </div>
          <div className="col-span-6 lg:col-span-4 flex items-center justify-end">
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
      <div className="flex flex-col font-['Nunito_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[#383838] text-[31.248px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">Centro de Treinamentos</p>
      </div>
      <div className="flex flex-col font-['Nunito_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[#6c6c6c] text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">O que você gostaria de aprender hoje?</p>
      </div>
    </div>
  );
}

function Al({ value, onChange, compact }: { value: string; onChange: (value: string) => void; compact?: boolean }) {
  return (
    <div className="flex flex-[1_0_0] gap-px items-center min-w-px relative" data-name="AL">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busque o treinamento"
        className={`flex-[1_0_0] min-w-px bg-transparent outline-none border-none font-['Nunito_Sans',sans-serif] font-normal leading-[130%] placeholder:text-[#737373] transition-all duration-200 ${compact ? "text-[15px]" : "text-[16px]"}`}
        style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
      />
    </div>
  );
}

function Frame5({ searchTerm, onSearchChange, compact }: { searchTerm: string; onSearchChange: (value: string) => void; compact?: boolean }) {
  const handleClear = () => {
    onSearchChange("");
  };

  const hasValue = searchTerm.trim().length > 0;

  return (
    <div className="flex gap-[16px] items-center w-full">
      <div className={`bg-white flex-1 relative rounded-[8px] transition-all duration-200 ${compact ? "h-[40px]" : "h-[56px]"}`} data-name="Input">
        <div className="flex flex-row items-center h-full overflow-clip rounded-[inherit]">
          <div className="flex gap-[12px] items-center h-full px-[16px] py-[9.5px] w-full">
            <div className={`overflow-clip relative shrink-0 transition-all duration-200 ${compact ? "size-[20px]" : "size-[28px]"}`} data-name="Search icon">
              <div className="absolute inset-[9.38%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.2498 16.2498">
                  <g id="Vector" transform="translate(1.198 1.198)">
                    <path d="M9.25315 9.25315C9.44841 9.05789 9.76492 9.05789 9.96018 9.25315L12.8534 12.1464C13.0487 12.3416 13.0487 12.6581 12.8534 12.8534C12.6581 13.0487 12.3416 13.0487 12.1464 12.8534L9.25315 9.96018C9.05789 9.76492 9.05789 9.44841 9.25315 9.25315Z" fill="#525252" />
                    <path d="M10.6667 5.83333C10.6667 3.16396 8.50271 1 5.83333 1C3.16396 1 1 3.16396 1 5.83333C1 8.50271 3.16396 10.6667 5.83333 10.6667C8.50271 10.6667 10.6667 8.50271 10.6667 5.83333ZM11.6667 5.83333C11.6667 9.05499 9.05499 11.6667 5.83333 11.6667C2.61167 11.6667 0 9.05499 0 5.83333C0 2.61167 2.61167 0 5.83333 0C9.05499 0 11.6667 2.61167 11.6667 5.83333Z" fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
            <Al value={searchTerm} onChange={onSearchChange} compact={compact} />
            {hasValue ? (
              <button
                onClick={handleClear}
                className="flex items-center justify-center p-[2px] shrink-0 w-[24px] cursor-pointer hover:opacity-70 transition-opacity"
                data-name="Clear button"
              >
                <div className="overflow-clip relative shrink-0 size-[20px]">
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
            ) : null}
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      </div>
    </div>
  );
}


const placeholderDescricao = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

function CategoriaCard({ titulo, subtitulo, onClick }: { titulo: string; subtitulo: string; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={`bg-white border border-[#e5e5e5] rounded-[8px] overflow-hidden flex items-stretch${onClick ? " cursor-pointer hover:shadow-md transition-shadow" : ""}`}
    >
      <div className="w-[4px] shrink-0 bg-[#FF5C5C]" />
      <div className="flex-1 min-w-0 px-[20px] py-[12px] flex flex-col justify-center gap-[2px]">
        <p
          className="font-['Nunito_Sans',sans-serif] font-bold text-[16px] text-[#383838] leading-[1.2]"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          {titulo}
        </p>
        <p
          className="font-['Nunito_Sans',sans-serif] font-normal text-[13px] text-[#6c6c6c] leading-[1.3]"
          style={{
            fontVariationSettings: "'YTLC' 500, 'wdth' 100",
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {subtitulo}
        </p>
      </div>
    </div>
  );
}

function CategoriaSection({ titulo, cards, onCardClick }: { titulo: string; cards: CategoriaCardData[]; onCardClick: (slug: string) => void }) {
  return (
    <div className="w-full bg-white border border-[#e5e5e5] rounded-[12px] overflow-hidden">
      <div className="grid grid-cols-12 gap-[24px]">
        <div className="col-span-3">
          <div className="relative h-full min-h-[184px] overflow-clip">
            <div
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: "50%", top: "50%", width: "120%", height: "120%" }}
              data-name="image"
            >
              <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgCategoriaSecao} />
            </div>
            <div className="absolute bg-[rgba(51,50,67,0.64)] inset-0" />
            <div className="absolute inset-0 flex items-center justify-center px-[16px]">
              <p
                className="font-['Nunito_Sans',sans-serif] font-bold text-[24px] text-center text-white leading-[1.2]"
                style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
              >
                {titulo}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-9 pt-[24px] pr-[24px] pb-[24px] flex items-center">
          <div className="grid grid-cols-3 gap-[16px] w-full">
            {cards.map((card) => (
              <CategoriaCard
                key={card.titulo}
                titulo={card.titulo}
                subtitulo={card.descricao ?? placeholderDescricao}
                onClick={card.slug ? () => onCardClick(card.slug!) : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame1({ categoriasFiltradas, onCardClick }: { categoriasFiltradas: CategoriaSecaoData[]; onCardClick: (slug: string) => void }) {
  if (categoriasFiltradas.length === 0) {
    return (
      <div className="flex items-center justify-center h-full min-h-[240px] w-full">
        <p className="font-['Nunito_Sans',sans-serif] font-normal text-[16px] text-[#6c6c6c]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Nenhuma funcionalidade encontrada
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[48px] w-full">
      {categoriasFiltradas.map((secao) => (
        <CategoriaSection key={secao.titulo} titulo={secao.titulo} cards={secao.cards} onCardClick={onCardClick} />
      ))}
    </div>
  );
}

function Table({ searchTerm, onSearchChange, categoriasFiltradas, onCardClick }: {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  categoriasFiltradas: CategoriaSecaoData[];
  onCardClick: (slug: string) => void;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const COMPACT_SCROLL_THRESHOLD = 80;

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    setIsScrolled(scrollTop > 0);
    setIsCompact(scrollTop > COMPACT_SCROLL_THRESHOLD);
  };

  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full overflow-y-auto flex flex-col" data-name="Table" onScroll={handleScroll}>
      <div className="w-full max-w-[1440px] mx-auto px-[96px] pt-[32px] flex items-center justify-center">
        <Frame7 />
      </div>
      <div
        className={`sticky top-0 z-10 bg-white w-full transition-shadow duration-200${isScrolled ? " shadow-[0_4px_12px_-4px_rgba(0,0,0,0.15)]" : ""}`}
      >
        <div className={`w-full max-w-[1440px] mx-auto px-[96px] transition-all duration-200 ${isCompact ? "pt-[20px] pb-[20px]" : "pt-[32px] pb-[32px]"}`}>
          <div className="grid grid-cols-12 gap-[32px]">
            <div className="col-span-12 lg:col-start-4 lg:col-span-6" data-name="Search">
              <Frame5 searchTerm={searchTerm} onSearchChange={onSearchChange} compact={isCompact} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-[96px] pb-[48px]">
        <Frame1 categoriasFiltradas={categoriasFiltradas} onCardClick={onCardClick} />
      </div>
      <Footer />
    </div>
  );
}

function Frame2({ searchTerm, onSearchChange, categoriasFiltradas, onCardClick }: {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  categoriasFiltradas: CategoriaSecaoData[];
  onCardClick: (slug: string) => void;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative z-[1]">
      <Frame3 />
      <Table
        searchTerm={searchTerm}
        onSearchChange={onSearchChange}
        categoriasFiltradas={categoriasFiltradas}
        onCardClick={onCardClick}
      />
    </div>
  );
}

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleCardClick = (slug: string) => {
    navigate(`/funcionalidade/${slug}`);
  };

  const searchLower = searchTerm.trim().toLowerCase();
  const categoriasFiltradas = searchLower
    ? secoesCategorias
        .map((secao) => ({
          ...secao,
          cards: secao.cards.filter(
            (card) =>
              card.titulo.toLowerCase().includes(searchLower) ||
              (card.descricao ?? "").toLowerCase().includes(searchLower)
          ),
        }))
        .filter((secao) => secao.cards.length > 0)
    : secoesCategorias;

  return (
    <div className="bg-white content-stretch flex isolate items-center relative h-screen w-full" data-name="Manutenção de Lojas">
      <Frame2
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        categoriasFiltradas={categoriasFiltradas}
        onCardClick={handleCardClick}
      />
    </div>
  );
}
