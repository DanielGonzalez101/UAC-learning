import Axios from 'axios'


export const validarLogin = async (usuario, contraseña) => {
    try {
        await Axios.post('http://localhost:3100/api/login', {
            usuario: usuario,
            contrasena: contraseña
        });
        return {
            res:true,
            data:usuario
        }
    } catch (error) {
        return {
            res:false,
            data:error.message,
        }
    }
}
