const {Router} = require("express")
const router = Router()
const {courseRouter} = require("./courseRouter")

router.use("/course", courseRouter)
// router.use("/students", studentsRouter)

module.exports= router; 