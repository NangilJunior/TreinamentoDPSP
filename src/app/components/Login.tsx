import { useState } from "react";
import { useNavigate } from "react-router";
import imgImage3 from "../../imports/Desktop1/5dad878508fbae62144168c791d21d1da82445a7.png";
import imgTreino1 from "../../imports/Desktop1/a6674fa2eff44835094f341db4e84915eee0d916.png";
import Frame19675 from "../../imports/Frame19675/Frame19675.tsx";

// SVG Paths for Login component
const svgPaths = {
  // Button icon paths
  p2010def2: "M9.25315 9.25315C9.44841 9.05789 9.76492 9.05789 9.96018 9.25315L12.8534 12.1464C13.0487 12.3416 13.0487 12.6581 12.8534 12.8534C12.6581 13.0487 12.3416 13.0487 12.1464 12.8534L9.25315 9.96018C9.05789 9.76492 9.05789 9.44841 9.25315 9.25315Z",
  p2ef5a800: "M10.6667 5.83333C10.6667 3.16396 8.50271 1 5.83333 1C3.16396 1 1 3.16396 1 5.83333C1 8.50271 3.16396 10.6667 5.83333 10.6667C8.50271 10.6667 10.6667 8.50271 10.6667 5.83333ZM11.6667 5.83333C11.6667 9.05499 9.05499 11.6667 5.83333 11.6667C2.61167 11.6667 0 9.05499 0 5.83333C0 2.61167 2.61167 0 5.83333 0C9.05499 0 11.6667 2.61167 11.6667 5.83333Z",
  p1d703980: "M5.83333 6.5C5.83333 6.13181 6.13181 5.83333 6.5 5.83333C6.86819 5.83333 7.16667 6.13181 7.16667 6.5V9.16667C7.16667 9.53486 6.86819 9.83333 6.5 9.83333C6.13181 9.83333 5.83333 9.53486 5.83333 9.16667V6.5Z",
};

function Frame15() {
  return (
    <div className="h-[817px] overflow-clip relative shrink-0 w-[646px]">
      <div className="absolute h-[804px] left-[-226px] top-[-2px] w-[1434px]" data-name="image 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute h-[851px] left-[-279px] top-0 w-[1276px]" data-name="treino 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgTreino1} />
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1163px] left-1/2 top-1/2 w-[936px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 936 1163\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(2.8657e-15 58.15 -46.8 3.5607e-15 468 581.5)\\'><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(29,29,29,0.5)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(58,58,58,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute flex items-center justify-center left-[427px] size-[607.405px] top-[5px]">
        <div className="-rotate-45 flex-none">
          <div className="border-4 border-solid border-white h-[287px] relative rounded-[1000px] w-[572px]" />
        </div>
      </div>
      <div className="absolute border-4 border-solid border-white h-[287px] left-[-145px] rounded-[1000px] top-[-185px] w-[572px]" />
      <div className="absolute flex h-[572px] items-center justify-center left-[-88px] top-[343px] w-[287px]">
        <div className="-rotate-90 flex-none">
          <div className="border-4 border-solid border-white h-[287px] relative rounded-[1000px] w-[572px]" />
        </div>
      </div>
      <div className="absolute border-4 border-solid border-white h-[287px] left-[-123px] rounded-[1000px] top-[723px] w-[721px]" />
      <div className="absolute flex h-[287px] items-center justify-center left-[-241px] top-[1402px] w-[572px]">
        <div className="flex-none rotate-180">
          <div className="border-4 border-solid border-white h-[287px] relative rounded-[1000px] w-[572px]" />
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[56px] w-[134px]">
      <Frame19675 />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center px-[20px] py-[32px] relative size-full">
          <Frame11 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#bdbdbd] h-px relative shrink-0 w-full">
      <div className="relative size-full" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative size-full">
        <Frame4 />
      </div>
    </div>
  );
}

interface LoginFormProps {
  matricula: string;
  senha: string;
  onMatriculaChange: (value: string) => void;
  onSenhaChange: (value: string) => void;
  onSubmit: () => void;
  isValid: boolean;
  error?: string;
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center">
      <div className="flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#383838] text-[31.248px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">Centro de Treinamentos</p>
      </div>
      <div className="flex flex-col font-['Nunito_Sans:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6c6c6c] text-[16px] w-[287px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">Entre com suas credenciais para acessar</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Matrícula
      </p>
    </div>
  );
}

