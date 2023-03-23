const {Router} = require("express")
const router = Router()
const courseRouter = require("./courseRouter")
const studentsRouter = require("./studentsRouter")
const teachersRouter = require("./teachersRouter")

// Rutas protegidas
router.use("/course", courseRouter)
router.use("/students", studentsRouter)
router.use("/teachers", teachersRouter)

module.exports = router; 