const axios = require('axios').default;

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

const auth0SignUp = async (info) => {
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
      }
    })

    if (!data._id) throw new Error("No se pudo crear el usuario en Auth0")

    return data
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = {
  auth0Login,
  auth0SignUp,
}