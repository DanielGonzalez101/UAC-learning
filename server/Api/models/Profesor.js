import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Profesor = sequelize.define(
  'Profesor',
  {
    profesor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profesor_nombre: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    profesor_apellido: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    profesor_correo: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    profesor_contrasena: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    profesor_codigo: {
      type: DataTypes.BIGINT(),
      allowNull: false,
      unique: true,
    },
    profesor_cedula: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
  },
  { timestamps: false }
)
