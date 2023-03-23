const createStudent = require("../../controllers/forStudents/postController")

const studentHandler = async (req, res) => {
//const {firstName,lastName,email,password,phone} = req.body
try {
    const created = await createStudent(req.body)
    res.status(200).json(created)
} catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message })
}

  


} 

module.exports = studentHandler