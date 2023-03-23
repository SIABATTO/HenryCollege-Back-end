const {
    createTeacher,
    logInTeacher,
} = require("../../controllers/forTeachers/postController")

const createTeacherHandler = async (req, res) => {
    try {
        const created = await createTeacher(req.body)
        res.status(200).json(created)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const logInTeacherHandler = async (req, res) => {
    try {
        const user = await logInTeacher(req)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createTeacherHandler,
    logInTeacherHandler,
}