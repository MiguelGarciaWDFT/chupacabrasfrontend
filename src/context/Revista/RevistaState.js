import { useReducer } from 'react'
import RevistaContext from './RevistaContext'
import RevistaReducer from './RevistaReducer'
import axiosClient from './../../config/axios'

const RevistaState = (props) => {
	const initialState = {
		revistas: [],
		singleRevista:{
			_id:"",
			urlPdf:"",
			imagen:"",
			nombre:"",
			edicion:"",
			descripcion:"",
			likes:0,
			views:0,
			comentarios:[],
		},
		hola: "mundo"
	}

    	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
	// REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
	const [globalState, dispatch] = useReducer(RevistaReducer, initialState)


   	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	const changeText = () => {

		dispatch({ // ESTE OBJETO SE LE CONOCE COMO ACTION
			type: "CHANGE_TEXT",
			payload: "Estoy aprendiendo Context sin morir." 		
		})
	}

    const getRevistas= async ()=>{

        const res = await axiosClient.get("revistas/readall")

        console.log("obteniendo revitas");

        const list = res.data.data

       dispatch({
           type:"GET_REVISTAS",
           payload:list
       })
       console.log(list)
    }

	const getRevista = async (revistaId) => {
		//console.log(revistaId)
		const res = await axiosClient.get(`revistas/readone/${revistaId}`)


		const selectedRevista = res.data.data

		dispatch({
			type: "GET_REVISTA",
			payload: selectedRevista
		})

		return "Listo"

	}
	

	

    return (
		<RevistaContext.Provider
			value={{
				revistas: globalState.revistas,
				hola: globalState.hola,
				singleRevista:globalState.singleRevista,
                changeText,
                getRevistas,
				getRevista,
			}}
		>
			{props.children}
		</RevistaContext.Provider>
	)
}

export default RevistaState