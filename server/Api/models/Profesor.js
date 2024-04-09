const { DataTypes } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('profesor', {

    profesor_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    profesor_name: {
      type: DataTypes.STRING(40),
      allowNull: false,
    },
    profesor_apellido: {
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
    profesor_codigo: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      unique: true,
    },
    profesor_cedula: {
      type: DataTypes.INTEGER(),
      allowNull: false,
      unique: true,
    },
  })
}