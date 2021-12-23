/* This example requires Tailwind CSS v2.0+ */
import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

export default function Home() {
  const ctx = useContext(UserContext);
  const {currentUser}=ctx

 

  return (
    <>
      <div className="relative bg-black">
        <div className="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://res.cloudinary.com/cloudguns/image/upload/v1640198732/chupacabrasimages/PORTADAS%20SELECCIONADAS/home_b9nnob.png"
            alt="bg-principal"
          />
        </div>
        <div className="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Bienvenidos a
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Chupacabras Fanzine
            </p>
            <p className="mt-3 text-lg text-gray-300">Desde su nacimiento en 2018 y hasta la fecha este espacio independiente se a caracterizado por la contribución de artistas de todas partes de México y del mundo, si gustas colaborar o difundir tu contenido añadenos en redes sociales.  </p>

            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                {currentUser.email === "" && (
                  <Link
                    style={{ backgroundColor: "#a10101" }}
                    to="/registro"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-gray-50"
                  >
                    Crea una cuenta con nosotros
                    <ExternalLinkIcon
                      className="-mr-1 ml-3 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
