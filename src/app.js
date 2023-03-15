const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const morgan = require("morgan")
const router = require("./routes/index")
const app = express()
app.use(cors())
app.use(express.json()) // esto reemplaza la dependencia body parser
app.use(express.urlencoded({ extended: true })) // esto reemplaza la dependencia body parser
app.use(cookieParser())
app.use(morgan("dev")) // el dev  para que todo se muestre en consola
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  })
app.use("/",router)  
// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = app