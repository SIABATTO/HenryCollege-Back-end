const {Router} = require("express")
const router = Router()
const {courseRouter} = require("./courseRouter.js")

router.use("/course", courseRouter)


module.exports = router