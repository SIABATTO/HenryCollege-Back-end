const postController = require("../../controllers/forTeachers/postController")

const postHandler = async(req,res) => {
try {
    const created = await postController(req.body)  
    res.status(200).json(created)
} catch (error) {
    res.status(500).json({message: error.message})
}
}

module.exports = postHandler