const reducer = (globalState, action) => {

	switch (action.type) {

		case "GET_REVISTA":
			return{
				...globalState,
				singleRevista:action.payload
			}

		case "GET_REVISTAS":
			return{
				...globalState,
				revistas: action.payload
			}
		case "CHANGE_TEXT":
			return{
				...globalState,
				hola:action.payload
			}
		default:
			return globalState
	}
}
export default reducer