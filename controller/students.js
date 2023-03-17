const { fetch, fetchAll } = require("../database/pg.js")
const {ALLSTUDENT, IDSTUDENT } = require("../Moduls/students.modul")

module.exports = {
    GET: async (req, res) => {
        if (req.params.id) {
            res.send({
                data: await fetch(IDSTUDENT , req.params.id)
            })
        } else {
            res.send({
                data: await fetchAll(ALLSTUDENT)
            })
        }
    }
}