const {Students} = require("../../db")

const getStudents = async() => {
    const db = await Students.findAll()
    return db
}


module.exports = getStudents