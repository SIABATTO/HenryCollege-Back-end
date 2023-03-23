const axios = require('axios').default;

/**
 * @typedef {object} Auth0LogInResponse
 * @property {string} access_token - Token de acceso
 * @property {string} id_token - Token de identidad
 */

/**
 * Loguea un usuario en Auth0 y devuelve el token de acceso
 * @param {string} email
 * @param {string} password
 * @return {Auth0LogInResponse}
 */
const auth0Login = async (email, password) => {
  try {
    const { data } = await axios.post(`${process.env.AUTH0_DOMAIN}/oauth/token`, {
      grant_type: 'password',
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: process.env.AUTH0_AUDIENCE,
      username: email,
      password,
      scope: 'openid email',
    });

    if (!data.access_token) throw new Error('No se pudo loguear el usuario en Auth0');

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * @typedef {object} Auth0SignUpInfo
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} password
 * @property {string} phone
 */

/**
 * Crea un usuario en Auth0 y un objeto con los datos del usuario en Auth0
 * @param {Auth0SignUpInfo} info
 * @param {string} userType - 'student' | 'teacher' | 'admin'
 * @return {object}
  */
const auth0SignUp = async (info, userType) => {
  const { firstName, lastName, email, password, phone } = info;
  try {
    const { data } = await axios.post(`${process.env.AUTH0_DOMAIN}/dbconnections/signup`, {
      connection: 'Username-Password-Authentication',
      password,
      email,
      'user_metadata': {
        firstName,
        lastName,
        phone,
        userType,
      }
    })

    if (!data._id) throw new Error("No se pudo crear el usuario en Auth0")

    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @typedef {object} Auth0User
 * @property {string} _id
 * @property {string} email
 * @property {string} email_verified
 * @property {string} name
 * @property {string} nickname
 * @property {string} picture
 * @property {string} user_id
 */


/**
 * Devuelve el token de administrador de Auth0
 * @return {string}
 * @private
  */
const getAdminToken = async () => {
  try {
    const { data } = await axios.post(`${process.env.AUTH0_DOMAIN}/oauth/token`, {
      grant_type: 'client_credentials',
      client_id: process.env.AUTH0_CLIENT_ID,
      client_secret: process.env.AUTH0_CLIENT_SECRET,
      audience: `${process.env.AUTH0_DOMAIN}/api/v2/`,
    });

    if (!data.access_token) throw new Error('No se pudo obtener el token de administrador de Auth0');

    return data.access_token;
  } catch (error) {
    throw new Error(error);
  }
}

/**
 * Advertencia: Esta función es solo para administradores
 * Devuelve todos los usuarios guardados en Auth0
 * @typedef {object} Auth0UserResponse
 * @property {Auth0User[]} users
  */
const getAllUsers = async () => {
  try {
    const token = await getAdminToken();

    const { data } = await axios.get(`${process.env.AUTH0_DOMAIN}/api/v2/users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!data) throw new Error('No se pudo obtener los usuarios de Auth0');

    return data;
  } catch (error) {
    throw new Error(error);
  }
}

module.exports = {
  auth0Login,
  auth0SignUp,
  getAllUsers
}