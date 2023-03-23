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
        image: {
            type: DataTypes.BLOB,
            allowNull: true
        },
        auth0Id: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    })
}