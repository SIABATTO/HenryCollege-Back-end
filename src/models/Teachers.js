const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Teachers", {
     
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
            type: DataTypes.STRING,
            allowNull: true
        },
        imagen: {
            type: DataTypes.BLOB,
            allowNull: true
        }
    })
}