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
        profesor_cedula: nuevoProfesor.Correo,
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

export default route