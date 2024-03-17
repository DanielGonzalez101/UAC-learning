import { DataTypes } from 'sequelize'
import { sequelize } from '../database/db.js'

export const Profesor = sequelize.define(
  'profesor',
  {
    profesor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profesor_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    profesor_email: {
      type: DataTypes.STRING(50),
      unique: true,
      allowNull: false,
    },
    profesor_password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    profesor_cedula: {
      type: DataTypes.BIGINT(),
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
)
