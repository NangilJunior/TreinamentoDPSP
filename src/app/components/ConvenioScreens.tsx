import { Handshake, FileBadge2, MoreHorizontal, KeyRound, ChevronRight } from "lucide-react";

// Todas as telas do fluxo de Convênio (nodes 2210:xxxxx do Figma) usam o
// mesmo padrão de bottom sheet branco sobre o PDV escurecido/desfocado ao
// fundo — o mesmo já usado em MaquininhaAguardandoScreen.tsx — em vez de
// substituir a tela inteira como InformeOVScreen/SelecionePedidoScreen.
function ConvenioBottomSheet({
  iconBg,
  icon,
  titulo,
  tooltip,
  children,
  footer,
}: {
  iconBg: string;
  icon: React.ReactNode;
  titulo: string;
  tooltip?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}) {
  return (
    <>
      <div className="fade-in-delay absolute inset-0 bg-[rgba(0,0,0,0.4)] backdrop-blur-[4px] rounded-[20px] z-[45]" />
      <div className="fade-in-delay absolute bottom-0 left-0 right-0 z-[50] bg-white flex flex-col gap-[18px] items-start px-[40px] py-[32px] rounded-tl-[24px] rounded-tr-[24px] shadow-[0px_25px_25px_rgba(0,0,0,0.1)]">
        {tooltip && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-[16px] w-[560px] pointer-events-none">
            <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8" style={{ backdropFilter: 'blur(10px)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-['Nunito_Sans',sans-serif] text-[18px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                {tooltip}
              </p>
            </div>
            <div className="flex justify-center mt-0">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
            </div>
          </div>
        )}
        <div className="flex gap-[32px] items-center w-full">
          <div className="flex items-center p-[10px] rounded-full shrink-0" style={{ backgroundColor: iconBg }}>
            {icon}
          </div>
          <p className="font-['Nunito_Sans',sans-serif] font-bold text-[#7e7e7e] text-[25px] leading-[1.2]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
            {titulo}
          </p>
        </div>
        {children}
        {footer}
      </div>
    </>
  );
}

function BottomSheetFooter({ entraAtivo }: { entraAtivo: boolean }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px]">
        <div aria-hidden className="absolute border border-[#d4d4d4] inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        <p className="font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap text-[#ed403d]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Volta</p>
      </div>
      <div className={`flex gap-[8px] h-[72px] items-center justify-center px-[24px] py-[10px] relative rounded-[8px] w-[185px] ${entraAtivo ? "" : "opacity-50"}`} style={{ backgroundColor: entraAtivo ? '#2258e6' : '#cfcfcf' }}>
        <p className={`font-['Nunito_Sans',sans-serif] font-bold text-[20px] text-center whitespace-nowrap ${entraAtivo ? "text-white" : "text-[#3b3b3b]"}`} style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>Entra</p>
      </div>
    </div>
  );
}

// Passo 41 (node 2210:29854) — escolha entre "Cliente Exc. Drog. Pacheco" e
// "Outros Convênios". Apenas a opção 2 é interativa neste exemplo, conforme
// solicitado: o operador pressiona a tecla [2] no teclado virtual.
export function ConvenioEscolhaScreen() {
  return (
    <ConvenioBottomSheet
      iconBg="#f2f9fe"
      icon={<Handshake size={32} className="text-[#2258e6]" strokeWidth={1.8} />}
      titulo="Identificação do Cliente"
      tooltip={<>Este exemplo segue pelo fluxo de <span className="font-bold text-white">Outros Convênios</span>, por ser mais completo. Pressione a tecla <span className="font-bold text-white">[2]</span> no teclado virtual.</>}
    >
      <div className="flex gap-[56px] items-center justify-center w-full">
        <div className="border border-[#ddd] flex gap-[20px] h-[70px] items-center px-[18px] py-[10px] rounded-[6px] shrink-0">
          <div className="border border-[#2258e6] flex items-center justify-center px-[24px] py-[10px] rounded-[8px] shrink-0">
            <p className="font-semibold text-[#2258e6] text-[24px] leading-[1.2]">1</p>
          </div>
          <p className="font-medium text-[#707070] text-[12px] tracking-[3px]">CLIENTE EXC. DROG. PACHECO</p>
        </div>
        <div className="bg-[#2258e6] flex gap-[20px] h-[70px] items-center px-[18px] py-[10px] rounded-[6px] shrink-0 w-[366px]">
          <div className="bg-[#2258e6] border-2 border-white flex items-center justify-center px-[24px] py-[10px] rounded-[8px] shrink-0">
            <p className="font-semibold text-white text-[24px] leading-[1.2]">2</p>
          </div>
          <p className="font-medium text-white text-[12px] tracking-[3px]">OUTROS CONVÊNIOS</p>
        </div>
      </div>
    </ConvenioBottomSheet>
  );
}

interface ConvenioItem { sigla: string; nome: string; codigo: string; }

