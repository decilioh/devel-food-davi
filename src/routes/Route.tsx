//Define a configuração das rotas da aplicação
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Login from "../Pages/Login"
import Register from "../Pages/Cadastro"
import ForgotMyPassword from "../Pages/EsqueciSenha"
import { Error404Unloged } from "../Pages/404unloged";
import Layout from "../Pages/AdminLayout";
import { Error404Loged } from "../Pages/404loged";
import Home from "../Pages/Home";
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./PrivateRoute";
import Menu from "../Pages/Menu";
import NewDishes from "../Pages/NewDishes";


const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/esqueci-minha-senha" element={<ForgotMyPassword />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/admin" element={<PrivateRoute><Layout /></PrivateRoute>}>
          <Route path="home" element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/novo-prato" element={<NewDishes />} />
          <Route path="*" element={<Error404Loged />} />
        </Route>
        <Route path="/*" element={<Error404Unloged />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
