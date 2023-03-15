const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Certificate", {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {timestamps: false})
}