import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Revistas from "./components/Revistas";
import Single from "./components/Revistas/Single";
import RevistaState from "./context/Revista/RevistaState";


// 2. FUNCIÓN
const Router = () => {
  return (
    <>
      <RevistaState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />

              <Route path="registro" element={<Register/>} />

              <Route path="iniciar-sesion" element={<Login/>} />

              <Route path="revistas" element={<Revistas/>} />

              <Route path="revistas/:id" element={<Single/>} />



            </Route>
          </Routes>
        </BrowserRouter>
      </RevistaState>
    </>
  );
};

// 3. EXPORTACIÓN
export default Router;
