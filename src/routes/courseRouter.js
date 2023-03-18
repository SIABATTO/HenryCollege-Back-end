const { Router } = require("express")
const courseRouter = Router()

const getHandler = require("../handlers/forCourse/getHandler") //traer de los handlers
const idHandler = require("../handlers/forCourse/idHandler")
//const postHandler = require("../handlers/courseHandler/postHandler")

courseRouter.get("/", getHandler)
courseRouter.get("/:id", idHandler)
//courseRouter.post("/", postHandler)

module.exports= {courseRouter}