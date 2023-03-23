const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Students", {
        active: {
            type: DataTypes.BOOLEAN,
            default: true,
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
            type: DataTypes.STRING,
            allowNull: true
        },
        auth0Id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
} 

