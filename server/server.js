const express = require("express"),
    app = express(),
    dotenv = require("dotenv").config(),
    { course } = require("../router/course.routes"),
    { students } = require("../router/students.routes"),
    PORT = process.env.PORT || 3000;


app.use(course)
app.use(students)
app.listen(PORT, console.log('listen on ...' + PORT))