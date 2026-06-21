import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import FuncionalidadePage from "./components/FuncionalidadePage";

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/funcionalidade/:slug"
          element={<FuncionalidadePage />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}