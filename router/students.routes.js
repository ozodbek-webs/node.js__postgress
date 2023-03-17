const { Router } = require("express"),
    students = Router(),
    { GET } = require("../controller/students.js")

students.get("/students", GET)
students.get("/students/:id", GET)

module.exports = {students}