const { Router } = require("express")
const teachersRouter = Router()
const postHandler = require("../handlers/forTeachers/postHandler")
const getHandler = require("../handlers/forTeachers/getHandler")

teachersRouter.post("/", postHandler)
teachersRouter.get("/", getHandler)

module.exports = teachersRouter