const {
    createStudent,
    logInStudent,
} = require("../../controllers/forStudents/postController")

const createStudentHandler = async (req, res) => {
    try {
        const created = await createStudent(req.body)
        res.status(200).json(created)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
}

const logInStudentHandler = async (req, res) => {
    try {
        const user = await logInStudent(req.body)
        res.status(200).json(user)
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    createStudentHandler,
    logInStudentHandler,
}