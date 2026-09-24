import { useState } from "react";
import { useNavigate } from "react-router";
import Frame19675 from "../../imports/Frame19675/Frame19675.tsx";
import { useFitScale } from "./ScaleToFit";
import imgFotoLogin from "../../imports/Login/foto-farmacia.png";

function PainelFoto() {
  return (
    <div className="relative w-[646px] h-full overflow-hidden shrink-0">
      <img alt="" className="absolute inset-0 size-full object-cover" src={imgFotoLogin} />
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
  error?: string;
  passwordError?: string;
}

function Frame10() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-center leading-[0] relative shrink-0 text-center">
      <div className="flex flex-col font-['Nunito_Sans',sans-serif] font-bold justify-center relative shrink-0 text-[#383838] text-[31.248px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">Centro de Treinamentos</p>
      </div>
      <div className="flex flex-col font-['Nunito_Sans',sans-serif] font-normal justify-center relative shrink-0 text-[#6c6c6c] text-[20px] w-[440px]" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        <p className="leading-[1.2]">Informe suas credenciais para acessar</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
        Usuário
      </p>
    </div>
  );
}

function Frame18({ value, onChange, onKeyPress }: { value: string; onChange: (value: string) => void; onKeyPress?: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="content-stretch flex gap-[18px] items-start justify-center relative shrink-0 w-full">
      <div className="content-stretch flex flex-[1_0_0] h-[72px] items-start min-w-px relative">
        <div className="bg-[#f3f3f5] flex-[1_0_0] h-full min-h-[40px] min-w-px relative rounded-[8px]" data-name="Input">
          <div className="flex flex-row items-center min-h-[inherit] overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex gap-[12px] items-center min-h-[inherit] px-[16px] py-[9.5px] relative size-full">
              <input
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onKeyPress={onKeyPress}
                disabled
                className="flex-[1_0_0] min-w-px bg-transparent outline-none border-none font-['Nunito_Sans',sans-serif] font-normal leading-[130%] text-[#737373] text-[20px] cursor-not-allowed"
                placeholder=""
              />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
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
      <p className="[word-break:break-word] font-['Nunito_Sans',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[#404040] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
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
                className="flex-[1_0_0] min-w-px bg-transparent outline-none border-none font-['Nunito_Sans',sans-serif] font-medium leading-[130%] text-[20px] placeholder:text-[#737373]"
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

function Frame17({ value, onChange, onKeyPress, error }: { value: string; onChange: (value: string) => void; onKeyPress?: (e: React.KeyboardEvent) => void; error?: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[18px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame7 value={value} onChange={onChange} onKeyPress={onKeyPress} />
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-[8px] p-[16px] w-full">
          <p className="font-['Nunito_Sans',sans-serif] font-medium text-[14px] text-red-600 text-center">
            {error}
          </p>
        </div>
      )}
    </div>
  );
}

function Frame16({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, error, passwordError }: LoginFormProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame6 value={matricula} onChange={onMatriculaChange} onKeyPress={handleKeyPress} />
      <Frame17 value={senha} onChange={onSenhaChange} onKeyPress={handleKeyPress} error={passwordError} />
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-[8px] p-[16px] w-full">
          <p className="font-['Nunito_Sans',sans-serif] font-medium text-[14px] text-red-600 text-center">
            {error}
          </p>
        </div>
      )}
      <button
        onClick={onSubmit}
        className="h-[72px] min-h-[40px] relative rounded-[8px] shrink-0 w-full transition-all bg-[#2258E6] hover:bg-[#1a47b8] cursor-pointer"
        data-name="Button"
      >
        <div className="flex flex-row items-center justify-center min-h-[inherit] size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center min-h-[inherit] px-[24px] py-[10px] relative size-full">
            <div className="[word-break:break-word] flex flex-col font-['Nunito_Sans',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[20px] text-center text-white whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
              <p className="leading-[1.2]">Entrar</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

function LoginFormContent({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, error, passwordError }: LoginFormProps) {
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
            error={error}
            passwordError={passwordError}
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

function Frame14({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, error, passwordError }: LoginFormProps) {
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
        error={error}
        passwordError={passwordError}
      />
      <Frame13 />
    </div>
  );
}

function Frame1({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, error, passwordError }: LoginFormProps) {
  return (
    <div className="absolute content-stretch flex h-[800px] items-start left-0 top-0 w-[1280px]">
      <PainelFoto />
      <Frame14
        matricula={matricula}
        senha={senha}
        onMatriculaChange={onMatriculaChange}
        onSenhaChange={onSenhaChange}
        onSubmit={onSubmit}
        error={error}
        passwordError={passwordError}
      />
    </div>
  );
}

function Home({ matricula, senha, onMatriculaChange, onSenhaChange, onSubmit, error, passwordError }: LoginFormProps) {
  // Escala o card fixo (1280×800) para caber proporcionalmente em telas menores.
  const scale = useFitScale(1280, 800, { paddingX: 24, paddingY: 24 });
  return (
    <div className="absolute bg-white h-[800px] left-1/2 top-1/2 overflow-clip rounded-[20px] shadow-[0px_4px_127.2px_0px_rgba(0,0,0,0.25)] w-[1280px]" data-name="Home" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
      <Frame1
        matricula={matricula}
        senha={senha}
        onMatriculaChange={onMatriculaChange}
        onSenhaChange={onSenhaChange}
        onSubmit={onSubmit}
        error={error}
        passwordError={passwordError}
      />
    </div>
  );
}

export default function Login() {
  const [matricula, setMatricula] = useState("Treinamento");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!senha.trim()) {
      setError("");
      setPasswordError("Informe sua senha antes de prosseguir.");
      return;
    }
    setPasswordError("");
    // Valida as credenciais
    if (matricula === "Treinamento" && senha === "abc123") {
      console.log("Login bem-sucedido!");
      navigate("/dashboard");
    } else {
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  const handleSenhaChange = (value: string) => {
    setSenha(value);
    if (passwordError) {
      setPasswordError("");
    }
    if (error) {
      setError("");
    }
  };

  return (
    <div className="bg-[#2e3344] relative min-h-screen w-full" data-name="Desktop - 1">
      <Home
        matricula={matricula}
        senha={senha}
        onMatriculaChange={setMatricula}
        onSenhaChange={handleSenhaChange}
        onSubmit={handleSubmit}
        error={error}
        passwordError={passwordError}
      />
    </div>
  );
}
