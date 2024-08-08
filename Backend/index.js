require("dotenv").config()

const express = require("express")
const app = express()
const PORT = process.env.PORT

app.listen(PORT || 3000, () => {
    console.log("Server has started on " + PORT + ".")
})

const establish_connection = require("./connection")
const con_str = process.env.MONGO_URL
try {
    establish_connection(con_str).then(() => console.log("Connected with DB."))
} catch (err) {
    console.log("DB connection error" + err.message)
}
