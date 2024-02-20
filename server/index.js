// Importamos express
const express = require('express')
const app = express()

// Importamos mysql
const mysql = require('mysql')

// Importamos cors para que no joda
const cors = require('cors')
app.use(cors())
app.use(express.json())

// Creamos la conexion
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'pepino2002',
  database: 'uac-learning',
})

// Creamos las consultas y las respuestas
app.post('/create', (req, res) => {
  const Usuario = req.body.Usuario
  const Contrasena = req.body.Contrasena

  // creamos el envio de la consulta`
  db.query('INSERT INTO login(Usuario, Contrasena) VALUES(?,?)', [Usuario, Contrasena],
    (err, result) => {
      if(err) console.log(err)
      else res.send('Empleado registrado con exito')
    }
  )
})

app.listen(3001, () => {
  console.log('Corriendo en el puerto 3001')
})
