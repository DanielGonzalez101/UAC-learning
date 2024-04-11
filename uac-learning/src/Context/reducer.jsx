import types from "./types";

const reducer = (state={},action) => {
    switch (action.type) {
        case types.login:
            return {
                estado:true,
                usuario:action.user //user se refiere al correo porque este campo es unico
            }
        case types.logout:
            return {
                estado:false,
                usuario:null
            }
        default: return state
    }
}
export default reducer