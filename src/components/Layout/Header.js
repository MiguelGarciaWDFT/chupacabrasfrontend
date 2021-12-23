import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function Header() {
  const ctx = useContext(UserContext);

  const { currentUser, verifyingToken, logoutUser } = ctx;

  useEffect(() => {
    verifyingToken();
  }, []);

  return (
    <header style={{ backgroundColor: "black" }}>
      <nav className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src="https://res.cloudinary.com/cloudguns/image/upload/v1640051790/chupacabrasimages/PORTADAS%20SELECCIONADAS/chupacabrasprime_ciwfkw.png"
                alt=""
              />
            </Link>
            <div className="ml-10 space-x-8 lg:block">
              {currentUser.email !== "" && (
                <>
                  <Link
                    to="/revistas"
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    Revistas
                  </Link>

                  <Link
                    to="/sobre-nosotros"
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    Sobre nosotros
                  </Link>
                </>
              )}
              {currentUser.typeUser === "adminchief" && (
                <Link to="/revistas/crear">
                  <button
                  style={{backgroundColor: '#a10101'}}
                    type="button"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
                  >
                    Crear revista
                  </button>
                </Link>
              )}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {currentUser.email !== "" ? (
              <>
                <p className="text-base font-medium text-white hover:text-indigo-50 mr-5">Te damos la bienvenida a Chupacabras Fanzine {currentUser.nombre}</p>


                <Link
                style={{backgroundColor: '#a10101'}}
                  onClick={() => logoutUser()}
                  to="/"
                  className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Cerrar sesión
                </Link>
              </>
            ) : (
              <>
                <Link style={{backgroundColor: '#a10101'}}
                  to="/registro"
                  className ="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
                >
                  Crear cuenta
                </Link>
                <Link style={{backgroundColor: '#a10101'}}
                  to="/iniciar-sesion"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white"
                >
                  Iniciar sesión
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
