const { Router } = require("express")
const teachersRouter = Router()
const postHandler = require("../handlers/forTeachers/postHandler")
const getHandler = require("../handlers/forTeachers/getHandler")
const checkJwt = require("../handlers/forAuth/protectRoutes")

// Ruta publica
teachersRouter.post("/", postHandler)

// Ruta protegida
teachersRouter.get("/", checkJwt, getHandler)

module.exports = teachersRouter