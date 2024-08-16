//Define a configuração das rotas da aplicação
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Login from "../Pages/Login"
import Register from "../Pages/Cadastro"
import ForgotMyPassword from "../Pages/EsqueciSenha"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/esqueci-minha-senha" element={<ForgotMyPassword/>}/>
          <Route path="/cadastrar" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
