module.exports = {
    ALLSTUDENT:"select * from students order by name",
    IDSTUDENT:"select * from students where id = $1 "
}