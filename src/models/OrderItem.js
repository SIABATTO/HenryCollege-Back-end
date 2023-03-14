const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("OrderItem", {
        unitPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        itemId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        }
    })
}