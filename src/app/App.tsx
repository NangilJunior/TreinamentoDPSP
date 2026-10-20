import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Navigate,
} from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import FuncionalidadePage from "./components/FuncionalidadePage";
import { IS_SCORM, tutorialParaRetomar } from "./scorm";

// No pacote SCORM não há login: o conteúdo abre no último tutorial visitado
// ou na lista da categoria. As rotas usam hash (#/...), que funcionam dentro
// do LMS independentemente do endereço em que o pacote é servido.
function Inicio() {
  if (!IS_SCORM) return <Login />;
  const ultimo = tutorialParaRetomar();
  return <Navigate to={ultimo ? `/funcionalidade/${ultimo}` : "/dashboard"} replace />;
}

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/funcionalidade/:slug"
        element={<FuncionalidadePage />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return IS_SCORM ? (
    <HashRouter>
      <Rotas />
    </HashRouter>
  ) : (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Rotas />
    </BrowserRouter>
  );
}
