import { useReducer } from "react"
import Contexto from "./context"
import reducer from "./reducer"
import types from "./types"
import { validarLogin } from "../Services/usuarios"
const init = () => {
    const valor = localStorage.getItem("estado") //valor es el correo que se guardara en local storage
    return {
        estado: !!valor, 
        usuario:valor
    }
}
function Provider({children}) {
    const logearme = (usuario,contraseña) => {
        const logeado =  validarLogin(usuario,contraseña)
        if (logeado) {
            dispatch({type:types.login,user:usuario})
        }
        else {
            alert("No se encuentra registrado")
        }
    }
    const deslogearme = () => {
        localStorage.removeItem("estado")
        dispatch({type:types.logout})
    }
    const [logeado, dispatch] = useReducer(reducer,{},init) 
  return (
    <Contexto.Provider value={{
        ...logeado,
        logearme,
        deslogearme,
    }}>
        {children}
    </Contexto.Provider>
  )
}

export default Provider