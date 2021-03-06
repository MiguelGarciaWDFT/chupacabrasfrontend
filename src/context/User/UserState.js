// ./src/context/User/UserState.js
import { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axiosClient from "./../../config/axios";

const UserState = (props) => {
  // 1. INITIAL STATE
  const initialState = {
    currentUser: {
      typeUser: "",
      nombre: "",
      email: "",
      password: "",
    },
    authStatus: false,
  };

  // 2. CONFIGURACIÓN DEL REDUCER
  const [globalState, dispatch] = useReducer(UserReducer, initialState);

  // 3. FUNCIONES
  const registerUser = async (form) => {
    const res = await axiosClient.post("users/create", form);

  

    const token = res.data.data;

    dispatch({
      type: "REGISTRO_EXITOSO",
      payload: token,
    });
  };

  const verifyingToken = async () => {
    const token = localStorage.getItem("token");

    // ANEXAR TOKEN A LA SIGUIENTE PETICIÓN DE AXIOS
    if (token) {
      axiosClient.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axiosClient.defaults.headers.common["x-auth-token"];
    }

    try {
      const res = await axiosClient.get("users/verifytoken");

   

      const userData = res.data.data;

      dispatch({
        type: "GET_DATA_USER",
        payload: userData,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async (form) => {
    try {

      const res = await axiosClient.post("users/login", form);

      const token = res.data.data;

      dispatch({
        type: "LOGIN_EXITOSO",
        payload: token,
      });
    } catch (error) {}
  };

  const logoutUser = async () => {
    dispatch({
      type: "LOGOUT_USUARIO",
    });
  };

  // 4. RETORNO
  return (
    <UserContext.Provider
      value={{
        currentUser: globalState.currentUser,
        authStatus: globalState.authStatus,
        registerUser,
        loginUser,
        verifyingToken,
        logoutUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
export default UserState;
