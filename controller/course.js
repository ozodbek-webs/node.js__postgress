const { fetch, fetchAll } = require("../database/pg.js")
const {ALLCOURSE, IDCOURSE } = require("../Moduls/course.modul")

module.exports = {
    GET: async (req, res) => {
        if (req.params.id) {
            res.send({
                data: await fetch(IDCOURSE , req.params.id)
            })
        } else {
            res.send({
                data: await fetchAll(ALLCOURSE)
            })
        }
    }
}