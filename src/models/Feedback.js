const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Feedback", {
        courseFeedback: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        teachersFeedback: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    })
}