const { auth } = require('express-oauth2-jwt-bearer');

// Middleware de autorización. Cuando se usa, el token de acceso debe
// existir y verificarse contra el conjunto de claves JSON Web de Auth0.
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
});

module.exports = checkJwt;
