const { Router } = require("express");
const courseRouter = Router()
const  handlerCourse  = require("../handlers/forCourse/handlerCourse.js")

courseRouter.get("/",handlerCourse) 

module.exports = {courseRouter}