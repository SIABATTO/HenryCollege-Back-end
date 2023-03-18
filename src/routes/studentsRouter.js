const { Router } = require("express")
const studentsRouter = Router()
const postHandler = require("../handlers/forStudents/postHandler")
const getHandler = require("../handlers/forStudents/getHandler")

 studentsRouter.post("/", postHandler)
 studentsRouter.get("/", getHandler)

module.exports = studentsRouter

