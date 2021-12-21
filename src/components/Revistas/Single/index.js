import React, { useContext, useEffect, useState } from "react";
import RevistaContext from "./../../../context/Revista/RevistaContext";
import { ThumbUpIcon} from "@heroicons/react/solid";

import { useParams } from "react-router-dom";

const comments = [
  {
    id: 1,
    name: 'Leslie Alexander',
    date: '4d ago',
    imageId: '1494790108377-be9c29b29330',
    body:
      'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
  },
  {
    id: 2,
    name: 'Michael Foster',
    date: '4d ago',
    imageId: '1519244703995-f4e0f30006d5',
    body:
      'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    date: '4d ago',
    imageId: '1506794778202-cad84cf45f1d',
    body:
      'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
  },
]

export default function Single() {
  const ctx = useContext(RevistaContext);

  const { singleRevista, getRevista } = ctx;
  const [like, setLike] = useState(0);

  const params = useParams();
  //console.log(params);
  const id = params.id;

  useEffect(() => {
    getRevista(id);
  }, []);

  console.log("revista", singleRevista);

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
      <br/>
      {/* Seccion de informacion */}
      <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 m-15">
        <div className="relative flex p-10">
          <div className="pb-5">
            <div className="flex">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {singleRevista?.nombre}
              </h3>
              <p className="ml-2 mt-1 text-sm text-gray-500 truncate">
                {`edición: ${singleRevista?.edicion}`}
              </p>
              <button
                onClick={() => setLike((prev) => prev + 1)}
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-5"
              >
                <ThumbUpIcon
                  className="-ml-0.5 mr-2 h-4 w-4"
                  aria-hidden="true"
                />
                {/* {`Like ${singleRevista?.likes}`} */}
                {`Like ${like}`}
              </button>
            </div>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
              {singleRevista?.descripcion}
            </p>
          </div>
        </div>
        <div className="relative flex">
          {/* <section className="w-full pr-10" aria-labelledby="notes-title">
            <div className="bg-white shadow overflow-y-scroll">
              <div className="divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Comentarios
                  </h2>
                </div>
                <div className="px-4 py-6 max-h-md">
                  <ul className="space-y-8 overflow-y-auto">
                    {comments.map((comment) => (
                      <li key={comment.id}>
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-sm">
                              <p className="font-medium text-gray-900">
                                {comment.name}
                              </p>
                            </div>
                            <div className="mt-1 text-sm text-gray-700">
                              <p>{comment.body}</p>
                            </div>
                            <div className="mt-2 text-sm space-x-2">
                              <span className="text-gray-500 font-medium">
                                {comment.date}
                              </span>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-6 sm:px-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src=""
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <textarea
                          id="comment"
                          name="comment"
                          rows={3}
                          className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Escribe tu comentario"
                          defaultValue={""}
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <div/>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Comentar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
}