const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Students", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        active: {
            type: DataTypes.BOOLEAN,
            default: true,
            allowNull: false,
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
        }
    })
}