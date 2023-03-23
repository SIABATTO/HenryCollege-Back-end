const { Router } = require("express")
const teachersRouter = Router()
const {
  createTeacherHandler,
  logInTeacherHandler,
} = require("../handlers/forTeachers/postHandler")
const getHandler = require("../handlers/forTeachers/getHandler")
const checkJwt = require("../handlers/forAuth/protectRoutes")

// Ruta publica
teachersRouter.post("/", createTeacherHandler)
teachersRouter.post("/login", logInTeacherHandler)

// Ruta protegida
teachersRouter.get("/", checkJwt, getHandler)

module.exports = teachersRouter