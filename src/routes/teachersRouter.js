const { Router } = require("express")
const teachersRouter = Router()
const postHandler = require("../handlers/forTeachers/postHandler")

teachersRouter.post("/", postHandler)
//teachersRouter.get("/", postHandler)

module.exports = teachersRouter