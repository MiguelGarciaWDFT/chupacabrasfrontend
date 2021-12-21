import React, { useEffect, useContext } from "react";
import RevistaContext from "./../../context/Revista/RevistaContext";
import { Link, useNavigate } from "react-router-dom";
export default function Revistas(props) {
  // ESTADO GLOBAL
  const ctx = useContext(RevistaContext);

  const { revistas, hola, changeText, getRevistas } = ctx;
  let navigate = useNavigate();

  useEffect(() => {
    getRevistas();
  }, []);

  //console.log(ctx);

  return (
    <>
      <h1>Listado de revistas</h1>

      <Link to="/revistas/crear">
        <button>Crear revista</button>
      </Link>


      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 id="products-heading" className="sr-only">
            Revistas
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
          
          {Array.isArray(revistas) &&
          revistas.map((element) => {
            return (


            <Link to={`/revistas/${element._id}`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
                <img
                  src={element.imagen}
                  alt="Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop."
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <p className="mt-1 text-lg font-medium text-gray-900">{element.nombre}</p>
                <h3 className="mt-4 text-sm text-gray-700">{`Vistas ${element.views}`}</h3>
              </div>
          
            </Link>
            )
          })}
          </div>
        </div>
      </div>
    </>
  );
}