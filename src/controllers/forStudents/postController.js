const { Students } = require("../../db")
var axios = require("axios").default;

const createStudent = async (info) => {
    const { firstName, lastName, email, password, phone } = info

    try {
        // Crea el estudiante en Auth0
        const { data } = await axios.post(`${process.env.AUTH0_DOMAIN}/dbconnections/signup`, {
            connection: 'Username-Password-Authentication',
            password,
            email,
            'user_metadata': {
                firstName,
                lastName,
                phone,
            }
        })

        if (!data._id) throw new Error("No se pudo crear el estudiante en Auth0")

        // Crea el estudiante en nuestra base de datos
        const newStudent = await Students.create({
            firstName,
            lastName,
            email,
            phone,
            auth0Id: data._id,
            active: true,
        })

        return newStudent
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

const logInStudent = async (info) => {
    try {
        const { email, password } = info

        const { data } = await axios.post(`${process.env.AUTH0_DOMAIN}/oauth/token`, {
            grant_type: 'password',
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience: process.env.AUTH0_AUDIENCE,
            username: email,
            password,
        })

        if (!data.access_token) throw new Error("No se pudo loguear el estudiante en Auth0")

        const student = await Students.findOne({
            where: {
                email,
            }
        })

        return {student, auth: data}
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

module.exports = {
    createStudent,
    logInStudent,
}