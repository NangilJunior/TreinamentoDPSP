import { useNavigate, useParams } from "react-router";
import { useState, useRef, useEffect } from "react";
import Frame19675 from "../../imports/Frame19675/Frame19675";
import ProfileMenu from "./ProfileMenu";
import svgPaths from "../../imports/ManutencaoDeLojas-1/svg-ygln4qhrvj";
import pdvSvgPaths from "../../imports/Home/svg-3nwk8k5aou";
import peripheralSvgPaths from "../../imports/Frame19555/svg-8dfs6vtjpy";
import VirtualKeyboard from "../../imports/VirtualKeyboard/VirtualKeyboard";
import Inicio from "../../imports/Inicio/Inicio";
import Frame19557 from "../../imports/Frame19557/Frame19557";
import Frame19591 from "../../imports/Frame19591/index";
import SangriaFlow from "./SangriaFlow";
import Home4 from "../../imports/Home-4/index";
import Home6 from "../../imports/Home-6/index";
import ValorRetiradaScreen from "./ValorRetiradaScreen";
import ComprovanteScreen from "./ComprovanteScreen";
import imgEntradaSaida from "../../imports/ManutencaoDeLojas/3e23023c5cc358b98b16c368222d6ca0d31df01c.png";
import imgConsultaProduto from "../../imports/ManutencaoDeLojas/6566e1aba8cfe14364d9bb9f0c3fa7712c053726.png";

interface FuncionalidadeContent {
  titulo: string;
  conteudo: string;
  hasPDV?: boolean;
}

const funcionalidadesContent: Record<string, FuncionalidadeContent> = {
  "sangria-de-caixa": {
    titulo: "Sangria de caixa",
    conteudo: "A sangria de caixa é um procedimento de segurança que consiste na retirada do excesso de dinheiro (notas físicas) do caixa durante o expediente. Este processo visa reduzir riscos de assaltos e garantir que o caixa mantenha apenas o valor necessário para o troco das operações diárias.",
    hasPDV: true
  },
  "entrada-saida-operador": {
    titulo: "Entrada/Saída de Operador",
    conteudo: "O processo de Entrada e Saída de Operador é fundamental para o controle e rastreabilidade das operações no sistema. Permite identificar qual operador está utilizando cada terminal e registrar horários de início e término de turnos."
  },
  "consulta-produto-offline": {
    titulo: "Consulta de Produto Offline",
    conteudo: "A funcionalidade de Consulta de Produto Offline permite que os operadores visualizem informações de produtos mesmo quando o sistema está sem conexão com o servidor central. Isso garante a continuidade das operações e melhor atendimento aos clientes."
  },
  "pausa-sistema": {
    titulo: "Pausa do Sistema",
    conteudo: "A Pausa do Sistema permite interromper temporariamente as operações do PDV para realizar manutenções, contagens de caixa ou resolver situações específicas sem encerrar completamente o sistema. É importante para a gestão eficiente do ponto de venda."
  }
};

// Sugestões exibidas na tela de conclusão (estilo "próximos vídeos")
const proximosTreinamentos = [
  {
    slug: "entrada-saida-operador",
    titulo: "Entrada/Saída de Operador",
    descricao: "Controle e rastreabilidade das operações: registre o início e o fim de cada turno no terminal.",
    imagem: imgEntradaSaida,
  },
  {
    slug: "consulta-produto-offline",
    titulo: "Consulta de Produto Offline",
    descricao: "Consulte informações de produtos mesmo sem conexão com o servidor central.",
    imagem: imgConsultaProduto,
  },
];

