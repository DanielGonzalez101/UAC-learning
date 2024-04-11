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
    const logearme = async (usuario,contraseña) => {
        const {res,data} = await validarLogin(usuario,contraseña)
        if (res) {
            localStorage.setItem('estado',data)
            dispatch({type:types.login,user:data})
        } else {
           alert(data)
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