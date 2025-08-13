import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from './app/routes/login/page.tsx';
import SubEmpresas from './app/routes/subempresas.tsx';
import Empresas from './app/routes/empresas.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<App />}>
         <Route path="/empresas" element={<Empresas />} />
        <Route path="/sub-empresas" element={<SubEmpresas />} /> 
        </Route>   
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
