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
import Promotions from "../Pages/Promocoes";
import NewPromotion from "../Pages/NewPromotion";
import Profile from "../Pages/Perfil";
import EditPassword from "../Pages/EditarSenha";
import Orders from "../Pages/Pedidos";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";


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
          <Route path="perfil" element={<Profile />} />
          <Route path="menu/novo-prato" element={<NewDishes />} />
          <Route path="promocoes" element={<Promotions />} />
          <Route path="promocoes/nova-promocao" element={<NewPromotion />} />
          <Route path="pedidos" element={<DndProvider backend={HTML5Backend}><Orders /></DndProvider>} />
          <Route path="*" element={<Error404Loged />} />
        </Route>
        <Route path="perfil/trocar-senha" element={<PrivateRoute><EditPassword /></PrivateRoute>} />
        <Route path="/*" element={<Error404Unloged />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
