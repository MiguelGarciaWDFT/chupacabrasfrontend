import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import RevistaContext from "../../../context/Revista/RevistaContext";

export default function Edit() {
  // 1. ESTADO GLOBAL
  const params = useParams();
  const idRevista = params.id;
  const ctx = useContext(RevistaContext);

  const { singleRevista, getRevista, updateRevista } = ctx;

  // 2. ESTADO LOCAL
  const [revistaData, setRevistaData] = useState({
    urlPdf: "",
    imagen: "",
    nombre: "",
    edicion: "",
    descripcion: "",
  });

  // 3. FUNCIONES
  // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
  useEffect(() => {
    getRevista(idRevista);
  }, []);

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
    const { urlPdf, imagen, nombre, edicion, descripcion } = ctx.singleRevista;

    setRevistaData({
      urlPdf: urlPdf,
      imagen: imagen,
      nombre: nombre,
      edicion: edicion,
      descripcion: descripcion,
    });
  }, [singleRevista]);

  const handleChange = (e) => {
    e.preventDefault();

    setRevistaData({
      ...revistaData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRevista(revistaData, idRevista);
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Editar revista.
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Actualiza los datos de la revista.
              </p>
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                for="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de la revista/comentario
              </label>
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                type="text"
                name="nombre"
                value={revistaData.nombre}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                for="imagen"
                className="block text-sm font-medium text-gray-700"
              >
                Imagen o portada de tu revista.
              </label>
              <input
                onChange={(event) => {
                  handleChange(event);
                }}
                type="text"
                name="imagen"
                value={revistaData.imagen}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  for="urlPdf"
                  className="block text-sm font-medium text-gray-700"
                >
                  Url de tu revista, puedes compartir un enlace público desde
                  GoogleDrive como nosotros /,,/.
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="urlPdf"
                  value={revistaData.urlPdf}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label
                  for="edicion"
                  className="block text-sm font-medium text-gray-700"
                >
                  edicion de la revista/comentario
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="edicion"
                  value={revistaData.edicion}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-4">
                <label
                  for="descripcion"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripcion de tu contenido
                </label>
                <textarea
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  value={revistaData.descripcion}
                  name="descripcion"
                  id="descripcion"
                  autocomplete="address-level2"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Guardar revista
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
