const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Payment", {
    PaymentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    }
  })
}