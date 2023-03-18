const {Students, Course} = require("../../db")


const createStudent = async(info) =>{
    const{firstName,lastName,email,password,phone} = info
    const newStudent = await Students.create({
        firstName,
        lastName,
        email,
        password,
        phone,
    })
return newStudent
}
module.exports = createStudent