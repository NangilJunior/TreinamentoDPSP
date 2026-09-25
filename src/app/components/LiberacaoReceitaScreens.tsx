import iconePillBottle from "../../imports/LiberacaoReceitaIcons/pill-bottle.svg";
import { ConvenioBottomSheet, BottomSheetFooter } from "./ConvenioScreens";

// Passo 47 (node 7069:38956 do Figma) — ao escanear um medicamento
// controlado, o sistema solicita o número da receita antes de liberar o
// item para a venda. Mesmo mecanismo de digitação guiada usado nas telas de
// Convênio (bottom sheet + teclado virtual).
export function ReceitaScreen({ numero, numeroCompleto, semReceita = false }: { numero: string; numeroCompleto: boolean; semReceita?: boolean }) {
  return (
    <ConvenioBottomSheet
      iconBg="#f2f9fe"
      icon={<img src={iconePillBottle} alt="" className="size-[32px]" />}
      titulo="Clonazepam 2mg · 30 comprimidos"
      tooltip={semReceita
        ? <>O cliente não possui receita médica para apresentar. Portanto, o medicamento só poderá ser incluído na venda com a liberação da gerência. Clique em <span className="font-bold text-white">[Volta]</span> para prosseguir dessa forma.</>
        : numeroCompleto
        ? <>O número da receita foi informado. Pressione <span className="font-bold text-white">[Entra]</span> para autenticar.</>
        : <>Digite o número da receita no teclado virtual. Neste exemplo, informe <span className="font-bold text-white">111222333</span>.</>}
      tooltipWidthPx={semReceita ? 640 : 560}
      footer={<BottomSheetFooter entraAtivo={!semReceita && numeroCompleto} />}
    >
      <div className="flex items-center justify-center w-full">
        <div className="flex flex-col gap-[10px] items-start w-[428px]">
          <p className="text-[#434343] text-[16px] leading-[1.2]">Digite o número da receita</p>
          <div className={`bg-white border flex gap-[12px] h-[56px] items-center px-[16px] py-[9.5px] rounded-[8px] w-full ${numero.length > 0 ? "border-[#a3a3a3] shadow-[0px_0px_0px_3px_#d4d4d4]" : "border-[#e5e5e5] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]"}`}>
            <p className="text-[14px] text-[#0a0a0a]">
              {numero.length > 0 ? numero : <>{"| "}<span className="text-[#737373]">Número da receita</span></>}
            </p>
          </div>
        </div>
      </div>
    </ConvenioBottomSheet>
  );
}
