const {Router} = require("express")
const teacherRouter = Router()

const getHandler = require("../handlers/forTeacher/getHandler")
const postHandler = require("../handlers/forTeacher/postHandler")

teacherRouter.get("/", getHandler)
teacherRouter.post("/", postHandler)


module.exports = teacherRouter;