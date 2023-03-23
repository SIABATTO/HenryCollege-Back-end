const { Students } = require("../../db");
const { auth0Login, auth0SignUp } = require("../../utils/auth0Utils");

const createStudent = async (info) => {
    const { firstName, lastName, email, phone } = info

    try {
        // Crea el estudiante en Auth0
        const auth = await auth0SignUp(info, 'student')

        if (!auth._id) throw new Error("No se pudo crear el estudiante en Auth0")

        // Crea el estudiante en nuestra base de datos
        const newStudent = await Students.create({
            firstName,
            lastName,
            email,
            phone,
            auth0Id: auth._id,
            active: true,
            emailVerified: false,
        })

        return newStudent
    } catch (error) {
        throw new Error(error)
    }
}

const logInStudent = async (info) => {
    try {
        const { email, password } = info
        const auth = await auth0Login(email, password)

        if (!auth.access_token) throw new Error("No se pudo loguear el estudiante en Auth0")

        const student = await Students.findOne({
            where: {
                email,
            }
        })

        return { student, auth }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = {
    createStudent,
    logInStudent,
}