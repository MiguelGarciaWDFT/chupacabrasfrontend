import React, { useContext, useEffect, useState } from "react";
import RevistaContext from "./../../../context/Revista/RevistaContext";
import { ThumbUpIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import UserContext from "../../../context/User/UserContext";

const Single = () => {
  const useCont = useContext(UserContext);
  const ctx = useContext(RevistaContext);

  const { currentUser } = useCont;
  const { singleRevista, getRevista, deleteRevista, updateRevista } = ctx;

  const [newLike, setNewLike] = useState(false);

  const params = useParams();
  const id = params.id;

  const handleLikeButton = async () => {
    if (newLike === false) {
      const { likes } = singleRevista;
      await updateRevista({ ...singleRevista, likes: likes + 1 }, id);
      setNewLike(!newLike);
    } else {
      const { likes } = singleRevista;
      await updateRevista({ ...singleRevista, likes: likes - 1 }, id);
      setNewLike(!newLike);
    }
    await getRevista(id);
  };

  const getInitialData = async () => {
    const resRevista = await getRevista(id);
    if (currentUser.typeUser === 'user') {
      const { views } = resRevista
      console.log('views', resRevista);
      await updateRevista({...resRevista, views: views + 1}, id);
    }
  };

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <>
      <h1 className="text-center text-2xl font-extrabold text-gray-900">
        {singleRevista?.nombre}
      </h1>
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 m-15">
        <div className="relative flex">
          <img
            src={singleRevista?.imagen}
            alt="imagen-de-portada"
            className="absolute inset-0 w-full h-full object-center object-contain"
          />
        </div>
        <div className="relative flex">
          <iframe
            src={`${singleRevista?.urlPdf}/preview`}
            style={{ height: "100vh" }}
            title="Pdf-link"
            sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
            class="w-full"
          />
        </div>
      </div>
      <br />
      {/* Seccion de informacion */}
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 m-15">
        <div className="relative flex p-10">
          <div className="pb-5">
            <div className="flex">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {singleRevista?.nombre}
              </h3>
              <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                {`Edición: ${singleRevista?.edicion}`}
              </p>
              <button
                onClick={() => handleLikeButton()}
                type="button"
                style={{backgroundColor: '#a10101'}}
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-5"
              >
                <ThumbUpIcon
                
                  className="-ml-0.5 mr-2 h-4 w-4"
                  aria-hidden="true"
                />
                {`Like ${singleRevista?.likes}`}
              </button>
            </div>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              {singleRevista?.descripcion}
            </p>
          </div>
        </div>
        <div className="relative flex">
          {currentUser.typeUser === "adminchief" && (
            <>
              <Link to={`/revistas/${id}/editar`}>
                <button
                style={{backgroundColor: '#a10101'}}
                  type="button"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Editar revista
                </button>
              </Link>

              <Link to={`/revistas`}>
                <button
                  onClick={() => deleteRevista(id)}
                  style={{backgroundColor: '#a10101'}}
                  type="button"
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Borrar revista
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Single;
