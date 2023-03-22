const createCourse = require("../../controllers/forCourse/postController")

const postHandler = async (req, res) => {
  //const { name, tags, level, duration, price, description, teacherId } = req.body
  try {
    const course = await createCourse(req.body)

    res.send(course)
  } catch (error) {
      console.log(error)
      res.status(500).json({ message: error.message })
  }
}

module.exports = postHandler