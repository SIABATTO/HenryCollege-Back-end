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
        videoSrc: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        imageSrc:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "https://img-19.ccm.net/XB_5ol3UJEsQxV--zVK2MflRt0U=/480x335/smart/79c6e29832774ae9a0ce323c9f8a85e7/ccmcms-esccm/31899037.jpg"
        }
    })
}