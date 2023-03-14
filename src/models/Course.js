const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Course", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },
        level: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}