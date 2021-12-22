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
    <header style={{backgroundColor:'red'}}>
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
              {currentUser.typeUser === "adminchief" && <Link to="/revistas/crear">
                <button
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Crear revista
                </button>
              </Link>}
            </div>
          </div>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {currentUser.email !== "" ? (
              <>
                <Link
                  to="/profile"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Tu perfil
                </Link>

                <Link
                  onClick={() => logoutUser()}
                  to="/"
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  Cerrar sesión
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/registro"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
                >
                  Crear cuenta
                </Link>
                <Link
                  to="/iniciar-sesion"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-purple-700 hover:to-indigo-700"
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
