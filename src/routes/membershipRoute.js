const { Router} = require('express');
const membershipRoute= Router();

const striperRouter = require('../handlers/membershipHandler/membershipHandler')  //las funciones del handler

membershipRoute.post('/', striperRouter)  // la funcion q viene del handler acá como segundo argumento

module.exports = membershipRoute