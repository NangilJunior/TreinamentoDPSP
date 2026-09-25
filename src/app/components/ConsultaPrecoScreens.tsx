import { BadgeDollarSign, Search, ScanBarcode, ReceiptText } from "lucide-react";
import { PDVHeader } from "./ValorRetiradaScreen";

// Rodapé Volta/Entra — mesmo padrão (com ícones) usado no rodapé real das
// telas de Home (ex.: Frame22 em src/imports/Home-4/index.tsx), reaproveitado
// aqui para manter a navegação decorativa consistente com o restante do PDV.
function RodapeVoltaEntra({ entraAtivo }: { entraAtivo: boolean }) {
  return (
    <div className="flex items-center justify-between px-[24px] py-[20px]">
      <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
        <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute inset-[21.88%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.99992 8.99992">
              <path d="M8.14645 0.146447C8.34171 -0.0488155 8.65822 -0.0488155 8.85348 0.146447C9.04874 0.341709 9.04874 0.658216 8.85348 0.853478L0.853478 8.85348C0.658216 9.04874 0.341709 9.04874 0.146447 8.85348C-0.0488155 8.65822 -0.0488155 8.34171 0.146447 8.14645L8.14645 0.146447Z" fill="#ED403D" />
              <path d="M0.146447 0.146447C0.341709 -0.0488155 0.658216 -0.0488155 0.853478 0.146447L8.85348 8.14645C9.04874 8.34171 9.04874 8.65822 8.85348 8.85348C8.65822 9.04874 8.34171 9.04874 8.14645 8.85348L0.146447 0.853478C-0.0488155 0.658216 -0.0488155 0.341709 0.146447 0.146447Z" fill="#ED403D" />
            </svg>
          </div>
        </div>
        <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-[#ed403d]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
      </div>
      <div className={`flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] ${entraAtivo ? "" : "opacity-50"}`} style={{ backgroundColor: entraAtivo ? '#2258e6' : '#cfcfcf' }}>
        <div className="relative shrink-0 size-[16px]">
          <div className="absolute inset-[9.38%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
              <path d="M4.81315 2.81315C5.00841 2.61789 5.32492 2.61789 5.52018 2.81315L8.85352 6.14648C9.04878 6.34175 9.04878 6.65825 8.85352 6.85352L5.52018 10.1868C5.32492 10.3821 5.00841 10.3821 4.81315 10.1868C4.61789 9.99159 4.61789 9.67508 4.81315 9.47982L7.79297 6.5L4.81315 3.52018C4.61789 3.32492 4.61789 3.00841 4.81315 2.81315Z" fill={entraAtivo ? "white" : "#3b3b3b"} />
              <path d="M8.5 6C8.77614 6 9 6.22386 9 6.5C9 6.77614 8.77614 7 8.5 7H0.5C0.223858 7 0 6.77614 0 6.5C0 6.22386 0.223858 6 0.5 6H8.5Z" fill={entraAtivo ? "white" : "#3b3b3b"} />
              <path d="M12 11.1667V1.83333C12 1.61232 11.9121 1.40042 11.7559 1.24414C11.5996 1.08786 11.3877 1 11.1667 1H8.5C8.22386 1 8 0.776142 8 0.5C8 0.223858 8.22386 0 8.5 0H11.1667C11.6529 0 12.1191 0.193293 12.4629 0.537109C12.8067 0.880926 13 1.3471 13 1.83333V11.1667C13 11.6529 12.8067 12.1191 12.4629 12.4629C12.1191 12.8067 11.6529 13 11.1667 13H8.5C8.22386 13 8 12.7761 8 12.5C8 12.2239 8.22386 12 8.5 12H11.1667C11.3877 12 11.5996 11.9121 11.7559 11.7559C11.9121 11.5996 12 11.3877 12 11.1667Z" fill={entraAtivo ? "white" : "#3b3b3b"} />
            </svg>
          </div>
        </div>
        <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap ${entraAtivo ? "text-white" : "text-[#3b3b3b]"}`} style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Entra</p>
      </div>
    </div>
  );
}

// Passo 49 (node 1985:34437 do Figma) — tela cheia acionada pela tecla [L]
// Consulta Item, com o campo de SKU sempre no estado "Default" (repouso,
// sem o anel de foco), aguardando o escaneamento do produto. O botão
// "Escanear Produtos" é o mesmo botão global reaproveitado do fluxo de
// Registro de Produtos (renderizado fora desta tela, sobre o fundo escuro).
export function ConsultaValorInputScreen() {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PDVHeader trilha={[]} />
      <div className="flex-1 flex flex-col items-center gap-[24px] p-[16px] overflow-y-auto">
        <div className="bg-[#f6f6f6] flex flex-col gap-[16px] items-start p-[20px] rounded-[8px] w-[618px] shrink-0">
          <div className="flex gap-[12px] items-center">
            <BadgeDollarSign size={24} className="text-[#404040]" strokeWidth={1.8} />
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Consultar valores
            </p>
          </div>
          <div className="flex h-[56px] items-center w-full rounded-[8px] border border-[#a3a3a3] bg-white px-[16px] gap-[12px]">
            <Search size={16} className="text-[#0a0a0a]/60 shrink-0" />
            <p className="font-['Geist',sans-serif] text-[14px] text-[rgba(10,10,10,0.6)]">
              Bipe o código de barras ou digite o SKU
            </p>
          </div>
          <div className="flex gap-[12px] items-center">
            <ScanBarcode size={16} className="text-black/60" />
            <p className="font-['Geist',sans-serif] text-[11px] text-black/60">
              Bipe o código de barras ou digite o SKU
            </p>
          </div>
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={false} />
    </div>
  );
}

// Passo 50 (node 1985:35503 do Figma) — resultado da consulta: informações e
// preço do produto de exemplo, sem qualquer alteração na venda em andamento.
export function ConsultaValorResultadoScreen() {
  return (
    <div className="absolute inset-0 bg-white rounded-[20px] overflow-hidden flex flex-col">
      <PDVHeader trilha={[]} />
      <div className="fade-in-delay absolute top-[11px] left-1/2 -translate-x-1/2 w-[480px] pointer-events-none z-[45]">
        <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            As informações sobre o produto escaneado são exibidas. Clique em <span className="font-bold text-white">[Limpa]</span> para retornar aonde estava antes da consulta.
          </p>
        </div>
        <div className="flex justify-center mt-0">
          <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center gap-[12px] p-[16px] overflow-y-auto">
        <div className="bg-[#f6f6f6] flex flex-col gap-[16px] items-start p-[20px] rounded-[8px] w-[618px] shrink-0">
          <div className="flex gap-[12px] items-center">
            <BadgeDollarSign size={24} className="text-[#404040]" strokeWidth={1.8} />
            <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#404040] text-[20px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Consultar valores
            </p>
          </div>
          <div className="flex items-stretch w-full isolate">
            <div className="bg-[#52addc] w-[8px] rounded-l-[4px] shrink-0" />
            <div className="bg-white border border-[#dadada] flex-1 flex gap-[24px] items-center px-[24px] py-[16px] rounded-r-[4px]">
              <ReceiptText size={24} className="text-[#52addc] shrink-0" />
              <div className="flex flex-col gap-[2px]">
                <p className="font-semibold text-[16px] text-[#565354]">Sinvastatina 20 mg - 30 comprimidos</p>
                <div className="flex gap-[12px] text-[12.8px] text-[#757575]">
                  <p>Ref: 30039069</p>
                  <p>Cód: 646156</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex justify-between text-[#404040] text-[16px]">
              <p>Preço unitário:</p>
              <p>R$ 8,50</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#52addc] text-[16px]">Exclusivo Cliente Drogaria Pacheco</p>
              <div className="flex gap-[8px] items-center">
                <div className="bg-white flex items-center justify-center p-[5px] rounded-[8px]">
                  <p className="font-bold text-[#52addc] text-[14px]">-10%</p>
                </div>
                <p className="font-bold text-[#52addc] text-[14px]">-R$ 0,85</p>
                <p className="font-bold text-[#52addc] text-[14px]">R$ 7,65</p>
              </div>
            </div>
            <div className="h-px bg-[#e5e5e5] w-full" />
            <div className="flex justify-between text-[#404040] text-[20px] font-extrabold">
              <p>Total:</p>
              <p>R$ 7,65</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#ddd] flex flex-col rounded-[8px] w-[618px] shrink-0">
          <p className="font-bold text-[#404040] text-[14px] pt-[12px] px-[20px]">Dados Fiscais</p>
          <div className="flex items-center justify-between px-[20px] py-[12px]">
            <div className="flex flex-col w-[90px]">
              <p className="font-semibold text-[#757575] text-[7.8px]">IPPT</p>
              <p className="font-bold text-[#404040] text-[13px]">Próprio</p>
            </div>
            <div className="flex flex-col w-[90px]">
              <p className="font-semibold text-[#757575] text-[7.8px]">IAT</p>
              <p className="font-bold text-[#404040] text-[13px]">Arredond.</p>
            </div>
            <div className="flex flex-col">
              <p className="font-semibold text-[#757575] text-[7.8px]">Tributação</p>
              <p className="font-bold text-[#404040] text-[13px]">Substituição</p>
            </div>
            <div className="flex flex-col w-[90px]">
              <p className="font-semibold text-[#757575] text-[7.8px]">Uni Venda</p>
              <p className="font-bold text-[#404040] text-[13px]">UN</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end w-[618px]">
          <div className="flex gap-[8px] items-center px-[24px] py-[16px] rounded-[8px] border border-[#d4d4d4] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
            <span className="text-[#2258e6]">←</span>
            <p className="font-bold text-[#2258e6] text-[20px]">Limpa</p>
          </div>
        </div>
      </div>
      <RodapeVoltaEntra entraAtivo={true} />
    </div>
  );
}
