/*const createCourse = require("../../controllers/courseControllers/postController")

const postHandler = async (req, res) => {
  const { name, tags, level, duration, price, description, teacherId } = req.body
  try {
    const course = await createCourse({
      name,
      tags,
      level,
      duration,
      price,
      description,
      teacherId,
    })

    res.send(course)
  } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message })
  }
}

module.exports = postHandler*/

const createCourse = require("../../controllers/forCourse/postController")

const postHandler = async (req, res) => {
  //const { name, tags, level, duration, price, description, teacherId } = req.body
  try {
    const course = await createCourse(req.body)

    res.send(course)
  } catch (error) {
      console.log(error)
      res.status(400).json({ error: error.message })
  }
}

module.exports= postHandler