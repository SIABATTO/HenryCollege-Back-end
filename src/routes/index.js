const {Router} = require("express")
const router = Router()
const {courseRouter} = require("./courseRouter")
const studentsRouter = require("./studentsRouter")
const teacherRouter = require("./teachersRouter")

router.use("/course", courseRouter)
router.use("/students", studentsRouter)
router.use("/teacher", teacherRouter)

module.exports= router; 