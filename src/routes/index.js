const {Router} = require("express")
const router = Router()
const {courseRouter} = require("./courseRouter")
const studentsRouter = require("./studentsRouter")
const teachersRouter = require("./teachersRouter")
const checkJwt = require("../handlers/forAuth/protectRoutes")

// Rutas protegidas
router.use("/course", checkJwt, courseRouter)
router.use("/students", studentsRouter)
router.use("/teachers", teachersRouter)

module.exports = router; 