import Axios from 'axios'


export const validarLogin = async (usuario,contraseña) => {
    Axios.post('http://localhost:3001/create', {
      Usuario: usuario,
      Contrasena: contraseña
    }).then(() => {
        localStorage.setItem("estado",usuario)
        return true
    }).catch((err) => {
        console.log(err)
        return false
    })
}