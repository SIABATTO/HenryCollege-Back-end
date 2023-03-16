const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Teachers", {
        id: { // se va a ingresar con el id de auth0
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        imagen: {
            type: DataTypes.BLOB,
            allowNull: true
        }
    })
}