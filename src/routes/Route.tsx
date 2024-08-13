//Define a configuração das rotas da aplicação

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Login from "../Pages/Login"
import EsqueciSenha from "../Pages/EsqueciSenha"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/esqueci-senha" element={<EsqueciSenha/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router