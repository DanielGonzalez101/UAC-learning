import { Router } from 'express'
import { Profesor } from '../models/Profesor.js'

const route = Router()

route.post('/registrar', async (req, res) => {
  try {
    const nuevoProfesor = req.body

    const profesorRegistrar = await Profesor.findOne({
      where: {
        profesor_correo: nuevoProfesor.Correo,
      },
    })

    const verificarCedula = await Profesor.findOne({
      where: {
        profesor_cedula: nuevoProfesor.Cedula,
      },
    })

    if (profesorRegistrar)
      return res.status(400).json({ msg: 'Error el correo esta ya registrado' })
    if (verificarCedula)
      return res.status(400).json({ msg: 'Error la cedula ya esta registrada' })

    await Profesor.create({
      profesor_nombre: nuevoProfesor.Nombre,
      profesor_apellido: nuevoProfesor.Apellido,
      profesor_codigo: nuevoProfesor.Codigo,
      profesor_cedula: nuevoProfesor.Cedula,
      profesor_correo: nuevoProfesor.Correo,
      profesor_contrasena: nuevoProfesor.Contrasena,
    })

    return res
      .status(201)
      .json({ msg: 'Usuario a sido registrado exitosamente' })
  } catch (error) {
    console.log(error)
    return res.status(500)
  }
})

route.post('/login', async (req,res) => {
  const {usuario,contraseña} = req.body
   try {
    const profesorencontrado = await Profesor.findOne({
      where: {
        profesor_correo: usuario,
      },
    })
    
    if (profesorencontrado) {
      if(contraseña === profesorencontrado.profesor_contrasena) return res.sendStatus(200)
    }
    return res.sendStatus(400)
   } catch (error) {
    return res.sendStatus(500)
   }
})

export default route