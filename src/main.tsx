import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from './app/routes/login/page.tsx';
import SubEmpresas from './app/routes/subempresas.tsx';
import Empresas from './app/routes/empresas.tsx';
import Rankings from './app/routes/rankings.tsx';
import Usuarios from './app/routes/usuarios.tsx';
import Linhas from './app/routes/linhas.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/sub-empresas" element={<SubEmpresas />} />
          <Route path="/linhas" element={<Linhas />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/rankings" element={<Rankings />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
