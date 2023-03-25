const {Router} = require("express")
const router = Router()
const courseRouter = require("./courseRouter")
const studentsRouter = require("./studentsRouter")
const teachersRouter = require("./teachersRouter")
const  membershipRoute= require("./membershipRoute")

// Rutas protegidas
router.use("/course", courseRouter)
router.use("/students", studentsRouter)
router.use("/teachers", teachersRouter)
router.use("/membership", membershipRoute)

module.exports = router; 