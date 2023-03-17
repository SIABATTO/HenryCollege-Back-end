const { Router } = require("express")
const courseRouter = Router()

const handlerCourse = require("../handlers/courseHandler/courseHandler") //traer de los handlers
const handlerId = require("../handlers/courseHandler/idHandler")
const handlerPost = require("../handlers/courseHandler/postHandler")

courseRouter.get("/", handlerCourse)
courseRouter.get("/:id", handlerId)
courseRouter.post("/", handlerPost)

module.exports= {courseRouter}