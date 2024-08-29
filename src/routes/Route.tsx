//Define a configuração das rotas da aplicação
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Login from "../Pages/Login"
import Register from "../Pages/Cadastro"
import ForgotMyPassword from "../Pages/EsqueciSenha"
import { Error404Unloged } from "../Pages/404unloged";
import Home from "../Pages/Home";
import Layout from "../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/esqueci-minha-senha" element={<ForgotMyPassword/>}/>
          <Route path="/cadastrar" element={<Register/>}/>
          <Route path="/home" element={<Layout/>}>
                
          </Route>
          <Route path="/*" element={<Error404Unloged />}/>
        </Routes>
    </BrowserRouter>
  );
};
        
export default Router;