// Passo 42 (nodes 2210:30197 / 4961:50139) — lista de convênios, filtrada
// conforme o operador digita o código. Ao completar o código de exemplo
// (Unimed Nacional, 1234), apenas ele permanece na lista e o Entra é
// liberado.
export function OutrosConveniosScreen({ codigo, lista, codigoCompleto }: { codigo: string; lista: ConvenioItem[]; codigoCompleto: boolean }) {
  return (
    <ConvenioBottomSheet
      iconBg="#f2f9fe"
      icon={<FileBadge2 size={32} className="text-[#2258e6]" strokeWidth={1.8} />}
      titulo="Outros Convênios"
      tooltip={codigoCompleto
        ? <>O código do convênio foi informado. Pressione <span className="font-bold text-white">[Entra]</span> para confirmar.</>
        : <>Digite o código do convênio no teclado virtual. Neste exemplo, digite <span className="font-bold text-white">1234</span> (Unimed Nacional).</>}
      footer={<BottomSheetFooter entraAtivo={codigoCompleto} />}
    >
      <div className="flex flex-col gap-[24px] items-center justify-center px-[71px] w-full">
        <div className="w-[428px]">
          <div className="bg-white border border-[#a3a3a3] flex gap-[12px] h-[56px] items-center px-[16px] py-[9.5px] rounded-[8px] shadow-[0px_0px_0px_3px_#d4d4d4]">
            <p className="text-[14px] text-[#0a0a0a]">
              {codigo.length > 0 ? codigo : <span className="text-[#757575]">Código do convênio</span>}
            </p>
          </div>
        </div>
        <div className="border border-[#e5e5e5] flex flex-col items-start p-[20px] rounded-[20px] w-full">
          {lista.map((c, idx) => (
            <div key={c.codigo} className={`flex items-start w-full ${idx < lista.length - 1 ? "" : ""}`}>
              <div className={`border-b border-[#e5e5e5] flex items-center px-[22px] py-[8px] shrink-0 ${idx === 0 ? "bg-[#e4f6ff]" : ""}`}>
                <div className="bg-white flex items-center justify-center rounded-full size-[40px]">
                  <p className="text-[14px] font-semibold">{c.sigla}</p>
                </div>
              </div>
              <div className={`border-b border-[#e5e5e5] flex flex-1 gap-[8px] items-center px-[8px] py-[16px] text-[16px] whitespace-nowrap ${idx === 0 ? "bg-[#e4f6ff]" : ""}`}>
                <p className="font-semibold text-[#0a0a0a]">{c.nome}</p>
                <p className="text-[#565656]">{c.codigo}</p>
              </div>
              <div className={`border-b border-[#e5e5e5] flex items-center px-[22px] py-[16px] shrink-0 ${idx === 0 ? "bg-[#e4f6ff]" : ""}`}>
                <ChevronRight size={24} className="text-[#404040]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ConvenioBottomSheet>
  );
}

// Passo 43 (nodes 2210:29971 / 2210:30084) — CPF ou carteirinha do
// conveniado, digitado no teclado virtual.
export function ConvenioCpfScreen({ cpfFormatado, cpfCompleto }: { cpfFormatado: string; cpfCompleto: boolean }) {
  return (
    <ConvenioBottomSheet
      iconBg="#f2f9fe"
      icon={<FileBadge2 size={32} className="text-[#2258e6]" strokeWidth={1.8} />}
      titulo="Outros Convênios"
      tooltip={cpfCompleto
        ? <>O CPF foi informado. Pressione <span className="font-bold text-white">[Entra]</span> para consultar o conveniado.</>
        : <>Digite o CPF ou o número da carteirinha do conveniado. Neste exemplo, digite <span className="font-bold text-white">111.222.333-00</span>.</>}
      footer={<BottomSheetFooter entraAtivo={cpfCompleto} />}
    >
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-[10px] items-start w-[428px]">
          <p className="text-[#434343] text-[16px] leading-[1.2]">CPF ou Carteirinha</p>
          <div className="bg-white border border-[#a3a3a3] flex gap-[12px] h-[56px] items-center px-[16px] py-[9.5px] rounded-[8px] shadow-[0px_0px_0px_3px_#d4d4d4] w-full">
            <p className="text-[14px] text-[#0a0a0a]">
              {cpfFormatado.length > 0 ? cpfFormatado : <span className="text-[#737373]">000.000.000-00</span>}
            </p>
          </div>
        </div>
      </div>
    </ConvenioBottomSheet>
  );
}

// Passo 44 (node 2210:30340) — consulta do CPF junto ao provedor do
// convênio. Não há uma consulta real para aguardar: o operador clica em
// Próximo para simular a resposta e seguir para o passo seguinte.
export function ConvenioCarregandoScreen() {
  return (
    <ConvenioBottomSheet
      iconBg="transparent"
      icon={<MoreHorizontal size={32} className="text-[#7e7e7e]" strokeWidth={2} />}
      titulo="Carregando"
      tooltip={<>Nesta etapa, o sistema consulta os dados do conveniado junto ao provedor do convênio. Clique em <span className="font-bold text-white">Próximo</span> para simular a resposta.</>}
    >
      <p className="text-[#a3a3a3] text-[18px] text-center leading-[1.2] w-[508px]">
        Consultando CPF do conveniado. Por favor Aguarde.
      </p>
    </ConvenioBottomSheet>
  );
}

// Passo 45 (node 2210:30941) — senha do conveniado no pinpad. Nem todo
// convênio exige senha; aqui o operador clica em Próximo para simular a
// confirmação e seguir para a tela de venda.
export function ConvenioAguardandoScreen() {
  return (
    <ConvenioBottomSheet
      iconBg="#fbf2d7"
      icon={<KeyRound size={32} className="text-[#c99a2e]" strokeWidth={1.8} />}
      titulo="Aguardando Cliente"
      tooltip={<>Alguns convênios exigem que o cliente digite uma senha no Pinpad; outros não. Clique em <span className="font-bold text-white">Próximo</span> para simular a confirmação.</>}
    >
      <p className="text-[#a3a3a3] text-[18px] text-center leading-[1.2] w-[532px]">
        Aguardando o cliente digitar a senha no Pinpad...
      </p>
    </ConvenioBottomSheet>
  );
}
