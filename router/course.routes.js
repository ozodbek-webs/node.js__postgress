const { Router } = require("express"),
    course = Router(),
    { GET } = require("../controller/course.js")

course.get("/course", GET)
course.get("/course/:id", GET)

module.exports = {course}