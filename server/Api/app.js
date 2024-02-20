import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routeUser from './routes/usuario.js'
import  env  from "./config.js"
// app init
const app = express()

// settings
app.set('port', env.PORT )

// middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

// Routes
app.use('/api', routeUser)

// Route Not Found
app.use((req, res) => {
  res.status(404).json({
    error: 'Route Not Found'
  })
})

export default app

