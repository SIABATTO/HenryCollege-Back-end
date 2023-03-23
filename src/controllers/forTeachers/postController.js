const { Teachers } = require("../../db");
const { auth0SignUp, auth0Login } = require("../../utils/auth0Utils");
var axios = require("axios").default;

const createTeacher = async (info) => {
    const { firstName, lastName, email, phone, imagen, password } = info

    // Crea el profesor en Auth0
    const auth = await auth0SignUp(info)

    if (!auth._id) throw new Error("No se pudo crear el estudiante en Auth0")

    // Crea el profesor en nuestra base de datos
    const newTeacher = await Teachers.findOrCreate({
        where: { firstName },
        defaults: {
            lastName,
            email,
            phone,
            imagen,
            auth0Id: auth._id
        }
    })
    return { newTeacher, auth }
}

const logInTeacher = async (req) => {
    try {
        const { email, password } = req.body

        const auth = await auth0Login(email, password)

        if (!auth.access_token) throw new Error("No se pudo loguear el profesor en Auth0")
        
        const teacher = await Teachers.findOne({
            where: {
                email,
            }
        })

        return { teacher, auth }
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

module.exports = {
    createTeacher,
    logInTeacher,
}