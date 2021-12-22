import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Revistas from "./components/Revistas";
import Single from "./components/Revistas/Single";
import RevistaState from "./context/Revista/RevistaState";
import CreateRevista from "./components/Revistas/Create";
import UserState from "./context/User/UserState";
import About from "./components/Layout/About";
import EditRevista from "./components/Revistas/Single/Edit";
import Auth from "./routes/Auth";
import Private from "./routes/Private";
import { Profile } from "./components/User/Profile";

// 2. FUNCIÓN
const Router = () => {
  return (
    <>
      <UserState>
        <RevistaState>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route
                  path="registro"
                  element={<Auth component={Register} />}
                />

                <Route
                  path="iniciar-sesion"
                  element={<Auth component={Login} />}
                />

                <Route path="revistas" element={<Revistas />} />

                <Route path="revistas/crear" element={<CreateRevista />} />

                <Route path="sobre-nosotros" element={<About />} />

                <Route path="revistas/:id" element={<Single />} />

                <Route path="revistas/:id/editar" element={<EditRevista />} />

                <Route
                  path="profile"
                  element={<Private component={Profile} />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </RevistaState>
      </UserState>
    </>
  );
};

// 3. EXPORTACIÓN
export default Router;
