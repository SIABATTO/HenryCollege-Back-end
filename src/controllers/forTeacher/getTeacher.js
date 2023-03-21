const {Teachers} = require("../../db")

const getTeachers = async()=>{

    const result = await Teachers.findAll()
    console.log(result)

    const resultMap = result.map(e=>{
        return{
            id: e.id,
            firstName: e.firstName,
            lastName: e.lastName,
            email: e.email,
            phone: e.phone,
            image: e.image || "https://www.nicepng.com/png/detail/202-2022264_usuario-annimo-usuario-annimo-user-icon-png-transparent.png"
        }
    })
    return resultMap
}


module.exports = getTeachers