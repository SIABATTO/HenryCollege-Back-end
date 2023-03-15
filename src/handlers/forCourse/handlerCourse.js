const {getCourses} = require("../../controllers/forCourse/controllerCourse.js")

const handlerCourse = async (req, res) => {

    try {
        const results = await getCourses()
        res.status(200).json(results)
    } catch (error) {
        console.log(error)
        res.status(400).send({ error: error.message})
    }
}

module.exports = handlerCourse
