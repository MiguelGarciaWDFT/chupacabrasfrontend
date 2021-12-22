const reducer = (globalState, action) => {
  switch (action.type) {
    case "REGISTRO_EXITOSO":
    case "LOGIN_EXITOSO":
      localStorage.setItem("token", action.payload);

      return {
        ...globalState,
        authStatus: true,
      };

    case "LOGOUT_USUARIO":
      localStorage.removeItem("token");

      return {
        ...globalState,
        currentUser: { typeUser: "", nombre: "", email: "", password: "" },
        authStatus: false,
        msg: action.payload,
      };

    case "GET_DATA_USER":
      return {
        ...globalState,
        authStatus: true,
        currentUser: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
