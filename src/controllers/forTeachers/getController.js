const {sequelize} = require("../../db")
const getController = async() =>{
const {Teachers} = sequelize.models
const getAll = await Teachers.findAll()
return getAll
}
module.exports = getController