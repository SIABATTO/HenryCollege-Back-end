const postTeacher = require("../../controllers/forTeacher/postTeacher")

const postHandler = async (req, res)=>{
    try {
        const created = await postTeacher(req.body)
        res.status(201).json(created)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = postHandler