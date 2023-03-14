const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Order", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        totalPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })
}