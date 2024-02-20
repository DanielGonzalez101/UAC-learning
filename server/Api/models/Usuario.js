import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Usuario = sequelize.define("users",{
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_name:{
        type: DataTypes.STRING(40),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false
    },
    user_password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    user_code: {
        type: DataTypes.BIGINT(),
        allowNull: false,
        unique:true
    },
    school: {
        type: DataTypes.STRING(80),
        allowNull: false
    },
    user_role: {
        type: DataTypes.TINYINT(),
        allowNull: false
    }
}, { timestamps: false })