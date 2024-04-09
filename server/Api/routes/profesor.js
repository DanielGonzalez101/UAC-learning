const { Router } = require('express')
const { Profesor } = require('../models/Profesor.js')

const route = Router()

route.post('/registrar', async (req, res) => {
  try {
    console.log(req.body)
    // Creamos el usuario tipo profesor
    const newProfesor = req.body
    // Buscamos el correo de el profesor
    const profesorCreate = await Profesor.findOne({
      where: {
        profesor_email: newProfesor.profesor_email,
      },
    })

    // Validamos si ese correo ya existe
    if (profesorCreate) {
      return res.status(400).json({ msg: 'Ese correo ya esta registrado' })
    }

    // Buscamos si existe la cedula de el profesor
    const cedulaProfesor = await Profesor.findOne({
      where: {
        profesor_cedula: cedulaProfesor.profesor_cedula,
      },
    })

    // validamos si la cedula de el profesor existe
    if (cedulaProfesor) {
      return res.status(400).json({ msg: 'Cedula esta registrada' })
    }
  } catch (error) {
    return res.status(500)
  }
})

// Creamos las validaciones para el login
route.post('/login', async (req, res) => {
  try {
    // Llamamos a el correo y la contrasena de el profesor
    const { profesor_email, profesor_password } = req.body
    // Buscamos el correo de el profesor
    const profesor_user = await Profesor.findOne({
      where: {
        profesor_email: profesor_email,
      },
    })
    // Si no se encuentra el correo registrado mandamos un error
    if (!profesor_email) {
      return res.status(400).json({ msg: 'El correo no esta registrado' })
    }
    // Lo mismo con la contrasena
    if (profesor_password !== profesor_user.profesor_password) {
      return res.status(400).json({ msg: 'Contrasena incorrecta' })
    }
    return res.status(200).json({ msg: profesor_user })
  } catch (error) {
    return res.status(500)
  }
})

module.exports = route
