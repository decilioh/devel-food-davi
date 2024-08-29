//Define a configuração das rotas da aplicação
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Login from "../Pages/Login"
import Register from "../Pages/Cadastro"
import ForgotMyPassword from "../Pages/EsqueciSenha"
import { Error404Unloged } from "../Pages/404unloged";
import Layout from "../Pages/AdminLayout";
import { Error404Loged } from "../Pages/404loged";
import Home from "../Pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/esqueci-minha-senha" element={<ForgotMyPassword/>}/>
          <Route path="/cadastrar" element={<Register/>}/>
          <Route path="/admin" element={<Layout/>}>
                <Route path="home" element={<Home/>}/>
                <Route path="*" element={<Error404Loged/>}/>
          </Route>
          <Route path="/*" element={<Error404Unloged />}/>
        </Routes>
    </BrowserRouter>
  );
};
        
export default Router;
