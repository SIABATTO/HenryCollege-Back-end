const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Membership", {
        id: { // viene de la pasarela de pagos
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        pricePaid: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        paymentId: { //viene de la pasarela de pagos
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        expirationDate: {
            type: DataTypes.DATE,
            allowNull: false,      
        }
    })
}