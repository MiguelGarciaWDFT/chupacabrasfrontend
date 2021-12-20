import React, { useEffect, useContext } from "react";
import RevistaContext from "./../../context/Revista/RevistaContext";
import {Link} from 'react-router-dom' 
export default function Revistas() {
  // ESTADO GLOBAL
  const ctx = useContext(RevistaContext);

  const { revistas, hola, changeText, getRevistas } = ctx;

  useEffect(()=>{
    getRevistas();
  },[])
  //console.log(revistas);
  //console.log(ctx);

  return (
    <>
      <h1>Listado de revistas</h1>

	  <div className="container-cards">
		  {  
			  Array.isArray(revistas) && revistas.map((element) => {
				  return (
            <div key={element._id} className="card-element">
              <Link to={`/revistas/${element._id}`}>
                <div>
                  <div className="container-title">
                    <h5>{element.nombre}</h5>
                  </div>
                  <img src={element.imagen} height={120} width={85} alt="" />
                  <div className="footer-info">
                    <p>{`Visitas: ${element.views}`}</p>
                    <p>{`Likes: ${element.likes}`}</p>
                  </div>
                </div>
              </Link>
            </div>
          );

			  })
		  }
	  </div> 
    </>
  );
}