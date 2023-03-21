const {Teachers} = require("../../db")

const postTeacher = async (info)=>{
    const {firstName, lastName, email, phone} = info
    const newTeacher = await Teachers.create({
        firstName,
        lastName,
        email,
        phone
    })
    return newTeacher
}

module.exports= postTeacher