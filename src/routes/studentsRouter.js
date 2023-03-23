const { Router } = require("express")
const studentsRouter = Router()
const {
  createStudentHandler,
  logInStudentHandler,
} = require("../handlers/forStudents/postHandler")
const getHandler = require("../handlers/forStudents/getHandler")
const checkJwt = require("../handlers/forAuth/protectRoutes")

// Rutas publicas
studentsRouter.post("/", createStudentHandler)
studentsRouter.post("/login", logInStudentHandler)

// Ruta protegida
studentsRouter.get("/", checkJwt, getHandler)

module.exports = studentsRouter

