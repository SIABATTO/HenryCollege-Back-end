const { Router } = require("express")
const studentsRouter = Router()
const postHandler = require("../handlers/forStudents/postHandler")
const getHandler = require("../handlers/forStudents/getHandler")
const checkJwt = require("../handlers/forAuth/protectRoutes")

// Rutas publicas
studentsRouter.post("/", postHandler)

// Ruta protegida
studentsRouter.get("/", checkJwt, getHandler)

module.exports = studentsRouter

