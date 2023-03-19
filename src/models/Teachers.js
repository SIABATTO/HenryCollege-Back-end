const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Teachers", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
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