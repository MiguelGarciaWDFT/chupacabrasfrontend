import React, { useContext, useEffect } from "react";
import RevistaContext from "./../../../context/Revista/RevistaContext";

import { useParams } from "react-router-dom";

export default function Single() {
  const ctx = useContext(RevistaContext);

  const { singleRevista, getRevista } = ctx;

  const params = useParams();
  //console.log(params);
  const id = params.id;

  useEffect(() => {
    getRevista(id);
  }, []);

  console.log("revista", singleRevista);

  return (
    <>
      <div class="min-h-full grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2">
        <div class="relative flex">
          <img
            src={singleRevista?.imagen}
            alt=""
            class=" inset-0 w-full h-full object-center object-cover"
          />
          <div class="relative w-full flex flex-col items-start justify-end bg-white  p-8 sm:p-12"></div>
        </div>
        <div class="">
          <iframe
            src={`${singleRevista?.urlPdf}/preview`}
            width="960"
            height="715"
            title="Pdf-link"
            sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
            class="relative w-11/12 h-11/12"
          />

          <div class="relative w-full flex flex-col items-start justify-end bg-white  p-8 sm:p-12"></div>
        </div>

        <h1>{singleRevista?.nombre}</h1>
        <p>{singleRevista?.edicion}</p>
        <p>{singleRevista?.descripcion}</p>
        <p>{singleRevista?.likes}</p>
        <p>{singleRevista?.views}</p>



      </div>
    </>
  );
}
