import { Router } from "express";
import { Usuario } from "../models/Usuario.js";

const route = Router()

route.post("/registrar", async (req, res) => {
    try {
        //console.log(req.body)
        const newUser = req.body
        const userLogin = await Usuario.findOne({
            where: {
                email: newUser.email
            }
        })
        const verificarCode = await Usuario.findOne({
            where: {
                user_code: newUser.code
            }
        })
        if (userLogin) return res.status(400).json({ msg: "Su correo ya esta registrado" })
        if (verificarCode) return res.status(400).json({ msg: "Su codigo es invalido" })
        await Usuario.create({
                user_name: newUser.user,
                email: newUser.email,
                user_password: newUser.password,
                user_code: newUser.code,
                school: newUser.school,
                user_role: newUser.role
        })
        return res.status(201).json({ msg: "Usuario registrado exitosamente" })
        
    } catch (err) {
        return res.status(500);
    }
})

route.post('/login', async (req,res) => {
    try {
        const {email,password} = req.body
        const user = await Usuario.findOne({
            where: {
                email: email
            }
        })
        if (!user) return res.status(400).json({ msg: "El Usuario no esta registrado" })
        if(password !== user.user_password) return res.status(400).json({msg:"Contraseña Incorrecta"})
        else {
            return res.status(200).json(user)
        }
    } catch (error) {
        return res.status(500)
    }
    
})

export default route