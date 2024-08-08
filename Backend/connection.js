const mongoose = require("mongoose")

function connect(con_str) {
    return mongoose.connect(con_str)
}

module.exports = connect