function Frame5() {
  return (
    <div className="h-[34px] w-[80px]">
      <Frame19675 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full border-b border-gray-100">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[20px]">
          <div className="grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-6 flex items-center">
              <Frame5 />
            </div>
            <div className="col-span-6 flex items-center justify-end">
              <ProfileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4({ titulo }: { titulo: string }) {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#383838] text-[31.248px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">{titulo}</p>
      </div>
    </div>
  );
}

function ContentHeader({ titulo, onBack }: { titulo: string; onBack: () => void }) {
  return (
    <div className="bg-white relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[20px]">
          <div className="grid grid-cols-12 gap-[32px] items-center">
            <div className="col-span-3 flex items-center">
              <button
                onClick={onBack}
                className="bg-[rgba(255,255,255,0.1)] flex gap-[8px] items-center justify-center min-h-[36px] px-[16px] py-[8px] rounded-[8px] hover:bg-gray-50 transition-colors cursor-pointer"
                data-name="Button"
              >
                <div aria-hidden="true" className="absolute border border-[#d4d4d4] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
                <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
                  <div className="absolute inset-[30.21%_5.21%]" data-name="Vector">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3333 6.33326">
                      <g id="Vector">
                        <path d={svgPaths.p2939f080} fill="#0A0A0A" />
                        <path d={svgPaths.p2b6dff40} fill="#0A0A0A" />
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="[word-break:break-word] flex flex-col font-['Geist:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#0a0a0a] text-[14px] text-center whitespace-nowrap">
                  <p className="leading-[20px]">Voltar</p>
                </div>
              </button>
            </div>
            <div className="col-span-6 flex items-center justify-center">
              <Frame4 titulo={titulo} />
            </div>
            <div className="col-span-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PDVSimulator() {
  const navigate = useNavigate();
  const [isTrainingMode, setIsTrainingMode] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [keyboardReady, setKeyboardReady] = useState(false);
  const [showTutorial, setShowTutorial] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(0);
  const [isFirstAccess, setIsFirstAccess] = useState(true);
  const [cpf, setCpf] = useState("");
  const [sku, setSku] = useState("");
  const [items, setItems] = useState<Array<{ sku: string; name: string; qty: number; price: number }>>([]);
  const [subtotal, setSubtotal] = useState(0);
  const [activeInput, setActiveInput] = useState<"cpf" | "sku" | null>(null);
  const [valorRetirada, setValorRetirada] = useState(0);
  const cpfInputRef = useRef<HTMLInputElement>(null);
  const skuInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioBlobUrl = useRef<string | null>(null);

  const isWelcomeStep = showTutorial && tutorialStep === 0;

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}boas-vindas.mp3`)
      .then(r => r.blob())
      .then(blob => { audioBlobUrl.current = URL.createObjectURL(blob); })
      .catch(() => {});
    return () => {
      if (audioBlobUrl.current) URL.revokeObjectURL(audioBlobUrl.current);
    };
  }, []);

  const stopAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
  };

  const exitTraining = () => {
    stopAudio();
    setShowKeyboard(false);
    setShowTutorial(false);
    setTutorialStep(0);
    setIsTrainingMode(false);
    setIsFirstAccess(true);
  };

  const goToTraining = (slug: string) => {
    exitTraining();
    navigate(`/funcionalidade/${slug}`);
  };

  const playWelcomeAudio = () => {
    stopAudio();
    const src = audioBlobUrl.current ?? `${import.meta.env.BASE_URL}boas-vindas.mp3`;
    const audio = new Audio(src);
    audioRef.current = audio;
    audio.play().catch(() => {});
  };

  const handleKeyPress = (key: string) => {
    if (tutorialStep === 7) {
      if (key === "ENTRA" || key === "Enter") {
        if (valorRetirada === 100000) { setTutorialStep(8); setShowKeyboard(false); setValorRetirada(0); }
      } else if (key === "LIMPA") {
        setValorRetirada(0);
      } else if (key === "VOLTA") {
        setValorRetirada(prev => Math.floor(prev / 10));
      } else if (!isNaN(Number(key)) || key === "00") {
        setValorRetirada(prev => Math.min(key === "00" ? prev * 100 : prev * 10 + Number(key), 99999999));
      }
      return;
    }
    if (activeInput === "cpf") {
      if (key === "ENTRA" || key === "Enter") {
        skuInputRef.current?.focus();
        setActiveInput("sku");
      } else if (key === "LIMPA") {
        setCpf("");
      } else if (key === "VOLTA") {
        setCpf(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) || key === "00") {
        setCpf(prev => prev + key);
      }
    } else if (activeInput === "sku") {
      if (key === "ENTRA" || key === "Enter") {
        handleAddProduct();
      } else if (key === "LIMPA") {
        setSku("");
      } else if (key === "VOLTA") {
        setSku(prev => prev.slice(0, -1));
      } else if (!isNaN(Number(key)) || key === "00") {
        setSku(prev => prev + key);
      }
    }
  };

  const handleAddProduct = (e?: React.KeyboardEvent<HTMLInputElement>) => {
    if (e && e.key !== "Enter") return;

    if (sku.trim()) {
      const mockProducts: Record<string, { name: string; price: number }> = {
        "7891234567890": { name: "Café Pilão 500g", price: 15.90 },
        "7898765432109": { name: "Arroz Tio João 1kg", price: 8.50 },
        "7896543210987": { name: "Feijão Camil 1kg", price: 9.30 },
        "7891111222333": { name: "Açúcar União 1kg", price: 4.20 },
        "7894444555666": { name: "Óleo Liza 900ml", price: 7.80 },
      };

      const product = mockProducts[sku] || { name: `Produto ${sku}`, price: 10.00 };

      const existingItem = items.find(item => item.sku === sku);
      if (existingItem) {
        const updatedItems = items.map(item =>
          item.sku === sku ? { ...item, qty: item.qty + 1 } : item
        );
        setItems(updatedItems);
        setSubtotal(updatedItems.reduce((sum, item) => sum + item.price * item.qty, 0));
      } else {
        const newItems = [...items, { sku, name: product.name, qty: 1, price: product.price }];
        setItems(newItems);
        setSubtotal(newItems.reduce((sum, item) => sum + item.price * item.qty, 0));
      }

      setSku("");
    }
  };

  useEffect(() => {
    if (isTrainingMode) {
      // Pequeno delay para preparar o teclado sem animação
      const timer = setTimeout(() => {
        setKeyboardReady(true);
      }, 50);

      const handleKeyboard = (e: KeyboardEvent) => {
        e.preventDefault();
        const key = e.key;
        if (key === "Enter") {
          handleKeyPress("ENTRA");
        } else if (key === "Backspace") {
          handleKeyPress("VOLTA");
        } else if (key === "Delete") {
          handleKeyPress("LIMPA");
        } else if (!isNaN(Number(key))) {
          handleKeyPress(key);
        }
      };

      window.addEventListener("keydown", handleKeyboard);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("keydown", handleKeyboard);
      };
    } else {
      setKeyboardReady(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTrainingMode]);

  const pdvContent = (
    <div className={`bg-white relative flex flex-col ${isTrainingMode ? "w-[1280px] h-[800px] overflow-y-auto" : "w-full max-w-[1280px] mx-auto overflow-hidden"} rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] border border-[#d4d4d4]`}>
      {/* Header */}
      <div className="bg-white flex items-center justify-between p-[20px] border-b border-[#bdbdbd]">
        <div className="h-[40px] w-[160px] relative">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 40">
            <g>
              <path d={pdvSvgPaths.p1b273200} fill="#ED403D" />
              <path d={pdvSvgPaths.p30032100} fill="#ED403D" />
              <path d={pdvSvgPaths.p31a81900} fill="#61BAE8" />
              <path d={pdvSvgPaths.p29d58b00} fill="white" />
            </g>
          </svg>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
          <div className="size-[9px]">
            <svg className="block size-full" fill="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
            </svg>
          </div>
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[16px] text-[#787878]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            PDV 57* Loja 0573
          </p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
          <div className="size-[9px]">
            <svg className="block size-full" fill="none" viewBox="0 0 9 9">
              <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
            </svg>
          </div>
          <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[16px] text-[#787878]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            Caixa Disponível
          </p>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[16px] items-center px-[18px] py-[12px]">
          <div className="overflow-clip relative size-[40px]">
            <div className="absolute bg-[#f5f5f5] left-0 rounded-full size-[40px] top-0" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-['Geist:Semibold',sans-serif] text-[#0a0a0a] text-[14px]">
              <p>JS</p>
            </div>
          </div>
          <div className="flex flex-col gap-[3px] text-[#404040]">
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              João Silva
            </p>
            <p className="font-['Nunito_Sans:Regular',sans-serif] text-[12.8px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Operador • Mat. 12345
            </p>
          </div>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[12px]">
          {/* Scanner */}
          <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
            <div className="size-[9px]">
              <svg className="block size-full" fill="none" viewBox="0 0 9 9">
                <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
              </svg>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[9.38%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                  <g>
                    <path d={peripheralSvgPaths.p1228b80} fill="#525252" />
                    <path d={peripheralSvgPaths.p1e471e00} fill="#525252" />
                    <path d={peripheralSvgPaths.pe868500} fill="#525252" />
                    <path d={peripheralSvgPaths.p1afc9570} fill="#525252" />
                    <path d={peripheralSvgPaths.p28515c40} fill="#525252" />
                    <path d={peripheralSvgPaths.p996db00} fill="#525252" />
                    <path d={peripheralSvgPaths.p3bf0d700} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Calculator */}
          <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
            <div className="size-[9px]">
              <svg className="block size-full" fill="none" viewBox="0 0 9 9">
                <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
              </svg>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%_13.54%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
                  <g>
                    <path d={peripheralSvgPaths.p263daa00} fill="#525252" />
                    <path d={peripheralSvgPaths.p10ed4b60} fill="#525252" />
                    <path d={peripheralSvgPaths.p4c65000} fill="#525252" />
                    <path d={peripheralSvgPaths.pe6ca000} fill="#525252" />
                    <path d={peripheralSvgPaths.p3da52900} fill="#525252" />
                    <path d={peripheralSvgPaths.p2d332800} fill="#525252" />
                    <path d={peripheralSvgPaths.p3bf9b400} fill="#525252" />
                    <path d={peripheralSvgPaths.pa671400} fill="#525252" />
                    <path d={peripheralSvgPaths.p6e954c0} fill="#525252" />
                    <path d={peripheralSvgPaths.p2594ff00} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          {/* Printer */}
          <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
            <div className="size-[9px]">
              <svg className="block size-full" fill="none" viewBox="0 0 9 9">
                <circle cx="4.5" cy="4.5" fill="#06AC73" r="4.5" />
              </svg>
            </div>
            <div className="overflow-clip relative shrink-0 size-[24px]">
              <div className="absolute inset-[5.21%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5 21.5">
                  <g>
                    <path d={peripheralSvgPaths.p2b0c6000} fill="#525252" />
                    <path d={peripheralSvgPaths.p1f60300} fill="#525252" />
                    <path d={peripheralSvgPaths.p3c19300} fill="#525252" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[32px] w-px bg-[#B9B9B9]" />
        <div className="flex gap-[8px] items-center px-[8px] py-[6px] rounded-[8px]">
          <div className="overflow-clip relative shrink-0 size-[24px]">
            <div className="absolute inset-[5.21%_21.88%_5.33%_21.88%]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5 21.4708">
                <g>
                  <path d={pdvSvgPaths.p1ffceb00} fill="#525252" />
                  <path d={pdvSvgPaths.pd91bf00} fill="#525252" />
                  <path d={pdvSvgPaths.p3ef72a00} fill="#525252" />
                  <path d={pdvSvgPaths.p11d84000} fill="#525252" />
                </g>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-[2px] text-[#404040]">
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[16px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              31/MAR/26
            </p>
            <p className="font-['Nunito_Sans:Regular',sans-serif] text-[12.8px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              10:17:03
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1">
        {/* Left Panel - Customer and Products */}
        <div className="flex flex-col w-[774px]">
          {/* Customer Identification */}
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[9.38%_13.54%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 19.5">
                    <g>
                      <path d={pdvSvgPaths.p26801f80} fill="#1FA49D" />
                      <path d={pdvSvgPaths.p7259480} fill="#1FA49D" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Identificação do Cliente
              </p>
            </div>

            <div className="bg-[#f5f5f5] flex rounded-[12px]">
              <div className="bg-[#2258e6] flex gap-[8px] items-center justify-center px-[32px] py-[16px] rounded-[10px] w-[256px] shadow-sm">
                <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-white">Com identificação</p>
              </div>
              <div className="flex gap-[8px] items-center justify-center px-[32px] py-[14px] w-[256px]">
                <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#0a0a0a]">Sem Identificação</p>
              </div>
            </div>

            <div className="flex gap-[8px] w-full">
              <input
                ref={cpfInputRef}
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                onFocus={() => setActiveInput("cpf")}
                placeholder="|Digite o CPF do cliente ou aperte [Volta] para seguir sem identificação"
                className="flex-1 bg-white h-[48px] rounded-[8px] px-[16px] border border-[#a3a3a3] shadow-[0px_0px_0px_3px_#d4d4d4] font-['Geist:Regular',sans-serif] text-[14px] text-[#787878] focus:outline-none focus:border-[#2258e6]"
              />
              <button className="bg-[#171717] opacity-50 flex gap-[8px] items-center justify-center px-[24px] py-[10px] h-[48px] rounded-[8px]">
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[9.38%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.9999 12.9999">
                      <g>
                        <path d={pdvSvgPaths.p236d3680} fill="white" />
                        <path d={pdvSvgPaths.p21e32300} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
                <p className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-[#fafafa]">Buscar</p>
                <div className="overflow-clip relative shrink-0 size-[16px]">
                  <div className="absolute inset-[9.38%]">
                    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                      <g>
                        <path d={pdvSvgPaths.p2010def2} fill="white" />
                        <path d={pdvSvgPaths.p2ef5a800} fill="white" />
                        <path d={pdvSvgPaths.p1d703980} fill="white" />
                      </g>
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          {/* Product Entry */}
          <div className="bg-white p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[9.38%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 19.5">
                    <g>
                      <path d={pdvSvgPaths.pd3fd780} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p1f208980} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p17088a00} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p83baa80} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p1db75000} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p37e4d1b0} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p2d7097f0} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p394bdd00} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p1c6b6b00} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p19176d00} fill="#61BAE8" />
                      <path d={pdvSvgPaths.pbe69f00} fill="#61BAE8" />
                      <path d={pdvSvgPaths.p1b8a3100} fill="#61BAE8" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Entrada de Produtos
              </p>
            </div>

            <input
              ref={skuInputRef}
              type="text"
              value={sku}
              onChange={(e) => setSku(e.target.value)}
              onKeyDown={handleAddProduct}
              onFocus={() => setActiveInput("sku")}
              placeholder="SKU do produto - Escaneie o código do produto ou digite"
              className="bg-white h-[56px] rounded-[8px] px-[16px] border border-[#a3a3a3] shadow-[0px_0px_0px_3px_#d4d4d4] font-['Geist:Regular',sans-serif] text-[14px] text-[#0a0a0a] focus:outline-none focus:border-[#2258e6]"
            />
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          {/* Items List */}
          <div className="bg-[#f6f6f6] p-[20px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[5.42%_4.83%_5.21%_5.42%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5402 21.45">
                    <g>
                      <path d={pdvSvgPaths.p3e4f570} fill="#696969" />
                      <path d={pdvSvgPaths.p18f47b00} fill="#696969" />
                      <path d={pdvSvgPaths.p2b91c580} fill="#696969" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Itens da Venda
              </p>
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          {/* Items Display */}
          <div className="bg-white flex-1 min-h-[200px]">
            {items.length === 0 ? (
              <div className="flex items-center justify-center h-full p-[20px]">
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Nenhum produto adicionado
                </p>
              </div>
            ) : (
              <div className="p-[20px]">
                <div className="space-y-[12px]">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-[12px] bg-[#f6f6f6] rounded-[8px]">
                      <div className="flex-1">
                        <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[14px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          {item.name}
                        </p>
                        <p className="font-['Nunito_Sans:Regular',sans-serif] text-[12px] text-[#787878]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          SKU: {item.sku}
                        </p>
                      </div>
                      <div className="flex gap-[16px] items-center">
                        <p className="font-['Nunito_Sans:Regular',sans-serif] text-[14px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          Qtd: {item.qty}
                        </p>
                        <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                          R$ {(item.price * item.qty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-px bg-[#bdbdbd]" />

        {/* Right Panel - Summary */}
        <div className="flex flex-col w-[500px]">
          <div className="bg-[#f6f6f6] p-[20px] flex flex-col gap-[16px]">
            <div className="flex gap-[12px] items-center">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[5.21%_13.54%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.5">
                    <g>
                      <path d={pdvSvgPaths.p2875e500} fill="#7B629F" />
                      <path d={pdvSvgPaths.p1f6535f0} fill="#7B629F" />
                      <path d={pdvSvgPaths.p3ca17d80} fill="#7B629F" />
                      <path d={pdvSvgPaths.p19ffb080} fill="#7B629F" />
                      <path d={pdvSvgPaths.pb765700} fill="#7B629F" />
                      <path d={pdvSvgPaths.p4cc0440} fill="#7B629F" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Resumo da Venda
              </p>
            </div>

            <div className="flex justify-between">
              <p className="font-['Nunito_Sans:Regular',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Subtotal:
              </p>
              <p className="font-['Nunito_Sans:Regular',sans-serif] text-[16px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                R$ {subtotal.toFixed(2)}
              </p>
            </div>

            <div className="h-px bg-[#bdbdbd]" />

            <div className="flex justify-between">
              <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Total:
              </p>
              <p className="font-['Nunito_Sans:ExtraBold',sans-serif] font-extrabold text-[20px] text-[#404040]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                R$ {subtotal.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="h-px bg-[#bdbdbd]" />

          <div className="flex flex-col items-center justify-center py-[15px]">
            <button className="bg-[#2258e6] flex gap-[8px] items-center justify-center px-[24px] py-[10px] h-[53px] rounded-[8px] w-[460px] hover:bg-[#1a47b8] transition-colors">
              <div className="overflow-clip relative shrink-0 size-[24px]">
                <div className="absolute inset-[5.21%_13.54%]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 21.4997">
                    <g>
                      <path d={pdvSvgPaths.p3851fa80} fill="white" />
                      <path d={pdvSvgPaths.p25478480} fill="white" />
                      <path d={pdvSvgPaths.pae5ba00} fill="white" />
                      <path d={pdvSvgPaths.p8335080} fill="white" />
                    </g>
                  </svg>
                </div>
              </div>
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-[#fafafa]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Totalizar Venda
              </p>
              <div className="bg-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[16px] text-[#fafafa]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  SUB TOTAL
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Footer na base do PDV */}
      <div className={`transition-all duration-500 ${isTrainingMode && tutorialStep === 1 ? 'relative z-10 ring-2 ring-[#F59E0B] shadow-[0_0_24px_4px_rgba(245,158,11,0.35)]' : ''}`}>
        {isTrainingMode && tutorialStep === 1 && (
          <div className="fade-in-delay absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-[560px] pointer-events-none">
            <div className="bg-[#111] text-white text-[13px] font-['Nunito_Sans',sans-serif] leading-[1.6] px-[20px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              Quando o valor em caixa atingir o limite configurado para a unidade, o PDV exibirá um aviso discreto ao operador solicitando a realização da Sangria de Caixa. A mensagem foi projetada para informar a necessidade da operação sem evidenciar que o caixa está com elevado volume de numerário.
            </div>
            {/* Triângulo apontando para baixo */}
            <div className="flex justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#111]" />
            </div>
          </div>
        )}
        <Frame19557 />
      </div>

      {/* Fluxo animado de Sangria (telas do gerente) */}
      {isTrainingMode && tutorialStep >= 4 && tutorialStep <= 5 && (
        <SangriaFlow onReachSelection={() => setTutorialStep(5)} />
      )}

      {/* Motivos Sangria - step 6 */}
      {isTrainingMode && tutorialStep === 6 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <Home4 />
          {/* Faixa explicativa - posicionada abaixo da tabela */}
          <div className="fade-in-delay absolute bottom-[112px] left-0 right-0 px-[32px]">
            <div className="bg-[rgba(15,15,15,0.88)] flex gap-[20px] items-center px-[28px] py-[18px] rounded-[10px] w-full border border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.4)]" style={{ backdropFilter: 'blur(8px)' }}>
              <div className="shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <p className="font-['Nunito_Sans:Regular',sans-serif] text-[14px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Para realizar a sangria, o usuário pode selecionar o tipo de sangria que deseja executar. Nessa tela, a opção{" "}
                <span className="font-bold text-white">"Remessa Urna"</span> já aparece previamente selecionada, pois é o motivo mais utilizado nas sangrias de caixa.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Valor da Retirada - step 7 */}
      {(isTrainingMode && tutorialStep === 7) && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ValorRetiradaScreen valorCents={valorRetirada} />
        </div>
      )}

      {/* Comprovante / Encerramento - step 9 */}
      {isTrainingMode && tutorialStep === 9 && (
        <div className="absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
          <ComprovanteScreen valorCents={100000} saldoAnteriorCents={125000} />
        </div>
      )}

      {/* Overlay de dimming para destacar o footer */}
      {isTrainingMode && tutorialStep === 1 && (
        <div className="absolute inset-0 bottom-[42px] bg-white/70 rounded-t-[20px] z-[5] pointer-events-none" />
      )}

      {/* Modal Sangria / Suprimento */}
      {isTrainingMode && tutorialStep === 3 && (
        <>
          {/* Backdrop escuro com blur */}
          <div className="fade-in-delay absolute inset-0 bg-black/50 backdrop-blur-sm rounded-[20px] z-[20]" />

          {/* Tooltip acima do modal */}
          <div className="fade-in-delay absolute bottom-[220px] left-1/2 -translate-x-1/2 w-[700px] z-[35] pointer-events-none">
            <div className="bg-[#111] text-white text-[13px] font-['Nunito_Sans',sans-serif] leading-[1.6] px-[20px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
              Será exibido um modal informando que a realização da Sangria de Caixa requer autorização do gerente. Para prosseguir com a operação, pressione a tecla <span className="font-bold">[Entra]</span>, confirmando que está ciente dessa exigência e concordando em solicitar a autorização necessária.
            </div>
            <div className="flex justify-center">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#111]" />
            </div>
          </div>

          {/* Modal bottom sheet */}
          <div
            className="fade-in-delay absolute bottom-0 left-0 right-0 z-[30] rounded-tl-[24px] rounded-tr-[24px] overflow-hidden shadow-[0_-8px_40px_rgba(0,0,0,0.25)]"
            onClick={(e) => {
              const text = (e.target as HTMLElement).closest('[data-name="Button"]')?.querySelector('p')?.textContent?.trim();
              if (text === "Volta") setTutorialStep(2);
            }}
          >
            <Frame19591 />
          </div>
        </>
      )}
    </div>
  );

  if (!isTrainingMode) {
    return (
      <div className="relative">
        {pdvContent}

        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-[20px] cursor-pointer group hover:bg-black/70 transition-colors" onClick={() => {
          setShowKeyboard(false);
          setTutorialStep(0);
          setIsTrainingMode(true);
          playWelcomeAudio();
          // Mostrar tutorial com delay para o fade-in
          setTimeout(() => {
            setShowTutorial(true);
          }, 300);
        }}>
          <div className="flex flex-col items-center gap-[16px]">
            <div className="w-[80px] h-[80px] bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
              <svg className="w-[32px] h-[32px] ml-[4px]" viewBox="0 0 24 24" fill="none">
                <path d="M8 5v14l11-7L8 5z" fill="#2258e6" />
              </svg>
            </div>
            <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Iniciar Treinamento
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">


      {/* Close Button */}
      <button
        onClick={exitTraining}
        className="absolute top-[20px] right-[20px] w-[48px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group z-[60]"
      >
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18M6 6l12 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {/* PDV - Centralizado verticalmente */}
      <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">


        {pdvContent}

        {/* Banner Ação do Gerente - abaixo do PDV */}
        {tutorialStep === 4 && (
          <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[15px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Ação do Gerente
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[12px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Esta operação requer a presença e autenticação do gerente responsável pela loja.
                </p>
              </div>
              <div className="shrink-0 ml-auto flex items-center gap-[7px] rounded-full px-[14px] py-[7px] bg-white/10 border border-white/20">
                <div className="w-[6px] h-[6px] rounded-full bg-white animate-pulse" />
                <span className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[11px] text-white uppercase tracking-widest">Aguardando</span>
              </div>
            </div>
          </div>
        )}

        {/* Tutorial Box - Positioned at bottom of PDV */}
        <div className={`absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20 transition-opacity duration-700 ease-in-out ${showTutorial ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <Inicio onNext={() => { stopAudio(); setTutorialStep(1); setShowTutorial(false); }} />
        </div>

        {/* Step 2 - Informativo Sangria */}
        {tutorialStep === 2 && (
          <div className="fade-in-delay absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1280px] z-20">
            <div className="bg-[rgba(0,0,0,0.8)] flex gap-[24px] items-center px-[32px] py-[32px] pb-[120px] rounded-[8px] w-full">
              {/* Ícone */}
              <div className="flex items-start pt-[4px] shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              {/* Texto */}
              <div className="flex flex-col gap-[8px] flex-1">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[20px] text-white" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Iniciando a Sangria de Caixa
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[16px] text-[rgba(255,255,255,0.8)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Para iniciar o processo de Sangria de Caixa, pressione a tecla de Sangria no teclado do PDV, correspondente à tecla <span className="font-bold text-white">[V] Sangria</span>.
                </p>
              </div>
              {/* Botão Sangria ilustração */}
              <div className="bg-[#2258e6] flex flex-col justify-between h-[123px] items-start p-[10px] relative rounded-[8px] w-[142px] shrink-0">
                <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-col items-start w-full gap-[4px]">
                  <div className="font-['Chivo_Mono:Medium',sans-serif] font-medium text-[14px] text-white leading-[16px]">V</div>
                  <div className="flex items-center justify-center w-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 5v14M5 12l7-7 7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="font-['Geist:Bold',sans-serif] font-bold text-[16px] text-center text-white w-full leading-[16px]">SANGRIA</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 7 - Tooltip Valor da Retirada */}
        {tutorialStep === 7 && (
          <div className="fade-in-delay absolute pointer-events-none z-[45]" style={{ top: '185px', left: '128px', right: '128px' }}>
            <div className="bg-[rgba(15,15,15,0.92)] flex gap-[16px] items-start px-[24px] py-[16px] rounded-[10px] shadow-[0_8px_32px_rgba(0,0,0,0.5)] border border-white/8 border-b-0" style={{ backdropFilter: 'blur(10px)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-[2px]">
                <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
                <path d="M12 8v4M12 16h.01" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <p className="font-['Nunito_Sans:Regular',sans-serif] text-[13px] text-[rgba(255,255,255,0.75)] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Informe o valor que será retirado. Neste exemplo, será realizada uma sangria no valor de{" "}
                <span className="font-bold text-white">R$ 1.000,00</span>. Digite utilizando o teclado virtual e pressione{" "}
                <span className="font-bold text-white">[Entra]</span> para continuar.
              </p>
            </div>
            {/* Triângulo apontando para baixo (em direção ao input) */}
            <div className="flex justify-center mt-0">
              <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[rgba(15,15,15,0.92)]" />
            </div>
          </div>
        )}

        {/* Step 8 - Gaveta Aberta / Retirada */}
        {tutorialStep === 8 && (
          <>
            <div className="fade-in-delay absolute inset-0 z-[40] rounded-[20px] overflow-hidden">
              <Home6 />
            </div>
            <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px] flex-1">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[15px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Gaveta Aberta
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[12px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Nesta etapa, a gaveta do caixa ser&aacute; aberta. Retire o valor indicado e, para prosseguir, feche a gaveta.
                </p>
              </div>
              <button
                onClick={() => setTutorialStep(9)}
                className="shrink-0 flex items-center gap-[8px] px-[20px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer border border-white/20"
                style={{
                  boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)',
                  animation: 'pulse-subtle 2s ease-in-out infinite'
                }}
              >
                <svg className="w-[20px] h-[20px]" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[13px] text-white uppercase tracking-widest whitespace-nowrap">Fechar Gaveta</span>
              </button>
            </div>
          </div>
        </>)}

        {/* Banner de conclusão - step 9 (comprovante) */}
        {tutorialStep === 9 && (
          <div className="fade-in-delay absolute top-[calc(100%+16px)] left-0 right-0 z-[50]">
            <div className="relative flex items-center gap-[24px] w-full px-[32px] py-[20px] rounded-[14px] overflow-hidden border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)' }}>
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-white/60 rounded-l-[14px]" />
              <div className="shrink-0 flex items-center justify-center w-[44px] h-[44px] rounded-full ml-[8px] bg-white/10 border border-white/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[2px]">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[15px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Parabéns!
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[12px] text-white/60 leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  A sangria de caixa foi realizada e concluída com sucesso.
                </p>
              </div>
            </div>
          </div>
        )}


        {/* Navegação do tutorial - plataforma de treinamentos */}
        <div className={`absolute ${tutorialStep === 8 || tutorialStep === 9 ? 'bottom-[-160px]' : 'bottom-[-56px]'} left-0 right-0 z-30 flex justify-between transition-opacity duration-700 ease-in-out ${(showTutorial || tutorialStep > 0) && tutorialStep !== 4 && tutorialStep !== 10 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Botão Anterior */}
          <button
            onClick={() => {
              if (tutorialStep === 2) setTutorialStep(1);
              else if (tutorialStep === 3) { setTutorialStep(2); setShowKeyboard(false); }
              else if (tutorialStep === 5) setTutorialStep(3);
              else if (tutorialStep === 6) setTutorialStep(5);
              else if (tutorialStep === 7) { setTutorialStep(6); setValorRetirada(0); }
              else if (tutorialStep === 8) setTutorialStep(7);
              else if (tutorialStep === 9) setTutorialStep(8);
              else { setTutorialStep(0); setShowTutorial(true); playWelcomeAudio(); }
            }}
            className={`flex items-center gap-[8px] px-[20px] h-[44px] bg-white/15 hover:bg-white/25 border border-white/20 text-white/80 hover:text-white rounded-[8px] transition-all ${tutorialStep === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-['Nunito_Sans',sans-serif] text-[14px] font-semibold tracking-wide">Anterior</span>
          </button>

          {/* Botão Próximo - steps 0, 1 e 9 */}
          <button
            onClick={() => {
              if (showTutorial) { stopAudio(); setTutorialStep(1); setShowTutorial(false); }
              else if (tutorialStep === 1) setTutorialStep(2);
              else if (tutorialStep === 9) setTutorialStep(10);
            }}
            className={`flex items-center gap-[8px] px-[20px] h-[44px] bg-white/15 hover:bg-white/25 border border-white/20 text-white/80 hover:text-white rounded-[8px] transition-all ${(showTutorial || tutorialStep === 1 || tutorialStep === 9) ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <span className="font-['Nunito_Sans',sans-serif] text-[14px] font-semibold tracking-wide">Próximo</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Toggle Keyboard Button - Fixo na parte inferior */}
      <button
        onClick={() => {
          setShowKeyboard(!showKeyboard);
          if (isFirstAccess) {
            setIsFirstAccess(false);
          }
        }}
        className={`absolute bottom-[60px] left-1/2 -translate-x-1/2 px-[20px] h-[48px] bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center gap-[8px] transition-all group z-[30] ${
          isFirstAccess || (tutorialStep === 3 && !showKeyboard) || (tutorialStep === 5 && !showKeyboard) || (tutorialStep === 6 && !showKeyboard) || (tutorialStep === 7 && !showKeyboard) ? 'animate-pulse-subtle' : ''
        } ${tutorialStep <= 1 || tutorialStep === 4 || tutorialStep === 8 || tutorialStep === 9 || tutorialStep === 10 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={isFirstAccess || (tutorialStep === 3 && !showKeyboard) || (tutorialStep === 5 && !showKeyboard) || (tutorialStep === 6 && !showKeyboard) || (tutorialStep === 7 && !showKeyboard) ? {
          boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.4)',
          animation: 'pulse-subtle 2s ease-in-out infinite'
        } : {}}
      >
        <svg className="w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="white" strokeWidth="2" />
          <line x1="6" y1="10" x2="8" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="10" x2="12" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="14" y1="10" x2="16" y2="10" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="6" y1="14" x2="8" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="10" y1="14" x2="16" y2="14" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="font-['Geist:Medium',sans-serif] font-medium text-[14px] text-white">
          {showKeyboard ? "Ocultar Teclado" : "Exibir Teclado"}
        </span>
      </button>

      <style>{`
        @keyframes pulse-subtle {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(255, 255, 255, 0);
          }
        }
        .fade-in-delay {
          animation: fade-in-delay 2s ease-in-out forwards;
        }
        @keyframes fade-in-delay {
          0% { opacity: 0; }
          70% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>

      {/* Virtual Keyboard - Posicionado embaixo com animação */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 z-20 transform scale-[0.5] ${
          keyboardReady ? "transition-all duration-500 ease-in-out" : ""
        } ${
          showKeyboard ? "bottom-[-40px]" : "bottom-[-600px]"
        }`}
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const buttonText = target.textContent?.trim();

          if (tutorialStep === 2 && buttonText === "SANGRIA") {
            setTutorialStep(3);
            setShowKeyboard(false);
            return;
          }
          if ((tutorialStep === 3 || tutorialStep === 6) && buttonText === "ENTRA") {
            setTutorialStep(tutorialStep === 3 ? 4 : 7);
            setShowKeyboard(false);
            return;
          }
          if (tutorialStep === 5 && buttonText === "1") {
            setTutorialStep(6);
            setShowKeyboard(false);
            return;
          }
          if (tutorialStep === 7) {
            if (buttonText === "LIMPA") { setValorRetirada(0); return; }
            if (buttonText === "VOLTA") { setValorRetirada(prev => Math.floor(prev / 10)); return; }
            if (buttonText === "ENTRA") {
              if (valorRetirada === 100000) { setTutorialStep(8); setShowKeyboard(false); setValorRetirada(0); }
              return;
            }
            if (buttonText === "00") { setValorRetirada(prev => Math.min(prev * 100, 99999999)); return; }
            if (buttonText && !isNaN(Number(buttonText))) {
              setValorRetirada(prev => Math.min(prev * 10 + Number(buttonText), 99999999));
              return;
            }
          }
          if (buttonText && ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "00"].includes(buttonText)) {
            handleKeyPress(buttonText);
          } else if (buttonText === "ENTRA") {
            handleKeyPress("ENTRA");
          } else if (buttonText === "LIMPA") {
            handleKeyPress("LIMPA");
          } else if (buttonText === "VOLTA") {
            handleKeyPress("VOLTA");
          }
        }}
      >
        <VirtualKeyboard
          highlightSangria={tutorialStep === 2}
          onSangriaPress={tutorialStep === 2 ? () => { setTutorialStep(3); setShowKeyboard(false); } : undefined}
          highlightEntra={tutorialStep === 3 || tutorialStep === 6 || (tutorialStep === 7 && valorRetirada === 100000)}
          onEntraPress={(tutorialStep === 3 || tutorialStep === 6 || (tutorialStep === 7 && valorRetirada === 100000)) ? () => {
            if (tutorialStep === 3) { setTutorialStep(4); setShowKeyboard(false); }
            else if (tutorialStep === 6) { setTutorialStep(7); setShowKeyboard(false); }
            else if (tutorialStep === 7 && valorRetirada === 100000) { setTutorialStep(8); setShowKeyboard(false); setValorRetirada(0); }
          } : undefined}
          highlightKey1={tutorialStep === 5 || (tutorialStep === 7 && valorRetirada === 0)}
          onKey1Press={tutorialStep === 5 ? () => { setTutorialStep(6); setShowKeyboard(false); } : undefined}
          highlightKey0={tutorialStep === 7 && valorRetirada > 0 && valorRetirada < 100000}
          onKey0Press={undefined}
        />
      </div>

      {/* Step 10 - Conclusão do treinamento (estilo "fim de vídeo") */}
      {tutorialStep === 10 && (
        <div
          className="fade-in-delay absolute inset-0 z-[80] flex items-center justify-center p-[40px] pb-[110px] overflow-y-auto"
          style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(4px)' }}
        >
          <div className="flex flex-col items-center gap-[44px] max-w-[920px] w-full">
            {/* Cabeçalho - parabéns */}
            <div className="flex flex-col items-center gap-[20px] text-center">
              <div className="flex items-center justify-center w-[96px] h-[96px] rounded-full bg-[#06AC73]/15 border border-[#06AC73]/40">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#37d39b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-[12px] items-center">
                <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[40px] text-white leading-tight" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Treinamento concluído!
                </p>
                <p className="font-['Nunito_Sans:Regular',sans-serif] text-[18px] text-white/80 leading-relaxed max-w-[580px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                  Parabéns! Você concluiu o treinamento de <span className="font-bold text-white">Sangria de Caixa</span>. Agora você está pronto para realizar essa operação no PDV.
                </p>
              </div>
            </div>

            {/* Sugestões de próximos treinamentos */}
            <div className="w-full flex flex-col gap-[20px]">
              <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[18px] text-white/90 text-center" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                Continue aprendendo
              </p>
              <div className="grid grid-cols-2 gap-[24px]">
                {proximosTreinamentos.map((s) => (
                  <button
                    key={s.slug}
                    onClick={() => goToTraining(s.slug)}
                    className="group flex gap-[20px] items-center p-[16px] rounded-[14px] bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-left cursor-pointer"
                  >
                    <div className="relative w-[160px] h-[100px] rounded-[10px] overflow-hidden shrink-0">
                      <img src={s.imagem} alt="" className="absolute inset-0 size-full object-cover" />
                      <div className="absolute inset-0 bg-[rgba(51,50,67,0.45)] group-hover:bg-[rgba(51,50,67,0.3)] transition-colors" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-[44px] h-[44px] rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                          <svg className="w-[18px] h-[18px] ml-[3px]" viewBox="0 0 24 24" fill="none">
                            <path d="M8 5v14l11-7L8 5z" fill="#2258e6" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[6px] flex-1 min-w-0">
                      <p className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[17px] text-white leading-snug" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        {s.titulo}
                      </p>
                      <p className="font-['Nunito_Sans:Regular',sans-serif] text-[13px] text-white/60 leading-relaxed line-clamp-2" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
                        {s.descricao}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Botão Fechar - inferior centralizado, estilo plataforma */}
          <button
            onClick={exitTraining}
            className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex items-center gap-[8px] px-[20px] h-[44px] bg-white/15 hover:bg-white/25 border border-white/20 text-white/80 hover:text-white rounded-[8px] transition-all cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="font-['Nunito_Sans',sans-serif] text-[14px] font-semibold tracking-wide">Fechar</span>
          </button>
        </div>
      )}
    </div>
  );
}

function ContentBody({ conteudo, hasPDV }: { conteudo: string; hasPDV?: boolean }) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full" data-name="Table">
      <div className="w-full max-w-[1440px] mx-auto px-[96px] py-[48px]">
        <div className="prose max-w-none mb-[48px]">
          <p className="font-['Nunito_Sans:Regular',sans-serif] text-[16px] text-[#434343] leading-[1.6]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
            {conteudo}
          </p>
        </div>
        {hasPDV && (
          <div className="mt-[48px]">
            <h2 className="font-['Nunito_Sans:Bold',sans-serif] font-bold text-[24px] text-[#383838] mb-[24px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              Simulador PDV - Prática de Treinamento
            </h2>
            <PDVSimulator />
          </div>
        )}
      </div>
    </div>
  );
}

export default function FuncionalidadePage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();

  const handleBack = () => {
    navigate("/dashboard");
  };

  const content = slug ? funcionalidadesContent[slug] : null;

  if (!content) {
    navigate("/dashboard");
    return null;
  }

  return (
    <div className="bg-white content-stretch flex isolate items-center relative h-screen w-full" data-name="Funcionalidade">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px overflow-clip relative z-[1]">
        <Frame2 />
        <ContentHeader titulo={content.titulo} onBack={handleBack} />
        <ContentBody conteudo={content.conteudo} hasPDV={content.hasPDV} />
      </div>
    </div>
  );
}
