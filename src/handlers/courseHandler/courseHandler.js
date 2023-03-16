const {getCourses, courseFilter} = require("../../controllers/courseControllers/forCourse") //lo que viene del controller

const handleCourse = async (req, res) => {
    const { name, level, duration } = req.query
    try {
        const result = await getCourses()
        if (!name) {
            res.status(200).json(result)
            return;
        }

       const filteredCourses = await courseFilter({ name, level, duration });
       res.status(200).json(filteredCourses);
    } catch (error) {
        console.log(error)
        res.status(400).json({ error: error.message })
    }
}


module.exports = handleCourse