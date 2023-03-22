const {sequelize} = require("../../db")

const postController = async(info) =>{
    const{ Teachers} = sequelize.models
    const {firstName, lastName,email,phone, imagen} = info

    const newTeacher = await Teachers.findOrCreate({
        where:{firstName},
        defaults:{
            lastName,
            email,
            phone,
            imagen
        }
    })
return newTeacher
}
module.exports = postController