import { Banknote, ShieldCheck, UserRound, Gavel, CalendarClock, Check } from "lucide-react";
import { PDVHeader, formatCurrency } from "./ValorRetiradaScreen";

interface ComprovanteScreenProps {
  /** Valor retirado, em centavos. */
  valorCents?: number;
  /** Saldo do caixa antes da sangria, em centavos. */
  saldoAnteriorCents?: number;
}

function AuditRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex gap-[20px] h-[70px] items-center px-[64px] py-[10px] rounded-[6px] w-full">
      <div className="shrink-0 size-[24px] flex items-center justify-center text-[#9a9a9a]">{icon}</div>
      <div className="flex flex-col items-start">
        <p className="font-['Geist:Medium',sans-serif] font-medium text-[#707070] text-[12px] tracking-[3px] whitespace-nowrap">
          {label}
        </p>
        <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.2] text-[#707070] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ComprovanteScreen({
  valorCents = 100000,
  saldoAnteriorCents = 125000,
}: ComprovanteScreenProps) {
  const remanescenteCents = Math.max(saldoAnteriorCents - valorCents, 0);

  return (
    <div className="absolute inset-0 bg-white overflow-hidden rounded-[20px] flex flex-col">
      <PDVHeader />

      {/* Main content */}
      <div className="bg-white flex-1 flex flex-col gap-[32px] items-center p-[20px] overflow-hidden">
        {/* Success */}
        <div className="flex flex-col gap-[10px] items-center justify-center px-[129px] py-[14px] w-full">
          <div className="flex items-center justify-center size-[64px]">
            <div className="bg-[#e7f4e2] flex h-full w-full items-center justify-center p-[5px] rounded-full">
              <Check className="size-[40px] text-[#5fa052]" strokeWidth={2.5} />
            </div>
          </div>
          <div className="flex flex-col gap-[8px] items-center whitespace-nowrap">
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[1.2] text-[#333] text-[31.248px]" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
              Sangria realizada
            </p>
            <p className="font-['Geist:Medium',sans-serif] font-medium leading-[20px] text-[#747474] text-[14px] tracking-[3px]">
              OPERAÇÃO REALIZADA COM SUCESSO
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="flex gap-[32px] items-start px-[128px] w-full">
          {/* Card: Detalhes da operação */}
          <div className="bg-white border border-[#dbdbdb] border-solid flex-1 flex flex-col gap-[8px] items-start py-[20px] rounded-[8px]">
            <div className="flex gap-[20px] items-center px-[20px] py-[4px] w-full">
              <Banknote className="size-[24px] text-[#44b0e8]" strokeWidth={1.6} />
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[#2d2d2d] text-[14px] tracking-[3px] whitespace-nowrap">
                DETALHES DA OPERAÇÃO
              </p>
            </div>

            {/* Saldo original */}
            <div className="flex flex-col items-start justify-center px-[64px] py-[10px] rounded-[6px] w-full">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[#707070] text-[12px] tracking-[3px] whitespace-nowrap">
                SALDO ORIGINAL
              </p>
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[1.2] text-[#707070] text-[25.008px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                R$ {formatCurrency(saldoAnteriorCents)}
              </p>
            </div>

            {/* Valor retirado (destaque) */}
            <div className="bg-[#e7f4e2] flex flex-col items-start justify-center px-[64px] py-[10px] w-full">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[#048c0d] text-[12px] tracking-[3px] whitespace-nowrap">
                VALOR RETIRADO
              </p>
              <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold leading-[1.2] text-[#048c0d] text-[39.056px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                R$ {formatCurrency(valorCents)}
              </p>
            </div>

            {/* Valor remanescente */}
            <div className="flex flex-col h-[71px] items-start justify-center px-[64px] py-[10px] rounded-[6px] w-full">
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[#4d4d4d] text-[12px] tracking-[3px] whitespace-nowrap">
                VALOR REMANESCENTE
              </p>
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[1.2] text-[#707070] text-[25.008px] whitespace-nowrap" style={{ fontVariationSettings: '"YTLC" 500, "wdth" 100' }}>
                R$ {formatCurrency(remanescenteCents)}
              </p>
            </div>
          </div>

          {/* Card: Informações de auditoria */}
          <div className="bg-white border border-[#dbdbdb] border-solid flex-1 flex flex-col items-start justify-between py-[20px] rounded-[8px] self-stretch">
            <div className="flex gap-[20px] items-center px-[20px] py-[4px] w-full">
              <ShieldCheck className="size-[24px] text-[#44b0e8]" strokeWidth={1.6} />
              <p className="font-['Geist:Medium',sans-serif] font-medium text-[#2d2d2d] text-[14px] tracking-[3px] whitespace-nowrap">
                INFORMAÇÕES DE AUDITORIA
              </p>
            </div>

            <AuditRow
              icon={<UserRound className="size-[24px]" strokeWidth={1.6} />}
              label="OPERADOR DE CAIXA"
              value="F - 4429 - João Silva"
            />
            <AuditRow
              icon={<Gavel className="size-[24px]" strokeWidth={1.6} />}
              label="GERENTE RESPONSÁVEL"
              value="F - 0012 - Gerente Maria"
            />
            <AuditRow
              icon={<CalendarClock className="size-[24px]" strokeWidth={1.6} />}
              label="DATA E HORA DO REGISTRO"
              value="24/05/2024 - 15:34:12"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