function Frame18({ value, onChange, onKeyPress }: { value: string; onChange: (value: string) => void; onKeyPress?: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="content-stretch flex gap-[18px] items-start justify-center relative shrink-0 w-full">
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative self-stretch shrink-0 text-[20px] text-black text-center w-[9px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">F</p>
      </div>
      <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative self-stretch shrink-0 text-[20px] text-black text-center w-[9px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">-</p>
      </div>
      <div className="content-stretch flex flex-[1_0_0] h-[72px] items-start min-w-px relative">
        <div className="bg-white flex-[1_0_0] h-full min-h-[40px] min-w-px relative rounded-br-[8px] rounded-tr-[8px]" data-name="Input">
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[16px] py-[9.5px] relative size-full">
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={onKeyPress}
                className="flex-[1_0_0] min-w-px bg-transparent outline-none border-none font-['Geist:Regular',sans-serif] font-normal leading-[20px] text-[#0a0a0a] text-[14px]"
                placeholder=""
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#a3a3a3] border-solid inset-0 pointer-events-none rounded-br-[8px] rounded-tr-[8px] shadow-[0px_0px_0px_3px_#d4d4d4]" />
        </div>
      </div>
    </div>
  );
}

function Frame6({ value, onChange, onKeyPress }: { value: string; onChange: (value: string) => void; onKeyPress?: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-center justify-center relative shrink-0 w-full">
      <Frame8 />
      <Frame18 value={value} onChange={onChange} onKeyPress={onKeyPress} />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Nunito_Sans:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Senha
      </p>
    </div>
  );
}

function Frame7({ value, onChange, onKeyPress }: { value: string; onChange: (value: string) => void; onKeyPress?: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="content-stretch flex h-[72px] items-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] h-full items-start min-w-px relative">
        <div className="bg-white flex-[1_0_0] h-full min-h-[40px] min-w-px relative rounded-[8px]" data-name="Input">
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[16px] py-[9.5px] relative size-full">
              <input
                type="password"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={onKeyPress}
                placeholder="Digite sua senha"
                className="flex-[1_0_0] min-w-px bg-transparent outline-none border-none font-['Nunito_Sans:Medium',sans-serif] font-medium leading-[1.2] text-[20px] placeholder:text-[#737373]"
                style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
        </div>
      </div>
    </div>
  );
}

function Frame17({ value, onChange, onKeyPress }: { value: string; onChange: (value: string) => void; onKeyPress?: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame7 value={value} onChange={onChange} onKeyPress={onKeyPress} />
    </div>
  );
}

function Frame16({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, isValid, error }: LoginFormProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && isValid) {
      onSubmit();
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame6 value={matricula} onChange={onMatriculaChange} onKeyPress={handleKeyPress} />
      <Frame17 value={senha} onChange={onSenhaChange} onKeyPress={handleKeyPress} />
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-[8px] p-[16px] w-full">
          <p className="font-['Nunito_Sans:Medium',sans-serif] font-medium text-[14px] text-red-600 text-center">
            {error}
          </p>
        </div>
      )}
      <button
        onClick={onSubmit}
        disabled={!isValid}
        className={`h-[72px] min-h-[40px] relative rounded-[8px] shrink-0 w-full transition-all ${
          isValid
            ? 'bg-[#2258E6] hover:bg-[#1a47b8] cursor-pointer'
            : 'bg-[#cfcfcf] opacity-50 cursor-not-allowed'
        }`}
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[24px] py-[10px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Left icon">
              <div className="absolute inset-[9.38%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <g id="Vector">
                    <path d={svgPaths.p2010def2} fill={isValid ? "#FFFFFF" : "var(--fill-0, #3B3B3B)"} />
                    <path d={svgPaths.p2ef5a800} fill={isValid ? "#FFFFFF" : "var(--fill-0, #3B3B3B)"} />
                    <path d={svgPaths.p1d703980} fill={isValid ? "#FFFFFF" : "var(--fill-0, #3B3B3B)"} />
                  </g>
                </svg>
              </div>
            </div>
            <div className={`[word-break:break-word] flex flex-col font-['Nunito_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center whitespace-nowrap ${isValid ? 'text-white' : 'text-[#3b3b3b]'}`} style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p className="leading-[1.2]">Entra</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function LoginFormContent({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, isValid, error }: LoginFormProps) {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px relative w-full">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[72px] items-center px-[72px] py-[32px] relative size-full">
          <Frame10 />
          <Frame16
            matricula={matricula}
            senha={senha}
            onMatriculaChange={onMatriculaChange}
            onSenhaChange={onSenhaChange}
            onSubmit={onSubmit}
            isValid={isValid}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#bdbdbd] h-px relative shrink-0 w-full">
      <div className="relative size-full" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[32px] relative size-full">
        <Frame5 />
      </div>
    </div>
  );
}

function Frame14({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, isValid, error }: LoginFormProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-w-px relative">
      <Header />
      <Frame12 />
      <LoginFormContent
        matricula={matricula}
        senha={senha}
        onMatriculaChange={onMatriculaChange}
        onSenhaChange={onSenhaChange}
        onSubmit={onSubmit}
        isValid={isValid}
        error={error}
      />
      <Frame13 />
    </div>
  );
}

function Frame1({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, isValid, error }: LoginFormProps) {
  return (
    <div className="absolute content-stretch flex h-[800px] items-start left-0 top-0 w-[1280px]">
      <Frame15 />
      <Frame14
        matricula={matricula}
        senha={senha}
        onMatriculaChange={onMatriculaChange}
        onSenhaChange={onSenhaChange}
        onSubmit={onSubmit}
        isValid={isValid}
        error={error}
      />
    </div>
  );
}

function Home({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, isValid, error }: LoginFormProps) {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[800px] left-1/2 top-1/2 overflow-clip rounded-[20px] shadow-[0px_4px_127.2px_0px_rgba(0,0,0,0.25)] w-[1280px]" data-name="Home">
      <Frame1
        matricula={matricula}
        senha={senha}
        onMatriculaChange={onMatriculaChange}
        onSenhaChange={onSenhaChange}
        onSubmit={onSubmit}
        isValid={isValid}
        error={error}
      />
    </div>
  );
}

export default function Login() {
  const [matricula, setMatricula] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isValid = matricula.trim().length > 0 && senha.trim().length > 0;

  const handleSubmit = () => {
    if (isValid) {
      // Valida as credenciais
      if (matricula === "00003" && senha === "abc123") {
        console.log("Login bem-sucedido!");
        navigate("/dashboard");
      } else {
        setError("Credenciais inválidas. Tente novamente.");
        setTimeout(() => setError(""), 3000);
      }
    }
  };

  return (
    <div className="bg-[#2e3344] relative min-h-screen w-full" data-name="Desktop - 1">
      <Home
        matricula={matricula}
        senha={senha}
        onMatriculaChange={setMatricula}
        onSenhaChange={setSenha}
        onSubmit={handleSubmit}
        isValid={isValid}
        error={error}
      />
    </div>
  );
}
