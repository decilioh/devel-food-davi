//Define a configuração das rotas da aplicação

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Login from "../Pages/Login"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login"  element={<Login/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router