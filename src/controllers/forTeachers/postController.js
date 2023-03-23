const { Teachers } = require("../../db")
var axios = require("axios").default;

const createTeacher = async (info) => {
    const { firstName, lastName, email, phone, imagen, password } = info

    // Crea el profesor en Auth0
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

    // Crea el profesor en nuestra base de datos
    const newTeacher = await Teachers.findOrCreate({
        where: { firstName },
        defaults: {
            lastName,
            email,
            phone,
            imagen,
            auth0Id: data._id
        }
    })
    return { newTeacher, auth: data }
}

const logInTeacher = async (req) => {
    try {
        const { email, password } = req.body

        const { data } = await axios.post(`${process.env.AUTH0_DOMAIN}/oauth/token`, {
            grant_type: 'password',
            client_id: process.env.AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            audience: process.env.AUTH0_AUDIENCE,
            username: email,
            password,
            scope: 'openid email'
        })

        if (!data.access_token) throw new Error("No se pudo loguear el profesor en Auth0")
        
        const userProfile = await axios.get(`${process.env.AUTH0_DOMAIN}/userinfo`, {
            headers: {
                Authorization: `Bearer ${data.access_token}`
            }
        });

        console.log(userProfile.data);

        const teacher = await Teachers.findOne({
            where: {
                email,
            }
        })

        return { teacher, auth: data }
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}

module.exports = {
    createTeacher,
    logInTeacher,
}