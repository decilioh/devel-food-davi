//Define a configuração das rotas da aplicação

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Login from "../Pages/Login"
import EsqueciSenha from "../Pages/EsqueciSenha"
import Cadastro from "../Pages/Cadastro"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/esqueci-minha-senha" element={<EsqueciSenha/>}/>
          <Route path="/cadastrar" element={<Cadastro/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router