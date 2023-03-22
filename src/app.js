const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")
const router = require("./routes/index")
const { auth } = require('express-oauth2-jwt-bearer');

const app = express()
app.use(cors())
app.use(express.json()) // esto reemplaza la dependencia body parser
app.use(express.urlencoded({ extended: true })) // esto reemplaza la dependencia body parser
app.use(cookieParser())
app.use(morgan("dev")) // el dev  para que todo se muestre en consola

// Authorization middleware. When used, the Access Token must
// exist and be verified against the Auth0 JSON Web Key Set.
const checkJwt = auth({
  audience: 'http://localhost:3001/',
  issuerBaseURL: `https://dev-js4nbs9b.us.auth0.com/`,
});

app.use("/", checkJwt, router)

// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app