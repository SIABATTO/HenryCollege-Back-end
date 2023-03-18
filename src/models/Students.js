const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Students", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
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
        password:{
             type: DataTypes.INTEGER,
             allowNull:false,
             unique: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
} 

/*active: {
    type: DataTypes.BOOLEAN,
    default: true,
    allowNull: false,
},*/