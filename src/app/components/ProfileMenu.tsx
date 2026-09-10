import { useNavigate } from "react-router";

export default function ProfileMenu() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="flex gap-[8px] items-center justify-end w-full" data-name="Button DropDown Profile">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="Avatar">
        <div className="absolute bg-[#FF5C5C] left-0 rounded-[9999px] size-[40px] top-0" data-name="Background" />
        <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Geist',sans-serif] justify-center leading-[0] left-[20px] not-italic size-[40px] text-white text-[14px] text-center top-[20px]">
          <p className="leading-[20px]">TD</p>
        </div>
      </div>
      <div className="[word-break:break-word] content-stretch hidden flex-col items-start justify-center leading-[1.2] relative shrink-0 text-[#0a0a0a] md:flex md:min-w-0">
        <p className="font-['Nunito_Sans',sans-serif] font-semibold relative shrink-0 text-[16px] w-full whitespace-nowrap" style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}>
          Treinamento
        </p>
        <button
          type="button"
          onClick={handleLogout}
          className="font-['Nunito_Sans',sans-serif] font-normal relative shrink-0 text-[10.24px] w-full whitespace-nowrap text-left cursor-pointer hover:underline"
          style={{ fontVariationSettings: "'YTLC' 500, 'wdth' 100" }}
        >
          Sair da conta
        </button>
      </div>
    </div>
  );
}
