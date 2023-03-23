const { auth } = require('express-oauth2-jwt-bearer');

// Middleware de autorización. Cuando se usa, el token de acceso debe
// existir y verificarse contra el conjunto de claves JSON Web de Auth0.
const checkJwt = auth({
  audience: 'http://localhost:3001/',
  issuerBaseURL: process.env.AUTH0_DOMAIN,
});

module.exports = checkJwt;
