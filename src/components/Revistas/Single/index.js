import React, {useContext, useEffect} from 'react'
import RevistaContext from './../../../context/Revista/RevistaContext'


import {useParams} from 'react-router-dom'

export default function Single() {

    const ctx = useContext(RevistaContext)

    const {singleRevista, getRevista} = ctx

    const params = useParams()
    //console.log(params);
    const id = params.id

    useEffect(()=>{
        getRevista(id)
    },[])

    console.log('revista', singleRevista);

    return (
        <div>
            Pagina individual de revista
       
        {/* <button onClick={() => {  }}>
            obtener revista individual
        </button>
      */}
      <img src={singleRevista?.imagen} alt="ImagenPortada" />

        <iframe
        src={`${singleRevista?.urlPdf}/preview`}
        width="960"
        height="715"
        title="Pdf-link"
        sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
      />
     
        <h1>{singleRevista?.nombre}</h1>
        <p>{singleRevista?.edicion}</p>
        <p>{singleRevista?.descripcion}</p>
        <p>{singleRevista?.likes}</p>
        <p>{singleRevista?.views}</p>



        </div>

    )
}
