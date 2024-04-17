import Axios from 'axios'
import imagenSociales from '../resources/cards-iconos/icono-sociales-png.svg'

export const validarLogin = async (usuario, contrasena) => {
    try {
        const res = await Axios.post('http://localhost:3100/api/login', {
            usuario: usuario,
            contraseña: contrasena
        });
        const {profesor_nombre, profesor_apellido} = res.data.info
        return {
            res:true,
            data: {correo:usuario, nombre:profesor_nombre, apellido:profesor_apellido}
        }
    } catch (error) {
        return {
            res:false,
            data:error.message,
        }
    }
}
export const obtenerAsignaturas = [
    {
      id: 1,
      nombre: 'Matemáticas',
      imagen: imagenSociales,
      descripcion: 'Aprende sobre álgebra, geometría y más.'
    },
    {
      id: 2,
      nombre: 'Historia',
      imagen: imagenSociales,
      descripcion: 'Explora los eventos históricos importantes.'
    },
    {
      id: 3,
      nombre: 'Ciencias',
      imagen: imagenSociales,
      descripcion: 'Explora los eventos históricos importantes.'
    },
    {
      id: 4,
      nombre: 'Fisca',
      imagen: imagenSociales,
      descripcion: 'Explora los eventos históricos importantes.'
    },
    {
      id: 5,
      nombre: 'Quimica',
      imagen: imagenSociales,
      descripcion: 'Explora los eventos históricos importantes.'
    },
    {
      id: 6,
      nombre: 'Biologia',
      imagen: imagenSociales,
      descripcion: 'Explora los eventos históricos importantes.'
    },
  
    // ... más asignaturas
  ];
