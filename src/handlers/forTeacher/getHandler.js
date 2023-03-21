const getTeachers = require("../../controllers/forTeacher/getTeacher")

const getHandler = async (req, res)=>{
    const {name} = req.query;
    const infoTeacher = await getTeachers()

    try {
        if(!name){
            infoTeacher ?  
                res.status(200).json(infoTeacher) 
                : 
                res.status(404).send("Teachers not found")
        }else{
            const filtered = infoTeacher.filter((e)=>{
                return e.firstName.toLowerCase().includes(name.toLowerCase())
            })
            res.status(200).json(filtered)
        }
    } catch (error) {
        res.status(400).send({ error:error.message})
    }
}

module.exports = getHandler